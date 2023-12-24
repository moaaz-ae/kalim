import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, created_at, user_id, profiles(name, id)')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
  }

  return { articles };
};
