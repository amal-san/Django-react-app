import React from 'react';
import './App.css';
import Card from './Components/Card'
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
      e.target.value = e.target.value
      this.setState({
        input:e.target.value
      })

  }
  fetchDetails(inp) {

    const url = "https://rickandmortyapi.com/api/character/" + inp


    fetch(url).then(res => {
      if(res.status == 200) {
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
  }
  handleClick() {
    this.fetchDetails(this.state.input)
  }
  

  render() {
    let card = this.state.isDataSet ?
    <div style ={{flexDirection: 'row',marginLeft:'9rem'}}>
    <Card 
     img={this.state.character.image} 
     name={this.state.character.name} 
     gender={this.state.character.gender} 
     status= {this.state.character.status}
     species={this.state.character.species}
     origin={this.state.character.origin}
      />
    </div>:'No results for you try to search with numbers...'
    let loading = 
      <div className="ui active centered inline loader" style={{marginTop:'15rem'}}>
      </div>
    return (
      <div>
      <Nav item1='Home' item2='About'/>
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
          <form className="ui form" style={{padding:'5rem'}}>
          <div className="field">
            <label>Search Characters</label>
            <input type="text" name="input" placeholder="Name" onChange={this.handleChange}/>
          </div>
          <button className="ui button" type="button" onClick={this.handleClick}>Submit</button>
          </form>
          </div>
          <div className="column">
          {this.state.isLoading  ? loading:card }
          </div>
        </div>
        <div class="ui vertical divider">
        </div>
      </div>
      </div>
    )
  }

}

export default App;
