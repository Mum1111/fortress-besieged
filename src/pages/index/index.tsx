import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

import Tabbar from '../../components/Tabbar/index'

import Study from '../study/index'

import './index.scss'

interface IState {
  count: number,
  current: number
}

export default class Index extends Component<IState> {

  constructor(props) {
    super(props)
    this.state = {
      // count: 1,
      current:0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  switchTab(index:number): void{
    const navigationTitle:Array<string> = ['首页', '刷题计划', '个人']
    this.setState({current:index})
    Taro.setNavigationBarTitle({ title: navigationTitle[index] })
  }

  render () {
    const { current } = this.state
    return (
      <View className='index'>
        {current === 0 ? <Study /> : null}
        <Tabbar onSwitchTab={this.switchTab.bind(this)} current={current}></Tabbar>
      </View>
    )
  }
}
