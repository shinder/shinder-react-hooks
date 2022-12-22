import { useState } from "react";
import TryUseWillUnmount from "./TryUseWillUnmount";

export default function TryUseWillUnmountContainer() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show ? "點擊隱藏 (show)" : "點擊顯示"}
      </button>
      {show && <TryUseWillUnmount />}
    </>
  );
}
