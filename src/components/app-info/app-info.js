import { Component } from 'react';
import './app-info.css'

class AppInfo extends Component{

    

    render(){
        const {numOfEmployees, numOfIncrease} = this.props


        return(
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {numOfEmployees}</h2>
                <h2>Премию получат: {numOfIncrease} </h2>
            </div>
        );
    }
}


export default AppInfo;