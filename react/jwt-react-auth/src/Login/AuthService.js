import decode from 'jwt-decode';
export default class AuthService {


    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api/token/'
        this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)

    }

    login(username,password) {

        return this.fetch(`${this.domain}`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            this.setToken(res.token)
            return Promise.resolve(res);
        })
    }

    loggedIn() {
        const token = this.getToken()
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
        localStorage.setItem('id_token',idToken)
    }
    getToken() {
        localStorage.getItem('id-token')
    }
    logout() {
        localStorage.removeItem('id-token');
    }
    getProfile() {
        return decode(this.getToken());
    }
    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}