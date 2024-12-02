'use client'
import { useState,useEffect } from "react"

function MetalType() {

    // const types =[
    //     {
    //         id:0,
    //         name:'Steel',
    //         density:'7.85',
    //     },
    //     {
    //         id:1,
    //         name:'Aluminium',
    //         density:'2.73',
    //     },
    //     {
    //         id:2,
    //         name:'',
    //         density:'',
    //     },
    //     {
    //         id:3,
    //         name:'',
    //         density:'',
    //     },
    //     {
    //         id:4,
    //         name:'',
    //         density:'',
    //     },
    //     {
    //         id:5,
    //         name:'',
    //         density:'',
    //     },
    //     {
    //         id:6,
    //         name:'',
    //         density:'',
    //     },
    //     {
    //         id:7,
    //         name:'',
    //         density:'',
    //     },
    //     {
    //         id:8,
    //         name:'',
    //         density:'',
    //     }
    // ]

    const [data,setData] = useState(null)
    const [selectData,setSelectData] = useState()

    useEffect(() => {
        fetch('/metaltype.json')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            // setLoading(false)
          })
      },[])

    return (
        <>
        <div>

        </div>
            <div className="form-control">
                <label htmlFor="" className="label">
                Matel Type
                </label>
                <select onChange={(e)=> setSelectData(e.target.value)} className="select select-bordered w-full max-w-xs">
                    {(!data) ? <option>No profile data</option> : data.map((data)=>(
                     <option key={data.id} value={data.density} >{data.name}</option>   
                    ))}
                    
                </select>
            </div>
        </>
    )
}

export default MetalType



