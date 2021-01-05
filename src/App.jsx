import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  //配列の分割代入で１つ目がstateを管理すつ変数（なんでもOK）、２つ目がstateを変更する関数

  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };

  return (
    //Fragementの省略版
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>

      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
    // <React.Fragment>
    //   <h1>こんにちは</h1>
    //   <p>元気ですか？</p>
    // </React.Fragment>
    //Reactでは複数の要素を表示させたい時は１つの塊にする必要がある
    //ただし、下記のように記載すると不要なタグ（div）までレンダリングされるので、
    //読み込んでいるReactライブラリのReact.Fragmentで囲う
    // <div>
    //   <h1>こんにちは</h1>
    //   <p>元気ですか?</p>
    // </div>
  );
};

//上記の関数を他のファイルでも使用するという宣言
export default App;
