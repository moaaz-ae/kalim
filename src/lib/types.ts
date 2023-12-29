interface Profile {
  id: string;
  about: string;
  name: string;
  username: string;
  created_at: string;
  articles: Article[];
}

interface Article {
  id: string;
  title: string;
  user_id: string;
  is_published: boolean;
  slug: string;
  content: string;
  created_at: string;
  profiles: Profile;
}

interface User {
  id: string;
  email: string;
  profile: Profile;
}

export type { Article, User, Profile };
