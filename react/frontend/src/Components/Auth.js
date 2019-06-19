import decode from 'jwt-decode';

export default class Auth {
    
    constructor() {
        this.login = this.login.bind(this)
        this.loggedIn = this.loggedIn.bind(this)
    
       
    
    }
    login(username,password,p){
        {
           
            fetch('http://localhost:8000/api/token/', {
                method: 'post',
                headers: new Headers({'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }),
                body: "username="+username+"&password="+password
            }).then(response => 
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })
            ).then(res => {
                console.log(res.data.access,res.status)
                this.setToken(res.data.access)
                this.checkStatus(res.status,p)
                
            }));
        }
    }
    checkStatus(e,p) {
        if(e >= 200 && e < 300){
            console.log(p)
           p.push('/home')

        }
        else{
            alert("Invaild Username or Password!!")
        }
    }
    loggedIn() {
        const token = this.getToken()
        console.log("hello")
        return !!token && !this.isTokenExpired(token)

    }
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now()/1000){
                
            }
            else 
                return false;
                
        }
        catch (err){
            return false;
        }
    }
    setToken(idToken) {
        localStorage.setItem('token',idToken)
    }
    getToken() {
        localStorage.getItem('token')
    }
    logout() {
        localStorage.removeItem('token');
    }
    getProfile() {
        return decode(this.getToken());
    }
    
    
}