import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import NavLinkBar from "../navlink/navlink";
import { Route, Switch } from "react-router-dom";
import Boss from "../boss/boss";


function Genius(params) {
    return <h1>1</h1>
}

function Msg(params) {
    return <h1>2</h1>
}

function User(params) {
    return <h1>3</h1>
}

@connect(
    state => state
)
class Dashboard extends Component {
    render() {
        const { pathname } = this.props.location;
        const user = this.props.user;
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            }, {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === 'boss'
            }, {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            }, {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            },
        ]
        return (
            <div>
                <NavBar
                    mode="dard"
                    className="fixed-header"
                >{navList.find(v => v.path === pathname).title}</NavBar>
                <div style={{marginTop: 45}}>
                    <Switch>
                        {
                            navList.map(v => (
                                <Route key={v.path} path={v.path} component={v.component}></Route>
                            ))
                        }
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard;