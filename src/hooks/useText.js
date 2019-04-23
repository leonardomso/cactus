import { useState } from 'react';

const useText = (addTask) => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return;
    addTask(text);
    setText("");
};

  return { text, setText, handleSubmit }
};

export default useText;