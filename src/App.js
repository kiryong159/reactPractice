// import Button from "./button";
import { useState, useEffect } from "react";
//import styles from "./App.module.css";

function App() {
  const [loding, setloding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectCoin, setSelectCoin] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setloding(false);
      });
  }, []);

  const coinPrice = (event) => {
    setSelectCoin(event.target.value);
  };
  const moneyset = (e) => {
    setMoney(e.target.value);
  };
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loding ? (
        <h1>로딩중</h1>
      ) : (
        <>
          <input value={money} onChange={moneyset} type="number" />
          <select onChange={coinPrice}>
            {coins.map((item) => (
              <option
                key={item.id}
                value={Math.round(item.quotes.USD.price * 13060) / 10}
              >
                {item.name} : {Math.round(item.quotes.USD.price * 13060) / 10}
              </option>
            ))}
          </select>
          {Math.round((money / selectCoin) * 10) / 10}
        </>
      )}
    </div>
  );
}

export default App;
