import { React } from 'react';
import s from './Form.module.css'

const Form = props => {
    return (
        <form className={s.form}>
        <div className={s.wrapper}>
        <input type="text" className={s.name} placeholder='item Name' onChange={props.changeName}/>
        <input type="text" className={s.cost} placeholder='Cost' onChange={props.changeCost}/>
        <p>KZT</p>
        <button type='submit' className={s.add} onClick={props.onAdd}>Add</button>
        </div>            
        </form>
        )
    };
    export default Form;