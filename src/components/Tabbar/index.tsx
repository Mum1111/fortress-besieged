import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './index.scss'

interface IProps {
    onSwitchTab: (index: number) => void,
    current: number
}

export default class Index extends Component<IProps, {}> {

    render() {
        const { current, onSwitchTab } = this.props;
        return (
            <View>
                <AtTabBar
                  fixed
                  selectedColor='#1890ff'
                  fontSize={10}
                  tabList={[
                        { title: '首页', iconType: 'home' },
                        { title: '刷题计划', iconType: 'bullet-list' },
                        { title: '个人', iconType: 'user' }
                    ]}
                  onClick={onSwitchTab}
                  current={current}
                />
            </View>
        )
    }
}
