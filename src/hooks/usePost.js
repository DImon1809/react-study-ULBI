import { useMemo } from "react";

export const useSortedPosts = (posts, searchQuery) => {
  const searchPost = useMemo(() => {
    if (!searchQuery) return posts;

    return posts.filter((_l) =>
      _l.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, posts]);

  return searchPost;
};
