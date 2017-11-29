import React, { Component } from "react";
import { Grid, List } from "antd-mobile";
import PropTypes from "prop-types";


class AvatarSelector extends Component {
    static propTypes = { 
        selectAvatar: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            icon: '',
            text: ''
        }
    }
    render() {
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippo,koala,lemur,pig,tiger,whale,zebra'
                            .split(',')
                            .map(v => ({
                                icon: require(`../img/${v}.png`),
                                text: v
                            }));
        const gridHeader = this.state.text ? (
                                <div>
                                    <span style={{marginRight: "10px"}}>已选择头像</span>
                                    <img src={this.state.icon} alt={this.state.text}/>
                                </div>
                            ) : (
                                <div>
                                    请选择头像
                                </div>
                            )                 
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    ></Grid>
                </List>
            </div>
        )
    }
}

export default AvatarSelector