import { API_DEFINITION_ENDPOINT } from '@abp/ng.schematics/constants';
import { SchematicsException } from '@angular-devkit/schematics';
import { interpolate } from '@abp/ng.schematics/utils';
import { ApiDefinition } from '@abp/ng.schematics/models';
import { Exception } from '@abp/ng.schematics/enums';

export async function getApiDefinition(sourceUrl: string) {
  const url = sourceUrl + API_DEFINITION_ENDPOINT;
  let body: ApiDefinition;
  try {
    const got = (await import('got')).default;
    const response = await got<ApiDefinition>(url, {
      responseType: 'json',
      searchParams: { includeTypes: true },
      https: { rejectUnauthorized: false },
    });
    body = response.body as ApiDefinition;
  } catch ({ response }) {
    // handle redirects
    if (!response?.body || response.statusCode >= 400)
      throw new SchematicsException(interpolate(Exception.NoApi, url));

    body = response.body;
  }

  return body;
}
