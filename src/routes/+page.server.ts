import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(303, '/explore');
  }

  return;
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
};
