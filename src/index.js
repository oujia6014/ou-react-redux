import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'
import { Provider } from './react-redux'

function createStore (reducer) {
    let state = null
    //订阅者
    const listeners = []  
    //订阅
    const subscribe = (listener) => listeners.push(listener)
    //获取state
    const getState = ()=> state
    //触发 调用
    const dispatch = (action) => {
        state = reducer(state,action) //这个函数规定是一个纯函数，它接受两个参数，一个是 state，一个是 action。 不传参就是初始化
        listeners.forEach((listener) => listener())//监听函数调用
    }
    dispatch({}) //初始化
    return { getState, dispatch, subscribe }
}

const themeReducer = (state,action) =>{
    if(!state) return { themeColor:'black' }
    switch(action.type){
        case 'CHANGE_COLOR':
            return {...state,themeColor:action.themeColor}
        default:
            return state
    }
}

const store = createStore(themeReducer)

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }

}
ReactDOM.render(
    <Provider store={store} >
        <Index />
    </Provider>, 
    document.getElementById('root')
);
