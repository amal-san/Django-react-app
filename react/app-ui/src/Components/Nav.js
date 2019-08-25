import React from 'react'


class Nav extends React.Component {

   

    render() {
        let styles = {
            backgroundColor:"#fdbe2c",
            height:'4rem'

        }
        return (
            <div className="ui secondary  menu" style={styles}>
                <a className="item">
                    {this.props.item1}
                </a>
                <a className="item">
                    {this.props.item2}
                </a>
                <a className="item">
                    Friends
                </a>
              </div>
        )
    }
}

export default Nav