import { useEffect, useState } from "react";

import useIsMounted, { useIsMounted2 } from "../hooks/useIsMounted";

export default function TryUseIsMountedChild() {
  const [count, setCount] = useState(99);
  const isMounted = useIsMounted();
  const isMounted2 = useIsMounted2();
  console.log(`--- isMounted --- ${isMounted.current}`);
  console.log(`--- isMounted2 --- ${isMounted2.current}`);
  console.log({ count, setCount });
  useEffect(() => {
    setTimeout(() => {
      console.log(`=== isMounted === ${isMounted.current}`);
      console.log(`=== isMounted2 === ${isMounted2.current}`);
      console.log({ count, setCount });
      setCount((v) => {
        // Warning: Can't perform a React state update on an unmounted component.
        // 上面的警告訊息沒有出現
        console.log("setCount triggered");
        return v + 1000;
      });
    }, 3000);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        <button
          className="btn btn-success"
          onClick={() => {
            setCount((ov) => ov + 1);
          }}
        >
          add one
        </button>
      </div>
    </div>
  );
}

