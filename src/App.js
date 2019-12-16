import React from 'react';

const ItemList = ()=>{
    return (
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    )
};
const App = ()=>(<div>
    <h1>ToDo</h1>
    <ItemList/>
</div>);



export default App;