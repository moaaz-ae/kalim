export const load = async ({ locals: { getSession }, route }) => {
  return {
    session: await getSession(),
  };
};
