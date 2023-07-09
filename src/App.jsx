/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMeassage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onclickCountUp = () => {
    setNum(num + 1);
  };
  const onclickSwitchFaceShowFlag = () => {
    // setFaceShowFlag(faceShowFlag ? false : true);
    setFaceShowFlag(!faceShowFlag);
  };
  //関心の分離
  //最初の1回
  useEffect(() => {}, []);

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    //Jsのreturnの中でHTMLタグを記載していく記法をJSX記法というみたい
    //一塊の要素を返さないとエラーとなる
    //React.Fragmentで不要な要素のレンダリングを行わなくする。
    //React.Fragmentは<> </>で代用可
    <React.Fragment>
      {/* //スタイルを直接指定 */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* //スタイルをjsオブジェクト経由で指定 */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>

      <ColorfulMessage color="pink" message="お元気です"></ColorfulMessage>

      <button onClick={onclickCountUp}>カウントアップボタン</button>
      <p>{num}</p>
      <button onClick={onclickSwitchFaceShowFlag}>on/offボタン</button>
      {faceShowFlag && <p>:-)</p>}
    </React.Fragment>
  );
};

export default App;
