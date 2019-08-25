import React from 'react'



class Card extends React.Component {

    render() {
        const styles = {
           flex:'auto',
           shadowColor: '#000000',
            shadowOffset: {
            width: 0,
            height: 3},
            shadowRadius: 5,
            shadowOpacity: 1.0,
            imgstyle: {
                width:'20.7rem'
            }
        }
        return (
            <div className="ui card" style={styles}>
                <div className="image"><img src={this.props.img} style={styles.imgstyle}/></div>
                <div className="content">
                    <div className="header"> Name : {this.props.name}</div><br></br>
                    <div className="summary">Status : {this.props.status}</div>
                    <div className="summary">Gender : {this.props.gender}</div>
                    <div className="summary">Species: {this.props.species}</div>
                 </div>
            </div>
        )
    }
}




export default Card