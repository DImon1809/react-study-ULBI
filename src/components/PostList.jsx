import { TransitionGroup, CSSTransition } from "react-transition-group";

import PostItem from "./PostItem";

import "./PostList.scss";

export default function PostList({ posts, title, removePost, searchPost }) {
  if (!searchPost.length)
    return <h1 style={{ textAlign: "center" }}>Посты не были найдены</h1>;

  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((_l, index) => (
          <CSSTransition key={_l.id} timeout={500} classNames="item">
            <PostItem post={_l} num={index + 1} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
