import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
export class MainLayout extends Component {
  render() {
    return (
         <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            icon={<i className="iconfont iconhome"></i>}
            selectedIcon={<i className="iconfont iconhome" style={{color:'#33A3F4'}}></i>}
            title="首页"
            key="home"
            selected={this.props.location.pathname === '/' ? true:false}
            onPress={() => {
              this.props.history.push('/')
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont iconcart"></i>}
            selectedIcon={<i className="iconfont iconcart" style={{color:'#33A3F4'}}></i>}
            title="购物车"
            key="cart"
            selected={this.props.location.pathname === '/cart' ? true:false}
            onPress={() => {
              this.props.history.push('/cart')
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont iconwode2"></i>}
            selectedIcon={<i className="iconfont iconwode2" style={{color:'#33A3F4'}}></i>}
            title="我的"
            key="mine"
            selected={this.props.location.pathname === '/mine' ? true:false}
            onPress={() => {
              this.props.history.push('/mine')
            }}
          >
            {this.props.children}
          </TabBar.Item>
        </TabBar>
    )
  }
}

export default MainLayout
