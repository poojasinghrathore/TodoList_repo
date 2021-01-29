import React from "react";

export default function ListElement(props) {
  return (
    <>
      <p>{props.title}</p>
      <button> Edit </button>
      <button onClick={props.delete}> Delete </button>
    </>
  );
}
