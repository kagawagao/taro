import React from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

/**
 * 界面-交互
 * @returns 
 */

export default class Index extends React.Component {
    state = {
        list: [
            {
                id: 'showToast',
                func: () => {
                    Taro.showToast({
                        title: 'test showToast',
                        icon: 'success',
                        duration: 2000,
                        mask: false,
                        image:'',
                        success: function(res) {
                            console.log('showToast success ', res)
                        },
                        fail: function(res) {
                            console.log('showToast fail ', res)
                        },
                        complete: function(res) {
                            console.log('showToast complete ', res)
                        },
                    })
                },
            }, 
            {
                id: 'showModal',
                func: () => {
                    Taro.showModal({
                        title: '提示',
                        content: '这是一个模态弹窗',
                        cancelColor: '#ff0000',//red
                        cancelText: '取消按钮',
                        confirmColor: '#00ff00',//green
                        confirmText: '确认按钮',
                        showCancel: true,
                        success: function (res) {
                          if (res.confirm) {
                            console.log('showModal success > 用户点击确定', res)
                          } else if (res.cancel) {
                            console.log('showModal success > 用户点击取消', res)
                          }
                        },
                        fail: function(res) {
                            console.log('showModal fail ', res)
                        },
                        complete: function(res) {
                            console.log('showModal complete ', res)
                        },
                    })
                },
            }, 
            {
                id: 'showLoading',
                func: () => {
                    Taro.showLoading({
                        title: '加载中',
                        mask: true,
                        success: function (res) {
                            console.log('showLoading success ', res)
                        },
                        fail: function(res) {
                            console.log('showLoading fail ', res)
                        },
                        complete: function(res) {
                            console.log('showLoading complete ', res)
                        },
                    })
                },
            }, 
            {
                id: 'showActionSheet',
                func: null,
            }, 
            {
                id: 'hideToast',
                func: () => {
                    Taro.showToast({
                        title: 'test hideToast',
                        icon: 'success',
                        duration: 2000,
                        mask: false,
                        image:'',
                        success: function(res) {
                            console.log('showToast success ', res)
                        },
                        fail: function(res) {
                            console.log('showToast fail ', res)
                        },
                        complete: function(res) {
                            console.log('showToast complete ', res)
                        },
                    })
                    setTimeout(function () {
                        Taro.hideToast({
                            noConflict: false,
                            success: function (res) {
                                console.log('hideToast success ', res)
                            },
                            fail: function(res) {
                                console.log('hideToast fail ', res)
                            },
                            complete: function(res) {
                                console.log('hideToast complete ', res)
                            },
                        })
                    }, 2000)
                },
            }, 
            {
                id: 'hideLoading',
                func: () => {
                    Taro.showLoading({
                        title: '加载中',
                        mask: true,
                        success: function (res) {
                            console.log('showLoading success ', res)
                        },
                        fail: function(res) {
                            console.log('showLoading fail ', res)
                        },
                        complete: function(res) {
                            console.log('showLoading complete ', res)
                        },
                    })
                    setTimeout(function () {
                        Taro.hideLoading({
                            noConflict: false,
                            success: function (res) {
                                console.log('hideLoading success ', res)
                            },
                            fail: function(res) {
                                console.log('hideLoading fail ', res)
                            },
                            complete: function(res) {
                                console.log('hideLoading complete ', res)
                            },
                        })
                    }, 2000)
                },
            }, 
            {
                id: 'enableAlertBeforeUnload',
                func: null,
            }, 
            {
                id: 'disableAlertBeforeUnload',
                func: null,
            }, 
        ], 
    }
    render () {
        return (
            <View className='api-page'>
                {
                    this.state.list.map((item) => {
                        return (
                            <Button
                                className='api-page-btn'
                                type='primary'
                                onClick={item.func == null ? () => {} : item.func}
                            >
                                {item.id}
                                {
                                    item.func == null && (<Text className='navigator-state tag'>未创建Demo</Text>)
                                }
                            </Button>
                        )
                    })
                }
            </View>
        )
    }
}
