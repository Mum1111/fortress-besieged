import React, { Component } from "react";

import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIcon, AtSearchBar } from "taro-ui";


import './index.scss'

interface IProps {

}

interface IState {
    searchValue:string
    exerciseList:any
}

export default class CourseList extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            exerciseList: [],
            searchValue: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    componentDidMount() {
        Taro.setNavigationBarTitle({
            title: '习题列表'
        })
    }

    handleSearchChange(searchValue: string) {
        this.setState({ searchValue })
    }

    render() {
        const {exerciseList, searchValue} = this.state
        return (
            <View className='exercise-list'>
                <AtSearchBar value={searchValue} onChange={this.handleSearchChange} />
                <View className='exercise-list-container'>
                    <View className='exercise-list-wrap'>
                        <View className='name'>练习名字</View>
                        <View className='status-bar'>
                            45人完成&emsp;共14题&emsp;-困难-&emsp;
                            <View className='type type--charge'>免费</View>
                        </View>
                        <AtIcon className='icon' value='edit' />
                    </View>
                </View>
            </View>
        )
    }
}