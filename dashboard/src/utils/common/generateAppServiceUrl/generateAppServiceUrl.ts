import { getLocalHasuraServiceUrl, getLocalServicesPort } from '@/utils/env';

export type NhostService =
  | 'auth'
  | 'graphql'
  | 'functions'
  | 'storage'
  | 'hasura';

/**
 * The default slugs that are used when running the dashboard locally. These
 * values are used both in local mode and when running the dashboard locally
 * against the remote (either staging or production) backend.
 */
export const defaultLocalBackendSlugs: Record<NhostService, string> = {
  auth: '/v1/auth',
  graphql: '/v1/graphql',
  functions: '/v1/functions',
  storage: '/v1/files',
  hasura: '',
};

/**
 * The default slugs that are used when running the dashboard against the
 * remote (either staging or production) backend in a cloud environment.
 */
export const defaultRemoteBackendSlugs: Record<NhostService, string> = {
  auth: '/v1',
  graphql: '/v1',
  functions: '/v1',
  storage: '/v1',
  hasura: '',
};

/**
 * Generates a service specific URL for a project. Provided `subdomain` is
 * omitted if the dashboard is running in local mode.
 *
 * @param subdomain - The project's subdomain
 * @param region - The project's region
 * @param service - The service to generate the URL for
 * @param localBackendSlugs - Custom slugs to be used when running the dashboard locally
 * @param localBackendSlugs - Custom slugs to be used when running the dashboard in a cloud environment
 * @returns The service specific URL for the project
 */
export default function generateAppServiceUrl(
  subdomain: string,
  region: string,
  service: 'auth' | 'graphql' | 'functions' | 'storage' | 'hasura',
  localBackendSlugs = defaultLocalBackendSlugs,
  remoteBackendSlugs = defaultRemoteBackendSlugs,
) {
  const LOCAL_SERVICES_PORT = getLocalServicesPort();
  const LOCAL_HASURA_URL = getLocalHasuraServiceUrl();

  // We are treating this case as if NEXT_PUBLIC_NHOST_PLATFORM is true,
  // but we need to make sure to use Hasura URLs are pointing to `localhost`
  // as this is currently a limitation of Hasura.
  if (subdomain && subdomain !== 'localhost' && !region) {
    if (service === 'hasura') {
      return `${LOCAL_HASURA_URL}${localBackendSlugs[service]}`;
    }

    const nhostBackend =
      process.env.NEXT_PUBLIC_ENV === 'staging'
        ? 'staging.nhost.run'
        : 'nhost.run';

    const customSubdomainWithProtocol = `https://${subdomain}`;

    if (LOCAL_SERVICES_PORT && LOCAL_SERVICES_PORT !== '443') {
      return `${customSubdomainWithProtocol}.${nhostBackend}:${LOCAL_SERVICES_PORT}${localBackendSlugs[service]}`;
    }

    return `${customSubdomainWithProtocol}.${nhostBackend}${localBackendSlugs[service]}`;
  }

  if (process.env.NEXT_PUBLIC_NHOST_PLATFORM !== 'true') {
    return `${LOCAL_HASURA_URL}${localBackendSlugs[service]}`;
  }

  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return `${process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || LOCAL_HASURA_URL}${
      localBackendSlugs[service]
    }`;
  }

  if (process.env.NEXT_PUBLIC_ENV === 'staging') {
    return `https://${subdomain}.${service}.${region}.staging.nhost.run${remoteBackendSlugs[service]}`;
  }

  return `https://${subdomain}.${service}.${region}.nhost.run${remoteBackendSlugs[service]}`;
}
