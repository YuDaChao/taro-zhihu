import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Search from '../../componetns/search/search'

import './index.styl'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Search />
        <Text>首页</Text>
      </View>
    )
  }
}

