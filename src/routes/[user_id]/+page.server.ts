import type { Article } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
  locals: { supabase },
  params: { user_id },
}) => {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*, articles(*)')
    .eq('id', user_id)
    .single();

  if (error) {
    console.error(error);
  }

  profile.articles = profile.articles.map((article: Article) => ({
    ...article,
    profiles: profile,
  }));

  return { profile };
};
