import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const products = [
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustator',price:'$60.99'},
    {name:'Adobe reader',price:'$6.99'},
    {name:'Adobe xd',price:'$206.99'},
    
]
const nayoks = ['anwar','rubel','alomgir','Bappi']

  return (
    <div className="App">
      <header className="App-header">
      
        <p>My first react component</p>
        <Counter></Counter>
        <Users></Users>
        
        <ul>
          {
            nayoks.map(a=><li>{a}</li>)
          }
        {
          products.map(product => <li>{product.name}</li>)

        }

        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
       
       
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
    
  },[])
  return(
    <div>
      {console.log(users)}
      <h3>Dynamic users:{users.length}</h3>
      <ul>
  {users.map(user => <li>{user.name}{" "}{user.phone}</li>)}
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  
  return(
<div>
  <h1>Count: {count}</h1>
  <button onClick={() => setCount(count + 1)}>Increase</button>
  <button onClick = {() => setCount(count - 1)}>Decrease</button>
</div>


  )
}
function Product(props) {
 
  const productStyle = {border:'1px solid grey',
        backgroundColor:'lightgray',
        height:'300px',
        width:'300px',
        borderRadius:'5px',
        float:'left',
        marginBottom:'20px'}

  const {name,price}=props.product
  return (<div style={productStyle}>
          <h1>{name}</h1>
          <h3>{price}</h3>
          <button>Buy Now</button>
    </div>)
}
  

export default App;
