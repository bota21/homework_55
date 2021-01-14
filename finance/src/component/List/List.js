import { React } from 'react';
import s from './List.module.css'

const List = props => {
    return (
        <div className={s.wrapper}>
        <div className={s.item}>{props.item}</div>
        <div className={s.price}>{props.price} KZT</div>
        <a href="#" className={s.delete} onClick={props.onRemove}>X</a>
        </div>
        )
    };
    export default List;