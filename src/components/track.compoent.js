import { List, Avatar, Button, Skeleton } from 'antd';
import React, {Component} from "react";
import AuthService from "../services/auth.service";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default class Track extends Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {

        // AuthService.getOrderList().then(
        //     response => {
        //         this.setState({
        //             message: response.data.message,
        //             successful: true
        //         });
        //     },
        //     error => {
        //         console.log("error")
        //     }
        // );
        AuthService.getOrderList()
        // console.log(s)
        // console.log("error")
        // fetch(fakeDataUrl)
        //     .then(res => res.json())
        //     .then(res => {
        //         this.setState({
        //             initLoading: false,
        //             data: res.results,
        //             list: res.results,
        //         });
        //     });
    }

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat(
                [...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })),
            ),
        });
        fetch(fakeDataUrl)
            .then(res => res.json())
            .then(res => {
                const data = this.state.data.concat(res.results);
                this.setState(
                    {
                        data,
                        list: data,
                        loading: false,
                    },
                    () => {
                        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                        // In real scene, you can using public method of react-virtualized:
                        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                        // window.dispatchEvent(new Event('resize'));
                    },
                );
            });
    };

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        actions={[<a>Check</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                // avatar={<Avatar src={item.picture.large} />}
                                title={<a href="/details">Appointment No</a>}
                                description="Receiver Name: && Receiver Address: "
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }
}