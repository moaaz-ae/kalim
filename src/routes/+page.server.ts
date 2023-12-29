import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({}) => {
  throw redirect(303, '/explore');
};

export const actions = {
  sendMagicLink: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;

    console.log(email);

    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: 'http://localhost:5173/explore',
      },
    });
  },

  changeProfile: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const about = (formData.get('about') as string) || null;
    const user = (await getSession())?.user;

    const { data, error } = await supabase
      .from('profiles')
      .update({
        name: name,
        about: about || '',
      })
      .eq('id', user?.id)
      .select('username')
      .single();

    if (error) {
      console.error(error);
    }

    throw redirect(303, `/${data!.username}`);
  },
};
