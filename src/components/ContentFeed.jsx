import React, { useContext } from 'react'
import { contextGlobal } from '../context/index.contex'

const ContentFeed = () => {
    const context = useContext(contextGlobal)
    const {datas, setNavigateDetails , setRouteDetails} = context
    



return (
    <div className="title-contendor">
    {datas.map((data, index) => (
      <div className="post" key={index} onClick={() => {
        setNavigateDetails(true)
        setRouteDetails(`/${data.id}`)
      }}>
        <img
          src={`http://localhost:3000/download/${data.nameImg}`}
          alt=""
          className='images'
        />
      </div>
    ))}
  </div>
  )
}

export default ContentFeed
