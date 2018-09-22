import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import './more.styl'

export default class More extends Component {
  config = {
    navigationBarTitleText: "我的"
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  render() {
    return(
      <View>
        <Text>我的</Text>
      </View>
    );
  }
}
