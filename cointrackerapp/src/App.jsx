import { useState, useEffect } from "react"

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ coins, setCoins ] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(response => response.json())
    // .then(json => console.log(json)); // 얘를 불러올 수 있는게 확인되면 두 번째 state를 선언
    .then(json => {
      setCoins(json)
      setLoading(false)
    });
  }, []);
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
      <ul>
        {coins.map((coin) => 
        <li key={coin.id}>{coin.name} ({coin.symbol}): 💲 {coin.quotes.USD.price}</li>
        )}  
      </ul>}
    </div>
  )
}
// https://api.coinpaprika.com/v1/tickers -> 여기에 있는 8000개 정도의 코인 정보를 넘기고 싶음 -> useEffect 사용 -> 개발자도구 -> 네트워크
export default App

/**
 * USD를 BTC로 단위를 바꾼다면?
 * 예를 들어 input 창에 20달러를 입력하면 그게 몇 BTC인지 단위 변환을 하는거
 * 혹은 몇 이더리움인지
 */
