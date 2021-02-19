import React, { Component } from "react";
import { View, Image } from "@tarojs/components";

import './index.scss'

interface IProps {

}

export default class PersonalInfo extends Component<IProps,{}> {
    render() {
        return (
            <View className='information-container'>
                <View className='information-wrap'>
                    {/* <Image className='avatar' lazyLoad></Image> */}
                    <View className='avatar'></View>
                    <View className='nickname'>
                        <View>张三</View>
                        <View>啦啦啦啦阿拉啦啦啦啦阿拉啦拉</View>
                    </View>
                    <View className='status'>
                        <View className='status-wrap'>
                            <View className='amount'>4</View>
                            <View>通过课程</View>
                        </View>
                        <View className='status-wrap'>
                            <View className='amount'>4</View>
                            <View>通过课程</View>
                        </View>
                        <View className='status-wrap'>
                            <View className='amount'>12</View>
                            <View>收藏</View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}