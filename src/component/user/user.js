import React from "react";
import { connect } from "react-redux";
import { Result, List, WhiteSpace, Modal} from "antd-mobile";
import { randomKey } from "../../util";
import browserCookies from "browser-cookies";
import { Redirect } from "react-router-dom";

import { logoutSubmit } from "../../redux/user.redux";


const Item = List.Item;
const Brief = Item.Brief;

@connect(
    state => state.user,
    {
        logoutSubmit
    }
)
class User extends React.Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        const alter = Modal.alert;
        alter('注销', '确认退出登录吗？', [
            {text: '取消', onPress: () => {}},
            {text: '确定', onPress: () => {
                browserCookies.erase('u_id');
                this.props.logoutSubmit()
            }}
        ])
    }
    render() {
        return this.props.user ? (
            <div>
                
                <Result 
                    img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width: "100%"}} alt=""/>}
                    title={this.props.user}
                    message={this.props.type==="boss" ? this.props.company : null}
                />
                <List renderHeader={() => "简介"}>
                    <Item
                        multipleLine
                    >
                        {this.props.title}
                        {this.props.desc.split('\n').map(v => <Brief key={randomKey()}>{v}</Brief>)}
                        {this.props.money ? <Brief key={randomKey()}>薪资：{this.props.money}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item onClick={this.logout}>
                        退出登录
                    </Item>
                </List>
            </div>
        ) : <Redirect to={this.props.redirectTo} />;
    }
}

export default User;