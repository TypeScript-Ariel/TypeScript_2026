// import { useState } from 'react'

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        Click
      </button>

      <div>{count}</div>
    </>
  );
}

export default App;
