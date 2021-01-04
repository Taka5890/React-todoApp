import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    //Fragementの省略版
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="お元気です" />
      <button onClick={onClickButton}>ボタン</button>
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
