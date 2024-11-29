import './employees-item.css'


const EmployeesItem = (props) => {
    const {name, salary, increase, like, onDelete, onToggleProp} = props

        let classNames = "list-group-item d-flex justify-content-between"
        if(increase){
            classNames += ' increase'
        }

        if(like){
            classNames += ' like'
        }
        
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="like">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center aling-items-center">
                    <button className="btn-cookie btn-sm" type="button" onClick={onToggleProp} data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
    
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

export default EmployeesItem