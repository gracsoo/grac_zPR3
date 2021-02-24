import React,{Component} from 'react';
import {TABS} from '../contants/index';
import Home from './home/index';
import Video from './video/index';
import Text from './text/index';
import EmailCheck from './emailcheck/index';
import Image from './image/index';
import Table from './table/index';
import './homePage.css';
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabs:TABS,
            activeKey:'Home'
        }
    }
    changeTab = (key) => {
        this.setState({
            activeKey:key
        })
    }
    renderComponent = () => {
        let {activeKey} = this.state;
        switch(activeKey){
            case 'Home':{
                return <Home></Home>
            }
            case 'Text':{
                return <Text></Text>
            }
            case 'Image':{
                return <Image></Image>
            }
            case 'Video':{
                return <Video></Video>
            }
            case 'Table':{
                return <Table></Table>
            }
            case 'EmailCheck':{
                return <EmailCheck></EmailCheck>
            }
            default:{
                return <Home></Home> 
            }
        }
    }
    render(){
        let {tabs, activeKey} = this.state;
        return <div className="home">
            <ul className="menu">
                {
                    tabs && tabs.map((item) => {
                        return <li className={item.key === activeKey ? 'active' : ''} key={item.key} onClick={() => {this.changeTab(item.key)}}>{item.text}</li>
                    })
                }
            </ul>
            {
                this.renderComponent()
            }
        </div>
    }
}
export default HomePage;