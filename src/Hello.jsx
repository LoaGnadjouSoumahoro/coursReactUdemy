import React from "react";

export const Hello = (props) => {
  let bangs = "!".repeat(props.bangs);

  return (
    <div>
      <p>
        Hi {props.to} from {props.from} {bangs}
      </p>
    </div>
  );
};

// Définition des valeurs par défaut
Hello.defaultProps = {
  from: "Anonymous",
  bangs: 1,
};
