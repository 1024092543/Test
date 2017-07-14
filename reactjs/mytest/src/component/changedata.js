import React from 'react'

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

class Chinds extends React.Component{
    render(){
        return <div>
            <DatePicker
		      showTime
		      format="YYYY-MM-DD HH:mm:ss"
		      placeholder={this.props.dataValue}
		     />
            <p>{this.props.dataValue}</p>
            {/*在这子组件取父组件的值，第一次取到了，后面就取不到了*/}
        </div>
    }
}

class Parent extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            value:"2017-7-13 00:00:00"
        }
    }
    handleChange (event){
        this.setState({value:event.target.value})
    }
    render(){
        var value = this.state.value; //this指向Parent
        return <div>
            <Chinds dataValue={value} dataChange={this.handleChange.bind(this)}/>
        </div>
            //当检测到子组件里面数据改变时，改变this的指向，实现子组件给父组件传值
        
    }
}

export default Parent;

