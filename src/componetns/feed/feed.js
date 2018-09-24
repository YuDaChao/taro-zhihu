import Taro, {Component} from "@tarojs/taro";
import PropTypes from 'prop-types'
import {View, Image, Text} from "@tarojs/components";

import more from '../../assets/images/more.png'

import './feed.styl'

export default class Feed extends Component {

  navigateTo(url) {
    Taro.navigateTo({ url: url })
  }

  render() {
    const {feed} = this.props
    return (
      <View className='feed-item'>
        <View className='feed-source'>
          <View className='avatar flex1'>
            <Image src={feed.feed_source_img} />
          </View>
          <View className='flex8'>
            <Text className='feed-source-text'>{feed.feed_source_name}{feed.feed_source_txt}</Text>
          </View>
          <View className='flex1'>
            <Image className='item-more' mode='aspectFit' src={more} />
          </View>
        </View>
        <View className='feed-content'>
          <View className='question'>
            <View className='question-link' onClick={this.navigateTo.bind(this, '/pages/question/question')}>
              <Text>{feed.question}</Text>
            </View>
          </View>
          <View className='answer-body'>
            <View onClick={this.navigateTo.bind(this, '/pages/answer/answer')}>
              <Text className='answer-txt'>{feed.answer_ctnt}</Text>
            </View>
            <View className='answer-actions'>
              <View>
                <View className='link'>{feed.good_num} 赞同</View>
                <View className='dot m_r_10'></View>
              </View>
              <View>
                <View className='comments'>{feed.comment_num} 评论</View>
                <View className='dot m_r_10'></View>
              </View>
              <View className='follow-it'>
                <View>关注问题</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

Feed.propTypes = {
  feed: PropTypes.object
}
