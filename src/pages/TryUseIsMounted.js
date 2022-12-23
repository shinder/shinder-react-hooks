import { useState } from "react";
import TryUseIsMountedChild from "../components/TryUseIsMountedChild";
export default function TryUseIsMounted() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => {
              setShow(v=>!v);
              setTimeout(() => {
                setShow(v=>!v);
              }, 2000);
            }}
          >
            TryUseIsMounted: mount 子元件然後 unmount
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">{show && <TryUseIsMountedChild />}</div>
      </div>
    </div>
  );
}
