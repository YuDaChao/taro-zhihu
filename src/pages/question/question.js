import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './question.styl'

export default class Question extends Component {
  config = {
    navigationBarTitleText: '问题'
  }

  componentDidMount() {}

  render () {
    return (
      <View>
        <Text>Question</Text>
      </View>
    )
  }

}
