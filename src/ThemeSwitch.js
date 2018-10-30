import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'

class ThemeSwitch extends Component{
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
      }
    
      handleSwitchColor (color) {
        if (this.props.onSwitchColor) {
          this.props.onSwitchColor(color)
        }
      }

    render(){
        return (
            <div>
            <button style={{color:this.props.themeColor}} onClick={this.handleSwitchColor.bind(this,'red')}>Red</button>
            <button style={{color:this.props.themeColor}} onClick={this.handleSwitchColor.bind(this,'blue')}>blue</button>·
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      onSwitchColor: (color) => {
        dispatch({ type: 'CHANGE_COLOR', themeColor: color })
      }
    }
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
export default ThemeSwitch


// class ThemeSwitch extends Component{
//     static contextTypes = {
//         store:PropTypes.object
//     }
//     constructor(){
//         super()
//         this.state = {themeColor:''}
//     }
//     componentWillMount(){
//         const {store} = this.context
//         this._updateThemeColor()
//         store.subscribe(()=> this._updateThemeColor())
//     }
//     _updateThemeColor(){
//         const {store} = this.context
//         const state = store.getState()
//         this.setState({themeColor:state.themeColor})
//     }
//     handelSwitchColor(color){
//         const {store} = this.context
//         store.dispatch({
//             type:'CHANGE_COLOR',
//             themeColor:color
//         })
//         console.error('dispatch action 去改变颜色:'+color)
//     }
//     render(){
//         return (
//             <div>
//             <button style={{color:this.state.themeColor}} onClick={this.handelSwitchColor.bind(this,'red')}>Red</button>
//             <button style={{color:this.state.themeColor}} onClick={this.handelSwitchColor.bind(this,'blue')}>blue</button>·
//             </div>
//         )
//     }

// }

