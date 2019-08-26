import React from 'react'


class Nav extends React.Component {

    render() {
        let styles = {
            backgroundColor:"#fdbe2c",
            height:'4rem',
            marginRight:'0',
            marginLeft:'0',
            marginTop:'1.1rem',
            marginBottom:'.2rem'

        }
        let item ={
            color:'white',
            padding:'1rem',
            margin:'1rem'
        }
        return (
            <div className="ui secondary  menu" style={styles}>

                <a className="item" style={item}>
                    {this.props.item1}
                </a>
                <a className="item" style={item}>
                    {this.props.item2}
                </a>
                <a className="item" style={item}>
                    {this.props.item3}
                </a>
              </div>
        )
    }
}

export default Nav