// src/routes/+layout.server.ts
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Article, Profile } from '$lib/types';

export const load = (async ({ locals: { safeGetSession, supabase }, url }) => {
  const { session, user } = await safeGetSession();

  let profile: Profile | undefined = undefined;

  if (user) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*, articles(*)')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error(error);
    }

    if (!data && url.pathname !== '/create') {
      throw redirect(303, '/create');
    } else if (data != undefined) {
      profile = data;
      if (profile!.articles) {
        profile!.articles = profile!.articles.map((article: Article) => ({
          ...article,
          profile: profile!,
        }));
      }
    }
  }

  return {
    session,
    user,
    userProfile: profile,
  };
}) satisfies LayoutServerLoad;
