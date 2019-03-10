import React, { Component } from "react";
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  import { DatePicker } from "antd";
  
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
class Home extends Component {
  state = {};
  render() {
    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
         <div>
          <DatePicker onChange={this.onChange} />
          <br />
          <MonthPicker onChange={this.onChange} placeholder="Select month" />
          <br />
          <RangePicker onChange={this.onChange} />
          <br />
          <WeekPicker onChange={this.onChange} placeholder="Select week" />
        </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}


export default Home;

// ReactDOM.render(

//   mountNode
// );
// #components-layout-demo-top .logo {
//   width: 120px;
//   height: 31px;
//   background: rgba(255,255,255,.2);
//   margin: 16px 24px 16px 0;
//   float: left;
// }
