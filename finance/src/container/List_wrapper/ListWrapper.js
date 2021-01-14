import { React, useState} from 'react';
import s from './ListWrapper.module.css';
import { v4 as uuidv4 } from 'uuid';
import Form from '../../component/Form/Form';
import List from '../../component/List/List';

const ListWrapper = () => {
    const [list, setList] = useState([]);
    const [newList, setNewList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);    
    
    let currentName = (e, id) => {
        const index = list.findIndex(l => l.id === id);
        let copyNewList = [...newList];    
        const task = {...newList[index]};
        task.name = e.target.value;
        copyNewList[index] = task;    
        setNewList(copyNewList)
    };
    let currentPrice = (e, id) => {
        const index = list.findIndex(l => l.id === id);
        let copyNewList = [...newList];    
        const task = {...newList[index]};
        task.price = e.target.value;
        copyNewList[index] = task;    
        setNewList(copyNewList)
    };
    
    let removeList = id => {
        const index = list.findIndex(item => item.id === id);
        let copyList = [...list];
        copyList.splice(index, 1);
        setList(copyList);
    };
    
    let addList = (e, id) => {
        // const index = list.findIndex(l => l.id === id);
        let copyList = [...list];
        copyList.push({id: uuidv4(), text: newList[-1].name, price: newList[-1].price});
        setList(copyList);
        let newPrice = copyList.price + totalPrice;
        console.log(copyList);
        setTotalPrice(newPrice)
    };
    
    let addItems = list.map(i => {
        return <List 
        key={i.id}
        item={i.text}
        price={i.price}
        onRemove={() => removeList(i.id)}
        />
    })    
    return (
        <div className={s.wrapper}>
        <div className={s.lists}>
        <Form 
        changeName={currentName}
        changeCost={currentPrice}
        onAdd={(e) => addList(e, list.id)}  
        />        
        {addItems} 
        </div>
        <div className={s.general}>
        <h2>Total spent:</h2>
        <p className={s.cost}>{totalPrice} KZT</p>
        </div>
        </div>
        )
    };
    export default ListWrapper;