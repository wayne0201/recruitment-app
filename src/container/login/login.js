import React,{ Component } from "react";
import Loge from "../../component/logo/logo";
import { WhiteSpace, Button, WingBlank, List, InputItem} from "antd-mobile";

class Login extends Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
    }
    register() {
        this.props.history.push('/register')
    }
    render(){
        return(
            <div>
                <Loge></Loge>
                <h2>登录页面</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary">登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login 