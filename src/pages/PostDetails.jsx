import React, { useContext, useEffect } from 'react'
import { contextGlobal } from '../context/index.contex'
import { Navigate, useNavigate } from 'react-router-dom'
export const PostDetails = () => {
    const context = useContext(contextGlobal)
    const  {getOnePost,datas,setNavigateDetails,navigateDetails} = context

    useEffect(() => {
    getOnePost()
    }, [navigateDetails])

        const navigate =useNavigate()
    const Goback = () =>{
        setNavigateDetails(false)
       return navigate("/")
    }

  return (
    < >
        <button onClick={Goback} style={{width:"80px", height:"40px"}}>Go back</button>
        {
            
            datas.title != ""  ?  datas.map((data, index) =><div key={index} className='container-Post-details'>
               <div style={{width:"50%"}}>
               <img   className='images-details' src={`http://localhost:3000/uploads/${data.nameImg}`} alt="" />
               </div>
        
             <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column", width:"50%"}}>
             <h1>{data.title}</h1>
             <b>{data.autor}</b>
                <p>
                    {data.descripcion}
                </p>
             </div>
            </div>)
            :""
        }
    </>
  )
}
