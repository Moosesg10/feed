import React, { useContext, useEffect } from 'react'
import ContentUser from '../components/ContentUser'
import { useNavigate } from 'react-router-dom'
import { contextGlobal } from '../context/index.contex';

export const DashBoardUser = () => {
  const context = useContext(contextGlobal);
  const {getPostUser, dataUser} = context;
  useEffect(() => {
    getPostUser();
  }, []);

  const navigate =useNavigate()

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center" ,alignItems:"center"}}>
        <h1>{`Hola ${dataUser.name} estas en tu Dashboard`}</h1>
      </div>
     <ContentUser/>
    </div>
  )
}
