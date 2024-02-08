import React, { useState, useEffect, useCallback, useRef } from "react";

import { useSortedPosts } from "../hooks/usePost";
import { getPageCount } from "../utils/page";
import { usePagination } from "../hooks/usePagination";
import PostService from "../API/PostService";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/myModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";

import "../styles/App.scss";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [isPostLoading, setIsPostLoading] = useState(true);
  const searchPost = useSortedPosts(posts, searchQuery);
  const pageArray = usePagination(totalPage);
  const lastElemet = useRef();

  const fetchPost = useCallback(async () => {
    try {
      setIsPostLoading(true);

      const response = await PostService.getAll(limit, page);

      setIsPostLoading(false);

      if (!response?.data?.posts) return alert("Данные спиздили!");

      setPosts(response.data.posts);

      const totalCount = response.headers["x-total-count"];

      return setTotalPage(getPageCount(totalCount, limit));
    } catch (err) {
      return alert("Данные спиздили!");
    }
  }, [limit, page]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost, page]);

  const addNewPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const removePost = (id) => setPosts(posts.filter((_l) => _l.id !== id));

  const onChangeHandler = (algSort) => {
    setPosts(
      [...posts].sort((left, right) =>
        left[algSort].localeCompare(right[algSort])
      )
    );
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{ marginTop: "30px" }}>
        Создать пользователя
      </MyButton>
      <hr style={{ margin: "15px" }} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addNewPost={addNewPost} />
      </MyModal>
      <PostFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSort={selectedSort}
        onChangeHandler={onChangeHandler}
      />

      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={searchQuery ? searchPost : posts}
          searchPost={searchPost}
          removePost={removePost}
          title="Посты про JS"
        />
      )}
      <div style={{ height: "20px", background: "red" }}></div>
      <Pagination setPage={setPage} pageArray={pageArray} page={page} />
    </div>
  );
}
