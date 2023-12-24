export const load = async ({ locals: { getSession, supabase } }) => {
  const user = (await getSession())?.user;

  if (user) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error(error);
    }

    if (!data) {
      const { error: profileError } = await supabase.from('profiles').insert([
        {
          id: user.id,
          name: 'Change this to your name',
          about: 'Change this to be about you.',
        },
      ]);

      if (profileError) {
        console.error(profileError);
      }
    }
  }

  return {
    session: await getSession(),
  };
};
