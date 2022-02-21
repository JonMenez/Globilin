import * as React from "react";

const Button = ({ style, textContent, click }) => {
  return (
    <button className={style} onClick={click}>
      {textContent}
    </button>
  );
};

export default Button;
