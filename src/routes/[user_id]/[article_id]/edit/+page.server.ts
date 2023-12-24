import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
  params: { article_id, user_id },
}) => {
  const user = (await getSession())?.user;

  if (user?.id !== user_id) {
    throw redirect(303, '/explore');
  }

  const { data: article, error } = await supabase
    .from('articles')
    .select('*, profiles(id)')
    .eq('id', article_id)
    .single();

  if (error) {
    console.error(error);
    throw redirect(303, '/explore');
  }

  return { article };
};
