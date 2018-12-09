import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { input, inputEnd, compute } from '../../actions/games'

import './index.scss'



@connect(({ games }) => ({
  games
}), {
  input,
  compute,
  inputEnd
})
class Index extends Component {

  config = {
    navigationBarTitleText: '数数游戏'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onInputValue(event) {
    const value = parseInt(event.detail.value, 10);
    if (typeof value === 'number' && value <=9 && value >= 2) {
      this.props.input(value);
    } else {
      this.props.input(this.props.games.value);
    }
  }

  onInputEndValue(event) {
    const value = parseInt(event.detail.value, 10);
    if (typeof value === 'number' && value <=1000) {
      this.props.inputEnd(value);
    } else {
      this.props.inputEnd(this.props.games.endValue);
    }
  }

  onButtonClick() {
    this.props.compute();
  }

  render () {
    const {
      value,
      endValue,
      results
    } = this.props.games;

    return (
      <View className='index'>
        <View>
          <Text>输入不能被数到的数字</Text>
          <Input type='text' placeholder='2-9的任何数字' value={value} focus onInput={this.onInputValue}/>
        </View>
        <View>
          <Text>输入要判断的数字最大范围</Text>
          <Input type='text' placeholder='默认是100' value={endValue} onInput={this.onInputEndValue}/>
        </View>
        <Button plain type='primary' onClick={this.onButtonClick}>计算</Button>

        <View>
          <Text>不能说的数字</Text>
          <View>
          {
            results.map((value, index) => (
              <Text>{index === 0 ? '' : ', '}{value}</Text>        
            ))
          }
          </View>
        </View>
      </View>
    )
  }
}

export default Index
