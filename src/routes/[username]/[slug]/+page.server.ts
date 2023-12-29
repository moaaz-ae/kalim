import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
  locals: { supabase },
  params: { slug },
}) => {
  const { data: article, error } = await supabase
    .from('articles')
    .select('*, profiles(name, id, username)')
    .eq('slug', slug)
    .single();

  if (error || !article) {
    console.error(error);
    throw redirect(303, '/explore');
  }

  return { article };
};
