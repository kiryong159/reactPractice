// import Button from "./button";
import { useState, useEffect } from "react";
//import styles from "./App.module.css";

function App() {
  const [loading, setloading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [coinPrice, setcoinPrice] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setloading(false);
      });
  }, []);

  const moneyChange = (event) => {
    setMoney(event.target.value);
  };
  const selectcoin = (event) => {
    setcoinPrice(event.target.value.split(":")[1].split("원")[0]);
  };
  return (
    <div>
      <h1> The coins ({coins.length})</h1>
      <h3>{loading ? "LOADDING" : null}</h3>
      <h3>가지고있는돈(원)</h3>
      <input value={money} type="number" onChange={moneyChange} />

      <div>
        <h3>가지고싶은 코인</h3>
        <select onChange={selectcoin}>
          <option>코인을고르세오</option>
          {coins.map((item, index) => (
            <option key={index}>
              {item.name}({item.symbol}) :{" "}
              {Math.round(item.quotes.USD.price * 13060) / 10} 원
            </option>
          ))}
        </select>
      </div>
      <h3>{Math.round((money / coinPrice) * 100) / 100}개 구매가능</h3>
    </div>
  );
}

export default App;
