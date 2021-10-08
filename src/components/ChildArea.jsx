import { memo } from "react"

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
}

export const ChildArea = memo((props) => {
  console.log("ChildAreaをレンダリング");

  const {open, onClickClose, childAreaMessage} = props;
  const datas = [...Array(1000).keys()];
  datas.forEach((data) => {
    console.log("dataを出力");
  })
  return (
    <>
    {open ? (
      <div style={style}>
        <p>{childAreaMessage}</p>
        <button onClick={onClickClose}>閉じる</button>
      </div>
    ) : null
    }
    </>
  );
});