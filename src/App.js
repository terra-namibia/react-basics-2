// /* eslint react-hooks/exhaustive-deps: */
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ColorfulMessage from "./components/ColorfulMessage";
import { ChildArea } from "./components/ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { Router } from "./router/Router";

const App = () => {
  console.log("Appをレンダリング");

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickbCountup = () => {
    setNum(num + 1);
  };

  const onClickbSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  const [open, setOpen] = useState(false);
  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => setOpen(false), []);

  const childAreaMessage = useMemo(() => console.log("aaaaaa"), []);

  useEffect(() => {
    console.log("useEffect実行");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <BrowserRouter>
      <React.Fragment>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Router />

        <InlineStyle />
        {/* <CssModules /> */}
        <StyledJsx />
        <StyledComponents />
        <Emotion />

        <h1 style={{ color: "green" }}>こんにちは</h1>
        <ColorfulMessage color="blue" message="お元気ですか">
          ??
        </ColorfulMessage>
        <ColorfulMessage color="pink" message="元気です">
          ！！
        </ColorfulMessage>
        <button onClick={onClickbCountup}>カウントアップ</button>
        <br />
        <button onClick={onClickbSwitchShowFlag}>on/off</button>
        <p>{num}</p>
        {faceShowFlag && <p> "(｀・ω・´)" }</p>}
        <button onClick={onClickOpen}>表示</button>
        <ChildArea
          open={open}
          onClickClose={onClickClose}
          childAreaMessage={childAreaMessage}
        />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
