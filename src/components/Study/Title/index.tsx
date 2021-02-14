import React, {Component} from 'react'

import { View } from '@tarojs/components'

import Taro from '@tarojs/taro'

import './index.scss'

interface IProps {
    link: string
}

interface IState {

}



export default class Title extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {

        }
    }

    goToMore = () => {
        const {link} = this.props
        Taro.navigateTo({url:`/pages/${link}/index`})
    }

    

    render() {
        const {children} = this.props
        return (
            <View className='title'>
                <View>{children}</View>
                <View className='link' onClick={this.goToMore}>更多</View>
            </View>
        )
    }
}
