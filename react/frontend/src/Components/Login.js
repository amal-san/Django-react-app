import React from "react"
import "../App.css"

function Login() {
  return (
    <div id="login">
      <form method="get" action="#">
          <input type="text" name="username"/>
          <br></br>
          <input type="text" name="password"/> 
          <br></br>       
          <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default Login