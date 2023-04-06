export default () => {
  const config = useRuntimeConfig();
  const wpApiUrl = config.public.wpApiUrl;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${wpApiUrl}/wp-json/wp/v2/${endpoint}`);
  };

  const getPosts = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 9
  ) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }

    return get<T>(query);
  };

  const getPost = async <T>(slug: string) => {
    return get<T>(`posts?slug=${slug}&_embed`);
  };

  const getCategories = async () => get("categories");

  const getCategory = async (slug: string) => get(`categories?slug=${slug}`);

  return {
    get,
    getPosts,
    getPost,
    getCategory,
    getCategories,
  };
};
