import React from "react"
import ReactDOM from "react-dom"
import "../App.css"
import NotifyCorrect from "./NotifyCorrect"
import NotifyIncorrect from "./NotifyIncorrect"

class Challenge extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      name: '',
      description: '',
      file: '',
      file_name: '',
      flag:'',
      id:'',
      hint:'',
      url:'',
      isDataSet: false
    }
  }

  componentDidMount() {
    this.fetchChallengeDetails()
    }
  

  componentDidUpdate(prevProps,prevState,snapshot) {
          if(prevProps.name !== this.props.name ) {
            this.fetchChallengeDetails()
          }
  }

  fetchChallengeDetails()

  {
    //url
    const url = "http://127.0.0.1:8000/challenges/1/"

    //Request
    fetch(url).then(res => {
      if(res.status === 200) {
        return res.json()
      }
      else return null;

    }).then(data =>{
      console.log(data)
      if (data!=null) {
        this.setState({
              name:data.name,
              description:data.description,
              file:data.file,
              file_name:data.file_name,
              flag:data.flag,
              id:data.id,
              hint:data.hint,
              url:data.url,
              isDataSet:true
        });
      }else {
        this.setState({
          isDataSet:false
        });
      }
    });

  }
  render()
  {
    return (
      this.state.isDataSet ? ( 
        <div class="cd">
              <div class="card-body">
              <h5 class="card-title">{this.state.name}</h5>
              <p class="card-text">{this.state.description}</p>
              <div class="text-center">
              <a href={this.state.file} class="btn btn-info" style={{display: !this.state.file_name && "none"}}>{this.state.file_name}</a>
              <br></br>
              <input type="text" name="flag" id="check"/>
              <a class="btn btn-success" onClick={()=>{ 
                if(this.state.flag === document.getElementById("check").value) {
                ReactDOM.render(<NotifyCorrect/>, document.getElementById("notify")); } 
                if (this.state.flag !== document.getElementById("check").value && document.getElementById("check").value !== null ) {
                  ReactDOM.render(<NotifyIncorrect />, document.getElementById("notify"));
                }
                 }}>Submit</a>
              <div id="notify"></div>
              <a href={this.state.url}>Hello</a>
              </div>
              </div>
        </div>):"No results found"
    )

  }


}
export default Challenge
