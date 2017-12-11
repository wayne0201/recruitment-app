import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { WhiteSpace, Button, List, InputItem, Radio, WingBlank } from "antd-mobile";

import Loge from "../../component/logo/logo";
import iForm from "../../component/i-form/i-form";
import { regisger } from "../../redux/user.redux";

@connect(
    state => state.user,
    {
        regisger
    }
)
@iForm
class Register extends Component{
    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister () {
        this.props.regisger(this.props.state)
    }
    componentWillMount() {
        this.props.handleChange("type", "genius");
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
                            onChange = {(v) => this.props.handleChange('user', v)}
                            >用户</InputItem>
                        <InputItem
                            type="password"
                            onChange = {(v) => this.props.handleChange('pwd', v)}
                            >密码</InputItem>
                        <InputItem
                            type="password"
                            onChange = {(v) => this.props.handleChange('repeatpwd', v)}
                            >确认密码</InputItem>
                        <RadioItem 
                            checked = {this.props.state.type === 'genius'}
                            onChange = {() => this.props.handleChange('type', 'genius')}
                            >牛人</RadioItem>
                        <RadioItem 
                            checked = {this.props.state.type === 'boss'}
                            onChange={() => this.props.handleChange('type', 'boss')}
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