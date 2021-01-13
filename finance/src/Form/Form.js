import { React } from 'react';
import s from './Form.module.css'

const Form = () => {
    return (
        <form className={s.form}>
        <div className={s.wrapper}>
        <input type="text" className={s.name} placeholder='item Name'/>
        <input type="text" className={s.cost} placeholder='Cost'/>
        <p>KZT</p>
        <button type='submit' className={s.add}>Add</button>
        </div>            
        </form>
        )
    };
    export default Form;