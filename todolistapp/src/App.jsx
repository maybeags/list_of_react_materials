import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo ] = useState('');
  // onSubmit에 if문 추가 후에 다수의 toDo를 받기 위한 배열 설정을 상태로
  const [ toDos, setToDos ] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // toDo가 비어있을 수 있으니까 로직 작성
    if(toDo === "") {
      return;
    }  
    // 배열 상태 선언 이후에 setToDos를 통한 직전 값을 받아오는 과정
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 다 하고 나서 input 창을 비워줘야 함.
    setToDo('');
  }
  // console.log(toDos);

// form 태그에는 submit 이벤트를 자체적으로 가지고 있음.
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="일정을 입력하세요" />
          <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App
