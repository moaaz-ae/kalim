import type { Article } from '$lib/types';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
  locals: { supabase },
  params: { username },
}) => {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*, articles(*)')
    .eq('username', username)
    .single();

  if (error) {
    console.error(error);
  }

  if (!profile) {
    throw redirect(303, '/explore');
  }

  if (profile.articles) {
    profile.articles = profile!.articles
      .map((article: Article) => ({
        ...article,
        profile: profile,
      }))
      .sort(
        (a: Article, b: Article) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
  }

  return {
    profile,
  };
};
