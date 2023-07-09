import React from "react";

export const ColorfulMessage = (props) => {
  console.log(props);

  const { color, children } = props;
  const contentStyle = {
    //プロパティ名と当てはめる変数が同名の場合は省略可能
    color,
    // color: color,
    //font-sizeではないことに注意（キャメルケース）
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
