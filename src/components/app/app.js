import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/emploeyees-add-form';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Maxence', salary: 1000, increase: false, like: false, id: 1},
                {name: 'Andrii', salary: 800, increase: false, like: false, id: 2},
                {name: 'Roisin', salary: 1200, increase: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.id = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleProp = (id, prop) => {

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){

                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onSubmit = (name, salary) => {
        const newItem = {name, salary, increase: false, like: false, id: this.id++}
        if(newItem.name === '' || newItem.salary === '') {
            return this.state.data;
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    
    }

    searchEmp = (items, term) => {
        if(term.length === 0) return items
        
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterEmp = (items, filter) => {
        if(filter === 'all'){
            return items
        } else if(filter === 'like') {
            return items.filter(item => item.like)
        } else if(filter === 'salary'){
            return items.filter(item => item.salary > 1000)
        }
    }

    onUpdateFilter = (filter) => {
        this.setState(() => ({
            filter
        }))
    }
    
    render(){
        const {data, term, filter} = this.state
        const emploeeys = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter)

        return(
            <div className="app">
                <AppInfo numOfEmployees={emploeeys} numOfIncrease={increase}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter}/>
                </div>
                <EmployeesList data={visibleData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onSubmit={this.onSubmit}/>
            </div>
        );

    }
}


export default App;