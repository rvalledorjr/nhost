import { NhostClient, type NhostClientConstructorParams } from '@nhost/nhost-js';
import Cookies from 'js-cookie';
import { waitFor } from 'xstate/lib/waitFor';

export default async function createServerSideClient(
  params: NhostClientConstructorParams,
  context: { cookies: any; query: any }
) {
  const nhost = new NhostClient({
    clientStorageType: 'custom',
    clientStorage: {
      getItem: (key) => {
        const urlKey = key === 'nhostRefreshToken' ? 'refreshToken' : key;
        const urlValue = context.query[urlKey];
        const cookieValue = Cookies.get(key) ?? null;
        const nextCtxValue = context.cookies.get(key);

        return typeof urlValue === 'string' ? urlValue : cookieValue ?? nextCtxValue;
      },
      setItem: (key, value) => {
        // TODO: Set expires based on the actual refresh token expire time
        // For now, we're using 30 days so the cookie is not removed when the browser is closed because if `expiers` is omitted, the cookie becomes a session cookie.
        Cookies.set(key, value, { path: '/', httpOnly: false, sameSite: 'lax', expires: 30 });
      },
      removeItem: (key) => {
        Cookies.remove(key);
      }
    },
    start: true,
    autoRefreshToken: false,
    autoSignIn: true,
    ...params
  });

  if (!nhost.auth.client.interpreter) {
    return nhost;
  }

  await waitFor(nhost.auth.client.interpreter, (state: any) => !state.hasTag('loading'));

  return nhost;
}
