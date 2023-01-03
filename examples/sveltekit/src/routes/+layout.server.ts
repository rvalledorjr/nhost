import { redirect, type ServerLoad } from '@sveltejs/kit';
import getNhostSession from '$src/utils/getNhostSession';

export const load: ServerLoad = async ({ cookies, url }) => {
  const session = await getNhostSession(
    { subdomain: 'cohxhgpwzlptzbpdglmq', region: 'eu-central-1.staging' },
    { cookies, query: url?.searchParams }
  );

  if (!session) {
    if (url.pathname === '/sign-in') {
      return;
    }

    throw redirect(302, '/sign-in');
  }

  return {
    session
  };
};
