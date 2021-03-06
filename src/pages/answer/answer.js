import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import avatar from '../../assets/images/icon1.jpeg'
import house from '../../assets/images/house.jpg'
import goodBad from '../../assets/images/good-bad.png'
import flag from '../../assets/images/flag.png'
import heart from '../../assets/images/heart2.png'
import star from '../../assets/images/star2.png'
import comment from '../../assets/images/comment.png'

import './answer.styl'

export default class Answer extends Component {
  config = {
    navigationBarTitleText: '答案'
  }

  componentDidMount() {}

  render () {
    return (
      <View className='answer-container'>
        <View className='question'>
          <Text className='question-title'>选择 Kindle 而不是纸质书的原因是什么？</Text>
        </View>
        <View className='answer-wrap'>
          <View className='bg-half'></View>
          <View className='answerer'>
            <View className='avatar'>
              <Image src={avatar} />
            </View>
            <View className='answer-info'>
              <Text className='answer-name'>YuDaCHao</Text>
              <Text className='answer-desc'>WEB前端*不靠谱天气预报员*想做代码小仙女</Text>
            </View>
            <View className='follow'>
              <Text>十 关注</Text>
            </View>
          </View>
        </View>
        <View className='answer-content'>
          <Text>
            难道不明白纸质书更贵啊！！！
            若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
            另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）
            而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！
            碎片时间阅读总不能天天背着一本书吧，那么占地方。
            看到描述最后一段，感觉有骗答案的嫌疑
          </Text>
          <Image src={house} />
          <Text>
            难道不明白纸质书更贵啊！！！
            若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
            另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）
            而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！
            碎片时间阅读总不能天天背着一本书吧，那么占地方。
            看到描述最后一段，感觉有骗答案的嫌疑
          </Text>
        </View>
        <View className='answer-footer'>
          <View className='good'>
            <Image src={goodBad} />
            <View className='good-num'>2.1k</View>
          </View>
          <View className='operation-wrap'>
            <View className='operation-btn'>
              <Image src={flag} />
              <Text>没有帮助</Text>
            </View>
            <View className='operation-btn'>
              <Image src={heart} />
              <Text>感谢</Text>
            </View>
            <View className='operation-btn'>
              <Image src={star} />
              <Text>收藏</Text>
            </View>
            <View className='operation-btn'>
              <Image src={comment} />
              <Text>342</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

}
