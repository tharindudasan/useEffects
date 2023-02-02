import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {
    console.log(name);
    console.log(price);
  }, [price]);

  return (
    <div className="app">
      <div>
        <div>
          <label for="name">Name :</label>
          <br />
          <input
            type="text"
            placeholder="type"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </div>
        <br />
        <div>
          <label for="price">Price : </label>
          <br />
          <input
            type="text"
            onChange={(priceEvent) => {
              setPrice(priceEvent.target.value);
            }}
          ></input>
        </div>
      </div>
      {/* <div>{count}</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div> */}
    </div>
  );
}
export default App;
