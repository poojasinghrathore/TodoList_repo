import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}> Click Me!!! </button>
      <p> {count} </p>
    </>
  );
}
