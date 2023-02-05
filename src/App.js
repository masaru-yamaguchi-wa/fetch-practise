import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"

function App() {
  const printjsondata = () => {
    console.log(jsondata)
  }
  const [jsondata, setJsondata] = useState()

  const posttest = () => {
    const postdata = { data: "これだけに上書きできないか" }
    const option = { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(postdata) }
    fetch("data.json", option)
      .then(res => res.text())
      .then(text => console.log(text))
  }
  useEffect(() => {
    //importせずfetchでgetできないかテスト
    fetch("data.json")
      .then(responce => responce.json())
      .then(mydata => setJsondata(mydata))
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={printjsondata}>get json</button>
        <button onClick={posttest}>post test</button>
      </header>
    </div>
  );
}

export default App;
