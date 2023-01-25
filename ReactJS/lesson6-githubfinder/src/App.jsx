import React, { Component } from 'react'
import Nav from './components/Nav'
import Search from './components/Search'
import axios from 'axios';
import UserList from './components/UserList';

export class App extends Component {
  constructor(){
    super();
    this.state={
      users:[],
      searchAlert:""
    }
  }

searchValue=(keyword)=>{
        if (keyword) {
          axios
          .get(`https://api.github.com/search/users?q=${keyword}`)
          .then(res=>this.setState({users:res.data.items}))
          .catch(err=>console.log(err))
          
         if (this.state.users.length === 0) {
         this.setState({
            searchAlert:"no users"
          },2000)
         }else{
          this.setState({
            searchAlert:""
          })
         }
        }else{
            this.setState({
              searchAlert:"please, enter username"
            })
        }
}

  render() {
    return (
      <div>
        <Nav/>
        <Search searchData={this.searchValue} />
        {/* {this.state.users.length === 0 ? <h1 className='text-center'>no users</h1> : <UserList uservalue={this.state.users} /> } */}
        <UserList uservalue={this.state.users}  />
        <h1 className='text-center'>{this.state.searchAlert}</h1>
      </div>
    )
  }
}

export default App