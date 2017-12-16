import React from "react";
import PropTypes from "prop-types";
import { randomKey } from "../../util";
import { WhiteSpace, WingBlank, Card } from "antd-mobile";
import { withRouter } from "react-router";

@withRouter
class UserCard extends React.Component{
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    handleClick(v){
        this.props.history.push(`/chat/${v._id}`)
    }
    render() {
        return(
            <WingBlank>
                {this.props.userlist.map(v => (
                    v.avatar ? <div key={randomKey()}>
                        <WhiteSpace />
                        <Card 
                            onClick={() => this.handleClick(v)}
                        >
                            <Card.Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            ></Card.Header>
                            <Card.Body>
                                {v.type === 'boss' ? <div>公司名:{v.company}</div> : null}
                                {v.desc.split('\n').map(d => (
                                    <div key={randomKey()}>{d}</div>
                                ))}
                                {v.type === 'boss' ? <div>薪资:{v.money}</div> : null}
                            </Card.Body>
                        </Card>
                    </div> : null
                ))}
            </WingBlank>
        )
    }
}


export default UserCard;