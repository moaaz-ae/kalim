import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
  locals: { supabase },
  params: { article_id },
}) => {
  const { data: article, error } = await supabase
    .from('articles')
    .select('*, profiles(name, id)')
    .eq('id', article_id)
    .single();

  if (error) {
    console.error(error);
    throw redirect(303, '/explore');
  }

  return { article };
};
