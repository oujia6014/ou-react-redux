// export const connect = (mapStateToProps,mapDispatchToProps) => (WrappedComponent) =>{
//     class Connect extends Component{
//         static contextTypes = {
//             store:PropTypes.object
//         }
//         constructor(){
//             super()
//             this.state = {
//                 allProps:{}
//             }
//         }
//         componentWillMount(){
//             const {store} = this.context
//             this._updateProps()
//             store.subscribe(()=> this._updateProps())
//         }
//         _updateProps(){
//             const {store} = this.context
//             let stateProps = mapStateToProps ? mapDispatchToProps(store.getState(),this.props) :{} //防止mapStateToProps没有传入
//             let dispatchProps = mapDispatchToProps? mapDispatchToProps(store.dispatch,this.props) : {} //防止mapDispatchToProps没有传入
//             this.setState({
//                 allProps:{
//                     ...stateProps,
//                     ...dispatchProps,
//                     ...this.props
//                 }
//             })
//         }
//         render(){
//             return <WrappedComponent {...this.state.allProps}/>
//         }
//     }
//     return Connect
// }