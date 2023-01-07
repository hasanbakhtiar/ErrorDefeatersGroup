var list = (
<>
  <ul>
    <li style={{ color: "red", fontSize: "20px" }}>test</li>
    <li>test</li>
    <li>test</li>
  </ul>
</>
);

var temp = (
  <>
    <h1>Hello React</h1>
  </>
);

const total = (
  <>
    {temp}
    {list}
  </>
);

ReactDOM.render(total, document.querySelector("#root"));
