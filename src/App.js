import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {
    console.log(name);
    console.log(price);
  }, [price]);

  const inputJax = (
    <div>
      <div>
        <label for="name">Name : </label>
        <input
          type="text"
          placeholder="type"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </div>
      <div>
        <label for="price">Price : </label>
        <input
          type="text"
          onChange={(priceEvent) => {
            setPrice(priceEvent.target.value);
          }}
        ></input>
      </div>
    </div>
  );

  return (
    <div className="app">
      {inputJax}
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
