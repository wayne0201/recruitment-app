import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { WhiteSpace, Button, List, InputItem, Radio, WingBlank } from "antd-mobile";

import Loge from "../../component/logo/logo";

import { regisger } from "../../redux/user.redux";

@connect(
    state => state.user,
    {
        regisger
    }
)
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: "genius"
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    handleRegister () {
        this.props.regisger(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Loge></Loge>
                <WingBlank>
                    <List>
                        {this.props.msg ? (<p className="error-msg">{this.props.msg}</p>) : null}
                        <InputItem
                            onChange = {(v) => this.handleChange('user', v)}
                            >用户</InputItem>
                        <InputItem
                            type="password"
                            onChange = {(v) => this.handleChange('pwd', v)}
                            >密码</InputItem>
                        <InputItem
                            type="password"
                            onChange = {(v) => this.handleChange('repeatpwd', v)}
                            >确认密码</InputItem>
                        <RadioItem 
                            checked = {this.state.type === 'genius'}
                            onChange = {() => this.handleChange('type', 'genius')}
                            >牛人</RadioItem>
                        <RadioItem 
                            checked = {this.state.type === 'boss'}
                            onChange={() => this.handleChange('type', 'boss')}
                            >BOSS</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button 
                        type="primary"
                        onClick={this.handleRegister}
                        >注册</Button>
                    <WhiteSpace />
                </WingBlank>
            </div>
            
        )
    }
}

 export default Register 