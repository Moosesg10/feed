import React, { useContext } from 'react'
import { CrudTableRow } from './TableStats'
import { contextGlobal } from '../context/index.contex';
import { useNavigate } from 'react-router-dom';

export const StatsUser = () => {
  const context = useContext(contextGlobal);
  const {dataPostUser} = context;
  const navigate =useNavigate()
  const goFeed = () =>{
    return navigate('/')
  }
  return (
    <div style={{width:"60%"}}>
      <div style={{display:"flex" ,justifyContent:"space-between",alignItems:"center"}}>
      <h3>Table de Datos</h3>
    <button onClick={goFeed}>Home</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Title</th>
            <th>Autor</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {dataPostUser.length === 0 ? (
            <tr>
              <td colSpan={4}>Sin Datos </td>
            </tr>
          ) : (
            dataPostUser.map((data,index) => (
              <CrudTableRow
                key={data.id}
                data={data}
                index={index}
              />
            ))
          )}
        </tbody>
      </table>

    </div>
  )
}
