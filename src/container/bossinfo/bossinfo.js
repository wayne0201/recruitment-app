import React, { Component } from "react";
import { NavBar, InputItem, TextareaItem, Button, WhiteSpace, WingBlank } from "antd-mobile";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import AvatarSelector from "../../component/avatar-selector/avatar-selector";

import { updata } from "../../redux/user.redux";

@connect(
    state => state.user,
    {
        updata,
    }
)
class BossInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: '',
            avatar: ''
        }
    }
    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        const path = this.props.location.pathname;
        const redirectTo = this.props.redirectTo;
        return (
            <div>
                {redirectTo && redirectTo !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <NavBar
                    mode="dark"
                    >BOSS完善信息页面</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname) => {
                        this.setState({
                            avatar: imgname
                        })
                    }}
                ></AvatarSelector>
                <WhiteSpace />
                <InputItem
                    onChange={(v) => this.onChange('title', v)}
                >招聘职位</InputItem>
                <InputItem
                    onChange={(v) => this.onChange('company', v)}
                >公司名称</InputItem>
                <InputItem
                    onChange={(v) => this.onChange('money', v)}
                >职位薪资</InputItem>
                <TextareaItem
                    rows={3}
                    autoHeight
                    title="职位要求"
                    onChange={(v) => this.onChange('desc', v)}
                ></TextareaItem>
                <WhiteSpace />
                <WingBlank>
                    <Button 
                        type="primary" 
                        onClick={() => this.props.updata(this.state)}
                    >保存</Button>
                </WingBlank>
                <WhiteSpace />
            </div>
        )
    }
}

export default BossInfo