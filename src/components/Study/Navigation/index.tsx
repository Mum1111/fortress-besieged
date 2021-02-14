import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import { View } from '@tarojs/components'

import './index.scss'

interface IProps {

}

interface Istate {

}

export default class Navigation extends Component {
    constructor(props: IProps) {
        super(props)
        this.state = {

        }
    }

    render() {
        const navigator: Array<{ title: string, icon: string, link: string }> = [
            { title: '课程', icon: 'icon-course', link: '/pages/courseList/index' },
            { title: '做题', icon: 'icon-exam', link: '/pages/exerciseList/index' },
            { title: '分类', icon: 'icon-type', link: '' },
            { title: '排行', icon: 'icon-rank', link: '/pages/rankList/index' }
        ]
        return (
            <View className='navigation'>
                <View className='navigation-container'>
                    {navigator.map((item, index) => {
                        const {title, icon, link} = item
                        return (
                            <View className='link-wrap' key={index} onClick={() => {Taro.navigateTo({url: link})}}>
                                <View className='link-icon'>
                                    <View className={`iconfont ${icon}`}></View>
                                </View>
                                <View>{title}</View>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}