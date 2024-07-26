import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список користувачів: https://reqres.in/api/users

function App() {


  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [Loading, setIsLoading] = useState(true);

  const[success, setSuccess] = useState(false);



  
  useEffect(()=>{

    setTimeout(()=>{
      fetch('https://reqres.in/api/users').then(res=>res.json()).then(json=>{
   
        setUsers(json.data);
      }).catch(err =>{
  
        console.warn(err);
        alert("помилка при отриманні користувачів");
      }).finally(setIsLoading(false));
    },1000)
    
  })


 const onClickInvite = (id) =>{
    if(invites.includes(id)){
      setInvites(prev=> prev.filter(_id=> _id!==id))
    }

    else{
      setInvites(prev=>[...prev, id]);
    }
 }
  
  
  return (
    <div className="App">


      {
        success
        ? <Success count={invites.length} setSuccess={setSuccess}/>
        :
        <Users 
        items={users} 
        isLoading={Loading} 
        setInvites={setInvites} 
        invites={invites} 
        onClickInvite={onClickInvite} 
        setSuccess={setSuccess}
        />
       
      }
     
      
    </div>
  );
}

export default App;
