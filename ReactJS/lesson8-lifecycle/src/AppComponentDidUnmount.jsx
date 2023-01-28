import  { Component } from 'react'

class List extends Component{
    componentWillUnmount() {
        alert('The component is going to be unmounted');
      }
    render(){
        return(
            <ul>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
            </ul>
        )
    }
}




class AppComponentDidUnmount extends Component {
    state= {display:true}
    delete = ()=>{
        this.setState({display:false})
    }
    
  render() {
    let comp;
    if (this.state.display) {
      comp = <List />;
    }
    return (
      <div>
        {comp}
        <button onClick={this.delete}>
          Delete the component
        </button>
      </div>
    )
  }
}

export default AppComponentDidUnmount