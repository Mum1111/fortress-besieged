import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'

import Navigation from '../../components/Study/Navigation/index'
import Title from '../../components/Study/Title/index'
import Banner from '../../components/Study/Banner'
import List from '../../components/Study/List'

import './index.scss'



interface IProps {

}

interface IState {
  
}

export default class Study extends Component<IState, IProps> {

  constructor(props) {
    super(props)
    this.state = {
        
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  

  render () {
    
    return (
      <View className='study-container'>
        <View className='study-banner'>
            <Image className='bg' src='http://cdn.algbb.cn/study/banner-bg.svg'></Image>
            <View className='slogan'>
                <View>
                    <View className='title'>Hey Guys</View>
                    come to study !
                </View>
                <View className='button'>
                    Let's start
                </View>
            </View>
        </View>
        <Navigation />
        <Title link='courseList'>推荐课程</Title>
        <Banner />
        <Title link='exerciseList'>热门题库</Title>
        <List />
      </View>
    )
  }
}
