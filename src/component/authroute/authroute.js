import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

@withRouter
class AuthRoute extends Component {
    componentDidMount() {
        const pulicList = ['/login', '/register'];
        const pathname = this.props.location.pathname;
        if(~pulicList.indexOf(pathname)){
            return null;
        }
        axios.get('/user/info')
            .then(res => {
                if(res.status === 200){
                    if(res.data.code === 0){
                        //有登陆信息的
                    } else {
                        this.props.history.push('/login')
                    }
                    console.log(res.data);
                }
            })
    }
    render() {
        return (
            <div>
                111
            </div>
        )
    }
}

export default AuthRoute 