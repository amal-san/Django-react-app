import React from "react"
import "../App.css"

function Login(props) {
  return (
    <div class="card"style={{width:"18rem"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.para}</p>
        <a href="#" class="btn btn-primary">{props.button}</a>
        </div>
    </div>
  )
}

export default Login