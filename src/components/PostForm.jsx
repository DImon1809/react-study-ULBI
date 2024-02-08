import { useState } from "react";

import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm({ addNewPost }) {
  const [title, setTitle] = useState("");
  const [paragrah, setParagrah] = useState("");

  const addNewPostHandler = (event) => {
    event.preventDefault();

    if (!title && !paragrah) return alert("Введите данные!");

    const newPost = {
      id: new Date().toLocaleString().split(",").at(-1),
      title,
      body: paragrah,
    };
    setTitle("");
    setParagrah("");

    addNewPost(newPost);
  };

  return (
    <form className="my-form" style={{ marginTop: "15px" }}>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={paragrah}
        onChange={(event) => setParagrah(event.target.value)}
      />
      <MyButton onClick={addNewPostHandler}>Добавить</MyButton>
    </form>
  );
}
