import React from 'react';
import './Login.css'
import Auth from './Auth'
class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            user:'',
            pass:'',
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.Auth = new Auth();
    
    }

    render() {
        return (
            
            <div id="card">
                <h1>Login</h1>
                <input 
                    name="user"
                    type="text"
                    placeholder="Username"
                    onChange={ this.handleChange.bind(this) }
                />
                <input 
                    name="pass"
                    type="password"
                    placeholder="Password"
                    onChange={ this.handleChange.bind(this) }
                />
                <input 
                    type="submit"
                    value="SUBMIT"
                    onClick={this.handleClick.bind(this)}
                />
            </div>
            
        )
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
            
        });
    }    
    handleClick = () => {
       this.Auth.login(this.state.user,this.state.pass,this.props.history);
       console.log(this.props.history)
   
    
}
}
class Home extends React.Component {
    render(){
        return (
            <div>
                <p>You are logged In</p>
                <button onClick={this.click.bind(this)}> Logout</button>
            </div>
        )
    }
    click = () => {
        if(this.Auth.loggedIn())
        this.props.history.replace('/');
        else {
            this.props.history.push('/login')
        }
    }
         
}




export default Login
export {Home}
