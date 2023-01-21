import React, { Component } from 'react'
const info = {
    useremail:'info@example.com',
    userpass:'info2023'
}



class Login extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            pass:"",
            alertText:"",
            alertColor:""
        }
    }
    loginSubmit=e=>{
            e.preventDefault();
            if (!this.state.email || !this.state.pass) {
                this.setState({
                    alertColor:"alert-warning",
                    alertText:"please, fill this input"
                })
            }else{
             if (this.state.email === info.useremail && this.state.pass === info.userpass) {
                this.setState({
                    alertColor:"alert-success",
                    alertText:"login successfull"
                })
             }else{
                this.setState({
                    alertColor:"alert-danger",
                    alertText:"password or email is wrong!"
                })
             }
            }
    }
    
  render() {
    return (
      <div className='container mt-5'>
            <h1 className='my-5 text-center'>Login</h1>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h5 className={`alert ${this.state.alertColor}`}>{this.state.alertText}</h5>
                <div className="col-6">
                    <form onSubmit={this.loginSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input onChange={e=>{
                            this.setState({email:e.target.value})
                        }} type="email" className="form-control"  placeholder='enter email'/>
                    </div>
                    
                    <label  className="form-label">Password</label>

                    <div className="input-group mb-3">
                    <input onChange={e=>{
                            this.setState({pass:e.target.value})
                        }} type="password" className="form-control" placeholder='enter password' />
                    <button className="btn btn-outline-secondary" type="button"><i className="fa-solid fa-eye"></i></button>
                    </div>

                
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
      </div>
    )
  }
}

export default Login