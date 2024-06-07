import type { Actions, PageServerLoad } from './$types';
import { redirect, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({
  locals: { supabase, safeGetSession },
}) => {
  const user = (await safeGetSession())?.user;

  const { data, error } = await supabase
    .from('profiles')
    .select('*, articles(*)')
    .eq('id', user?.id)
    .single();

  if (data) {
    throw redirect(303, `/${data.username}`);
  }

  return;
};

export const actions: Actions = {
  createProfile: async ({ request, locals: { supabase, safeGetSession } }) => {
    const formData = await request.formData();
    let username = formData.get('username') as string;
    username = username.trim().toLocaleLowerCase().replace(/ /g, '-');
    const name = formData.get('name') as string;
    const about = formData.get('about') as string | null;
    const user = (await safeGetSession())?.user;

    const { data, error } = await supabase
      .from('profiles')
      .insert({
        id: user?.id,
        username: username,
        name: name,
        about: about || '',
      })
      .select('username')
      .single();

    if (error && error.code === '23505') {
      console.error(error);
      return fail(400, {
        username,
        name,
        about,
        usernameExists: true,
      });
    }

    throw redirect(303, `/${data!.username}`);
  },
};
