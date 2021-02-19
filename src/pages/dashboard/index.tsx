import React, { Component } from "react";

import { View } from "@tarojs/components";


import PersonalInfo from "../../components/DashBoard/PersonalInfo";
import Recommend from "../../components/DashBoard/Recommend";
import FeatureList from "../../components/DashBoard/FeatureList";

import './index.scss'


interface IProps {
    
}

interface IState {
    isLoading:boolean
}

export default class DashBoard extends Component<IProps,IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    render() {
        const {isLoading} = this.state

        return (
            <View className='dashboard-container'>
                <PersonalInfo />
                <Recommend />
                <FeatureList />
            </View>
        )
    }
}