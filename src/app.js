import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.styl'

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/discovery/discovery',
      'pages/more/more'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: 'taro知乎',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true, // 开启下拉刷新
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#2A8CE5',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/index.png',
        selectedIconPath: './assets/images/index_focus.png'
      }, {
        pagePath: 'pages/discovery/discovery',
        text: '发现',
        iconPath: './assets/images/discovery.png',
        selectedIconPath: './assets/images/discovery_focus.png'
      }, {
        pagePath: 'pages/more/more',
        text: '我的',
        iconPath: './assets/images/burger.png',
        selectedIconPath: './assets/images/burger_focus.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
