const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

let a = tasks.map(item => {
    if(item.category === 'Frontend') {
        return item.timeSpent
    }
}).filter(num => {
    if(num != undefined) return num
}).reduce((acc, num) => {return acc += num
});
console.log('In Frontend timeSpent is: ' + a);

let b = tasks.map(item => {
    if(item.type === 'bug') {
        return item.timeSpent
    }
}).filter(num => {
    if(num != undefined) return num
}).reduce((acc, num) => {return acc += num
});
console.log('In bug timeSpent is: ' + b);

let c = tasks.map(item => {
    let word = item.title;
    if(word.indexOf('UI') > 1){
        return item.type
    }
}).filter(item => {
    if(item === 'task') {
        return item
    }
});
console.log('The number of tasks in title UI is: ' + c.length);

let d = tasks.map((item) => {
    return item.category
})
.reduce((acc, val)=>{
    if(!acc[val]) {
        acc[val]=[];
    }
    acc[val].push(val); 
    return acc;
}, {});
console.log('Frontend: ' + d.Frontend.length+ ', Backend: ' + d.Backend.length);

let e = tasks.map(item => {
    if(item.category && item.title && item.timeSpent > 4) {
        return item.timeSpent
    }
}).filter(num => {
    if(num != undefined) return num
}).reduce((acc, num) => {
    acc.push(num);
    return acc
}, []);
console.log('In title & category, timeSpent more 4 is: ' + e);