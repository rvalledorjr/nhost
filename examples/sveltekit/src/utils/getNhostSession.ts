import createServerSideClient from '$src/utils/createServerSideClient';
import type { NhostClientConstructorParams } from '@nhost/nhost-js';

export default async function getNhostSession(
  params: NhostClientConstructorParams,
  context: { cookies: any; query: any }
) {
  const nhost = await createServerSideClient(params, context);

  if (!nhost.auth.isAuthenticated()) {
    return null;
  }

  const { accessToken, refreshToken, user } = nhost.auth.client.interpreter!.getSnapshot().context;

  return {
    accessToken: accessToken.value!,
    accessTokenExpiresIn: (accessToken.expiresAt!.getTime() - Date.now()) / 1_000,
    refreshToken: refreshToken.value!,
    user: user!
  };
}
