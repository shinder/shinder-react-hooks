# Shinder react hooks

個人練習範例

## useIsMounted

在元件中判斷是否在掛載的狀態

## useWillUnmount

元件在 unmount 前，設定的 function 會被呼叫。

## useDebounce

沒有回傳值，利用 re-render 去觸發。
要搭配 useCallback() 使用。

## useDebounce2

會回傳 getter 和 setter，利用 setter 去觸發。
要搭配 useCallback() 使用。

## useFetchJson

將 fetch api 包裝成 hook 使用。

## useLocalStorageJson

將 Object 或 Array 類型資料以 JSON 的格式存放到 localStorage。
