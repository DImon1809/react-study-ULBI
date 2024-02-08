import { useNavigate } from "react-router-dom";

import MyButton from "./UI/button/MyButton";

export default function PostItem(props) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post-content">
        <strong>{props.post.id + " " + props.post.title}</strong>
        <div>
          <p>{props.post.body}</p>
        </div>
      </div>
      <div className="post-btn">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.removePost(props.post.id)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
}
