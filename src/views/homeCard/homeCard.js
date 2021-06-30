import React, { Component } from 'react';
import { Card, Avatar, Icon, Button, Divider } from 'antd';
import EventDetailsDrawer from '../ui/EventDetailsDrawer';

const { Meta } = Card;

class EventCard extends Component {

    render() {
        return (
            <div onClick={alert("Hello from here")}>
                <Card
                    hoverable
                    cover={<img alt="example" src="https://assetsnffrgf-a.akamaihd.net/assets/m/1102015169/univ/art/1102015169_univ_lsr_lg.jpg" />}
                    bodyStyle={{ marginBottom: "-5px" }}
                >
                    <Meta
                        //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        avatar={<Button type="primary" shape="circle-outline">{this.props.owner}</Button>}
                        title={this.props.title}
                        description={this.props.descp}
                    />
                    <Divider style={{ marginLeft: "0px" }}></Divider>
                    <p><Icon type="clock-circle" style={{ fontSize: "15px", color: "#1890FE" }} theme="outlined" /><span style={{ marginLeft: "15px" }} />{this.props.date}</p>
                    <p><Icon type="environment" style={{ fontSize: "15px", color: "#1890FE" }} theme="outlined" /><span style={{ marginLeft: "15px" }} />{this.props.location}</p>
                </Card>
                <EventDetailsDrawer></EventDetailsDrawer>
            </div>
        );
    }
}

export default EventCard