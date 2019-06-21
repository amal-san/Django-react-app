import React from 'react'
import Auth from './Auth'


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            link:'',
            isDataSet: false

        }
        this.Auth = new Auth();
    }
    componentDidMount() {
        this.fetchAdminDetails()
    }
    componentDidUpdate() {
        if(prevProps.link !== this.props.link){
            this.fetchAdminDetails()
        }
    }
    fetchAdminDetails()
    {
        

    }

}