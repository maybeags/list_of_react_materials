import { useState, useEffect } from "react"

function App() {
  const [ loading, setLoading ] = useState(true);
//나는 내 컴포넌트를 실행할 때 어떠한 코드를 딱 한 번만 실행시키고 싶어 -> useEffect()
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    .then(response => response.json())
    .then(json => console.log(json));
  }, []);
  return (
    <div>
      {loading ? <h1>LOADING...</h1> : null}
    </div>
  )
}

export default App
