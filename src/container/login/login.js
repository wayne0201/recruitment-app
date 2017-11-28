import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import { WhiteSpace, Button, WingBlank, List, InputItem } from "antd-mobile";
import { connect } from "react-redux";

import Loge from "../../component/logo/logo";
import { login } from "../../redux/user.redux";

@connect(
    state => state.user,
    {
        login
    }
)
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    register() {
        this.props.history.push('/register')
    }
    handleLogin() {
        this.props.login(this.state);
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render(){
        return(
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Loge></Loge>
                <h2>登录页面</h2>
                <WingBlank>
                    <List>
                        {this.props.msg ? (<p className="error-msg">{this.props.msg}</p>) : null}
                        <InputItem
                            onChange={(v) => this.handleChange('user', v)}
                            >用户</InputItem>
                        <InputItem
                            type="password"
                            onChange={(v) => this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button 
                        onClick={this.handleLogin}
                        type="primary"
                        >登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login 