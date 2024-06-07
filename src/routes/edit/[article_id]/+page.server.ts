import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
  locals: { supabase, safeGetSession },
  params: { article_id },
}) => {
  const user = (await safeGetSession())?.user;

  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', article_id)
    .single();

  if (error || !article || user?.id !== article.user_id) {
    console.error(error);
    throw redirect(303, '/explore');
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', article.user_id)
    .single();

  if (profileError) {
    console.error(profileError);
    throw redirect(303, '/explore');
  }

  if (user?.id !== profile?.id) {
    throw redirect(303, '/explore');
  }

  if (article && profile) {
    article.profile = profile;
  }

  return { article };
};
