import React from 'react'

export const CrudTableRow = ({data,index}) => {
const {title, autor ,fecha} = data

  return (
         <tr>
            <td>
               {index + 1}
            </td>
            <td>{title}</td>
            <td>{autor}</td>
            <td>{fecha}</td>
        </tr>
  )
}

