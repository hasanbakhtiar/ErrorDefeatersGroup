import React from "react";
import  ReactDOM  from "react-dom";
import './sass/style.scss'
import img from './img/unsplash.jpg'

class App extends React.Component{
    render(){
        return(
            <>
            <h1>Hello React</h1>
            <img width={200} src={img} alt="" />
            </>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));