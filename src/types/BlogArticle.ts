export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readTime?: number; // in minutes
  views?: number;
  likes?: number;
  comments?: number;
}
