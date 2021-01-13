import { React } from 'react';
import s from './ListWrapper.module.css'
import List from '../List/List';

const ListWrapper = () => {
    return (
        <div className={s.wrapper}>
        <div className={s.lists}>
        <List item='Buy milk'/>
        </div>
        <div className={s.price}>
        <h2>Total spent:</h2>
        <p className={s.cost}>KZT</p>
        </div>
        </div>
        )
    };
    export default ListWrapper;