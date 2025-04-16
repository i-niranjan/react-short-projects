import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setData(res[currency]);
      });
    // console.log(JSON.stringify(data, null, 2));
  }, [currency]);
  // console.log(JSON.stringify(data, null, 2));
  return data;
}

export default useCurrencyInfo;
