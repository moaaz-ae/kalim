import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
  locals: { getSession, supabase },
}) => {
  const user = (await getSession())?.user;
  let profile = undefined;

  if (user) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*, articles(*)')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error(error);
    }

    profile = data;

    if (!profile) {
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: user.id,
            name: 'Change This',
            about: 'Change This',
          },
        ])
        .single();

      if (profileError) {
        console.error(profileError);
      }

      profile = profileData;
    }
  }

  return { profile };
};
