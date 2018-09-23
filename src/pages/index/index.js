import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Search from '../../componetns/search/search'
import Feed from '../../componetns/feed/feed'

import './index.styl'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      loading: true,
      list: []
    }
  }

  componentWillMount () { }

  componentDidMount () {
    // 获取远程数据
    Taro.showLoading({ title: '加载中' })
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      if (res.data.success) {
        Taro.hideLoading()
        this.setState({
          loading: false,
          list: res.data.data
        })
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { loading, list } = this.state
    console.log(loading, list)
    return (
      <View className='index'>
        <Search />
        <View>
          {list.map(item => (
            <Feed feed={item} key={item.question_id} />
          ))}
        </View>
      </View>
    )
  }
}

