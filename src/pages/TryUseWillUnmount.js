import { useState } from "react";
import TryUseWillUnmountChild from "../components/TryUseWillUnmountChild";

export default function TryUseWillUnmount() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show ? "點擊隱藏 (show)" : "點擊顯示"}
      </button>
      {show && <TryUseWillUnmountChild />}
    </>
  );
}
