import React, { useState, useEffect } from 'react';
import {Skeleton} from './Skeleton'
import { User } from './User';

export const Users = ({ items, isLoading, invites, onClickInvite, setSuccess}) => {
  const [findPost, setFindPost] = useState('');

  const inputInfo = (findPost)=>{
    setFindPost(findPost);

 
  }

 
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input onChange={(e)=>inputInfo(e.target.value)} value={findPost}  type="text" placeholder="Найти користувача..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
       
          {items.filter((post)=> post.first_name.toLowerCase().includes(findPost.toLowerCase())).map(e=>
        
            <User 
            id={e.id}
            isInvited={invites.includes(e.id)} 
            key={e.id} name={e.first_name} 
            email={e.email} 
            avatar={e.avatar}
            onClickInvite={onClickInvite}
            />

          
          )}
        </ul>
      )}
      {
        invites.length >0 && (
          <button onClick={()=>setSuccess(true)} className="send-invite-btn">Відправити запрошення</button>
        )
      }
     
    </>
  );
};
