import EmployeesItem from "../employees-item/employees-item";
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return(
            <EmployeesItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            /> 
        )
    })

    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    );
}

export default EmployeesList