"use strict";

var list = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
  style: {
    color: "red",
    fontSize: "20px"
  }
}, "test"), /*#__PURE__*/React.createElement("li", null, "test"), /*#__PURE__*/React.createElement("li", null, "test")));
var temp = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Hello React"));
var total = /*#__PURE__*/React.createElement(React.Fragment, null, temp, list);
ReactDOM.render(total, document.querySelector("#root"));
