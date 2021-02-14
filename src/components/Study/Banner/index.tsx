import React, { Component } from 'react'
import { View, ScrollView, Image } from '@tarojs/components'

import './index.scss'



interface IProps {

}

interface IState {

}

export default class Banner extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ScrollView className='banner-container' scrollX scrollWithAnimation>
                <View className='banner-item'>
                    <View className='title'>软件工程</View>
                    <Image className='bg' src={`http://cdn.algbb.cn/study/banner/${( 1).toString()}.svg`} lazyLoad />
                </View>
                <View className='banner-item'>
                    <View className='title'>软件工程</View>
                    <Image className='bg' src={`http://cdn.algbb.cn/study/banner/${( 1).toString()}.svg`} lazyLoad />
                </View>
                <View className='banner-item'>
                    <View className='title'>软件工程</View>
                    <Image className='bg' src={`http://cdn.algbb.cn/study/banner/${( 1).toString()}.svg`} lazyLoad />
                </View>
                <View className='banner-item'>
                    <View className='title'>软件工程</View>
                    <Image className='bg' src={`http://cdn.algbb.cn/study/banner/${( 1).toString()}.svg`} lazyLoad />
                </View>
                <View className='banner-item'>
                    <View className='title'>软件工程</View>
                    <Image className='bg' src={`http://cdn.algbb.cn/study/banner/${( 1).toString()}.svg`} lazyLoad />
                </View>
            </ScrollView>
        )
    }
}