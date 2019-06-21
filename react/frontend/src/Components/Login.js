import React from 'react';
import './Login.css'
import Auth from './Auth'
import { createHashHistory } from 'history'


class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            user:'',
            pass:'',
            isTrue:'',
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
                <p>{this.state.isTrue}</p>
            </div>
            
        )
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
            
        });
    }    
    handleClick = () => {
       const history = createHashHistory()
       const access = this.Auth.login(this.state.user,this.state.pass)
       console.log(access) 
 

       

    }

   
}

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            user:null
        }
        this.Auth = new Auth();
        this.click = this.click.bind(this)
    }

    render(){
        return (
            <div>
                <p>You are logged as{this.state.user}</p>
                <button onClick={this.click.bind(this)}> Logout</button>
            </div>
        )
    }
    click = () => {
           const history = createHashHistory()
           this.Auth.logout();
           history.push('/')

        }
    componentWillMount() {
        const history = createHashHistory()
        if(this.Auth.loggedIn()){
        history.replace('/home');
            const profile =this.Auth.getProfile()
            this.setState({
                user: profile.user_id})}
        else{ 

            history.push('/');
            
        }
    }
    }
    
         
class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>You are in the homepage</h1>
            </div>
        )
    }
}




export default Login
export {Home}
export {Index}
