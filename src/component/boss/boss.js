import React, { Component } from "react";
import { connect } from "react-redux";
import { WhiteSpace, WingBlank, Card } from "antd-mobile";
import { getUserList } from "../../redux/chatuser.redux";
import { randomKey } from "../../util";


@connect(
    state => state.chatuser,
    {
        getUserList
    }
)
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.props.getUserList("genius")
    }
    render() {
        return (
            <WingBlank>
                {this.props.userlist.map(v => (
                    v.avatar ? <div key={randomKey()}>
                        <WhiteSpace />
                        <Card>
                            <Card.Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            ></Card.Header>
                            <Card.Body>
                                {v.desc.split('\n').map(v => (
                                    <div key={randomKey()}>{v}</div>
                                ))}
                            </Card.Body>
                        </Card>
                    </div> : null
                ))}
            </WingBlank>
        )
    }
}

export default Boss 