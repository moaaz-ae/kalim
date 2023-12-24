interface Profile {
  id: string;
  about: string;
  name: string;
  created_at: string;
  articles: Article[];
}

interface Article {
  id: string;
  title: string;
  user_id: string;
  is_published: boolean;
  content: string;
  created_at: string;
}

interface User {
  id: string;
  email: string;
  profile: Profile;
}

export type { Article, User, Profile };
