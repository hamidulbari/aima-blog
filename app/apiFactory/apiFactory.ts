export const BASE_URL = "https://aima.sanntra.com/administrator/api/v1/";

interface APIS {
  GET_BLOG_BANNER: string;
  GET_BLOG_CATEGORIES: string;
  GET_BLOGS_BY_CATEGORY: string;
  GET_BLOG_COVER: string;
  GET_BLOG_DETAILS: string;
}

export const APIS: APIS = {
  GET_BLOG_BANNER: `${BASE_URL}blog/banner`,
  GET_BLOG_CATEGORIES: `${BASE_URL}blog/categories`,
  GET_BLOGS_BY_CATEGORY: `${BASE_URL}blog/`,
  GET_BLOG_COVER: `${BASE_URL}blog/cover`,
  GET_BLOG_DETAILS: `${BASE_URL}blog/detail/`,
};
