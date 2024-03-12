import React from "react";

export const FriendsList = (props) => {
  const { name, hobbies } = props;

  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
