import React from 'react';
import './App.css';
import Card from './Components/Card'
import Banner from './Components/Banner'
import Nav from './Components/Nav'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      character:{},
      isLoading:false,
      input:'',
      isDataSet:false
    }
    this.handleChange =this.handleChange.bind(this)
    this.handleClick =this.handleClick.bind(this)
    this.fetchDetails =this.fetchDetails.bind(this)
  }

  componentDidMount() {
    this.fetchDetails(1)
  }

  handleChange(e) {
      e.target.name = e.target.value
      this.setState({
        input:e.target.value
      })

  }
  fetchDetails(inp) {
    if (inp!== ''){

    const url = "https://rickandmortyapi.com/api/character/" + inp


    fetch(url).then(res => {
      if(res.status === 200) {
          return res.json()
      }
      else return null;
      }).then(data => {
      if(data!==null)  {
          this.setState({
              character:data,
              isDataSet: true
          });
      } else {
          this.setState({
              isDataSet: false
          });
      }
    });
  }}
  handleClick() {
    this.fetchDetails(this.state.input)
  }
  

  render() {
    let card = this.state.isDataSet ?
    <Card 
     img={this.state.character.image} 
     name={this.state.character.name} 
     gender={this.state.character.gender} 
     status= {this.state.character.status}
     species={this.state.character.species}
     origin={this.state.character.origin}
      />
    :'No results for you try to search with numbers...'
    let loading = 
      <div className="ui loading segment" style={{marginTop:'15rem'}}>
      </div>
    return (
      <div>
      <Nav item1='Home' item2='Characters' item3='About'/>
      <div className='ui vertical segment'>
          <img src ='https://static3.srcdn.com/wordpress/wp-content/uploads/2018/04/Rick-and-Morty-Season-4-Logo.jpg' alt='image' style={{width:'100%',height:'50%'}}></img>
      </div>
      <Banner/>
      <div className="ui raised segment">
        <div className="ui two column grid">
          <div className="column">
          <form className="ui form">
          <div className="field">
            <label>Search Characters</label>
            <input type="text" name="input" placeholder="Name" onChange={this.handleChange} required/>
          </div>
          <button className="ui button" type="button" onClick={this.handleClick}>Submit</button>
          </form>
          </div>
          <div className="column">
          {this.state.isLoading  ? loading:card }
          </div>
        </div>
      </div>
      </div>
    )
  }

}

export default App;
