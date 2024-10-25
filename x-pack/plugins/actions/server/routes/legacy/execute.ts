/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { schema } from '@kbn/config-schema';
import { UsageCounter } from '@kbn/usage-collection-plugin/server';
import { IRouter } from '@kbn/core/server';
import { ILicenseState, verifyApiAccess, isErrorThatHandlesItsOwnResponse } from '../../lib';

import { ActionTypeExecutorResult, ActionsRequestHandlerContext } from '../../types';
import { BASE_ACTION_API_PATH } from '../../../common';
import { asHttpRequestExecutionSource } from '../../lib/action_execution_source';
import { trackLegacyRouteUsage } from '../../lib/track_legacy_route_usage';
import { connectorResponseSchemaV1 } from '../../../common/routes/connector/response';

const paramSchema = schema.object({
  id: schema.string({
    meta: { description: 'An identifier for the connector.' },
  }),
});

const bodySchema = schema.object({
  params: schema.recordOf(schema.string(), schema.any()),
});

export const executeActionRoute = (
  router: IRouter<ActionsRequestHandlerContext>,
  licenseState: ILicenseState,
  usageCounter?: UsageCounter
) => {
  router.post(
    {
      path: `${BASE_ACTION_API_PATH}/action/{id}/_execute`,
      options: {
        access: 'public',
        summary: `Run a connector`,
        // @ts-expect-error TODO(https://github.com/elastic/kibana/issues/196095): Replace {RouteDeprecationInfo}
        deprecated: true,
        tags: ['oas-tag:connectors'],
      },
      validate: {
        request: {
          body: bodySchema,
          params: paramSchema,
        },
        response: {
          200: {
            description: 'Indicates a successful call.',
            body: () => connectorResponseSchemaV1,
          },
        },
      },
    },
    router.handleLegacyErrors(async function (context, req, res) {
      verifyApiAccess(licenseState);

      if (!context.actions) {
        return res.badRequest({ body: 'RouteHandlerContext is not registered for actions' });
      }

      const actionsClient = (await context.actions).getActionsClient();
      const { params } = req.body;
      const { id } = req.params;
      trackLegacyRouteUsage('execute', usageCounter);
      try {
        const body: ActionTypeExecutorResult<unknown> = await actionsClient.execute({
          params,
          actionId: id,
          source: asHttpRequestExecutionSource(req),
          relatedSavedObjects: [],
        });
        return body
          ? res.ok({
              body,
            })
          : res.noContent();
      } catch (e) {
        if (isErrorThatHandlesItsOwnResponse(e)) {
          return e.sendResponse(res);
        }
        throw e;
      }
    })
  );
};
