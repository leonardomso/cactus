import { useState } from 'react';

const useText = () => {
  const [text, setText] = useState("");

  return { text, setText }
};

export default useText;