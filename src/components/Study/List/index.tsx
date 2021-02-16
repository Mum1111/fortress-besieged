import { View } from "@tarojs/components";
import React, { Component } from "react";

import './index.scss'

interface IProps {

}

interface IState {

}

export default class List extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {

        }
    }

    render() {
        const hotExerciseList: Array<Object> = [{ id: 1, exerciseName: '软件工程', exerciseContent: '哈哈哈哈哈哈哈哈' }, { id: 1, exerciseName: '软件工程', exerciseContent: '哈哈哈哈哈哈哈哈' }, { id: 1, exerciseName: '软件工程', exerciseContent: '哈哈哈哈哈哈哈哈' }]

        return (
            <View className='list-container'>
                {hotExerciseList.map((item) => {
                    const { id, exerciseName, exerciseContent } = item;
                    return (
                        <View className='list-wrap' key={id}>
                            <View className='list-preview'>
                                <View className='iconfont icon-tiku'></View>
                            </View>
                            <View className='list-info'>
                                <View className='title'>{exerciseName}</View>
                                <View className='content'>{exerciseContent}</View>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}