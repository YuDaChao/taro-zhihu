import Taro, { Component } from "@tarojs/taro";
import { View, Image, Input } from "@tarojs/components";

import searchPng from "../../assets/images/search.png";
import lightingPng from "../../assets/images/lighting.png";

import "./search.styl";

export default class Search extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='search'>
        <View className='search-left'>
          <View className='search-wrapper'>
            <Image className='search-icon' src={searchPng} />
            <View className='search-input'>
              <Input type='text' placeholder='搜索话题, 问题或人' placeholderStyle='color:#fff' className='search-placeholder' />
            </View>
          </View>
        </View>
        <View className='search-right'>
          <Image src={lightingPng} />
        </View>
      </View>
    );
  }
}
