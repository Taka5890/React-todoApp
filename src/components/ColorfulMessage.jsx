import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //オブジェクトの変数とプロパティ名が同じだと省略可能
    //color: color,
    color,
    fontSize: "18px"
  };
  //return <p style={contentStyle}>{props.message}</p>;
  //childrenタグ内の要素を表示する
  return <p style={contentStyle}>{children}</p>;
};
