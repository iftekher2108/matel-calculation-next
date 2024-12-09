'use client'
import { useState, useEffect, memo } from "react"

function MetalType({density}) {

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

    const [datas, setDatas] = useState()


    // model form fields
    // const [id,setId] = useState('')
    // const [name, setName] = useState('')
    // const [density, setDensity] = useState('')

 
    useEffect(() => {
     fetch('/metaltype.json')
            .then((res) => res.json())
            .then((data) => {
                setDatas(data)
                // setLoading(false)
            })
    },[])

    return (
        <>
            {/* {(selectData !== null && Number(selectData)) ? <p>{selectData} gram/cm<sup>3</sup></p> : ''} */}
            <div className="grid grid-cols-4 justify-center">
                <div className="form-control col-span-3 me-2">
                    <div className="flex ">
                        <span className="me-2">Matel Type</span>
                        <select onChange={(e) => density(e.target.value)} className="select select-primary select-bordered focus:ring-0 focus:outline-none w-full max-w-xs">
                            {(!datas) ? <option>No data</option> : datas.map((data,index) => (
                                <option key={index} value={data.density} >{data.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <button className="btn"
                    //  onClick={() => document.getElementById('my_modal_5').showModal()}
                     >gr/cm<sup>3</sup></button>
                    {/* <dialog id="my_modal_5" className="modal modal-middle">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h2 className="font-bold text-xl">Metal Type</h2>
                            <div className="p-4">

                            <div className="form-control mb-3">
                                    <label htmlFor="id" className="label">
                                        Id
                                    </label>
                                    <input type="text" id="id" className="input input-primary focus:outline-none border-1 focus:ring-0 input-md" required placeholder="id" />
                                </div>

                                <div className="form-control mb-3">
                                    <label htmlFor="name" className="label">
                                        Name
                                    </label>
                                    <input type="text" id="name" className="input input-primary focus:outline-none border-1 focus:ring-0 input-md" required placeholder="Name" />
                                </div>

                                <div className="form-control mb-3">
                                    <label htmlFor="" className="label">Density</label>
                                    <div className="grid grid-cols-5 justify-center items-center">
                                        <input type="number" className="input input-md input-primary focus:outline-none rounded-s-lg border-1 focus:ring-0  rounded-none col-span-4" required placeholder="0.00" />
                                        <span className="border border-1 border-primary p-3 rounded-e-lg focus:border-1">gr/cm<sup>3</sup></span>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-action justify-between">
                                <button className="btn btn-primary">Submit</button>
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>

                            </div>
                        </div>
                    </dialog> */}
                </div>

            </div>
        </>
    )
}

export default memo(MetalType) 



