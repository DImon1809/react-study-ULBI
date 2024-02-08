import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";

import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

export default function PostIdPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(id);

    setPost(response.data.post);
  });

  const [fetchCommins, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getComments(id);

    setComment(response.data.comment.comments);
  });

  useEffect(() => {
    fetchPostById(id);

    fetchCommins(id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}

      <hr />
      <h1>Комментарии</h1>

      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comment.map((_l, index) => (
            <div key={index} style={{ marginTop: "10px" }}>
              {_l}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
