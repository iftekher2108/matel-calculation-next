'use client'
import MetalType from "@/components/MetalType"
// import Image from "next/image"
import { memo, useState } from "react";
function Hexagon() {

    const [density, setDensity] = useState(0.00)

    const handleData = (data) => {
        setDensity(data);
    }

    // result type 
    const [resultType, setResultType] = useState('length')

    // from data

    // width
    const [width, setWidth] = useState(0)
    const [widthType, setWidthType] = useState('mm')

    // length
    const [length, setLength] = useState(0)
    const [lengthType, setLengthType] = useState()

    // weight 
    const [weight, setWeight] = useState(0)
    // const [weightType, setWeightType] = useState()


    const [pieces, setPieces] = useState(1); // default pieces
    const [kgPrice, setKgPrice] = useState(1); // default price per kg


    // result 
    const [weightInKg, setWeightInKg] = useState(0.00)
    const [totalWeight, setTotalWeight] = useState(0.00)
    const [totalInPrice, setTotalInPrice] = useState(0.00)

    const calculateResults = () => {

        if (!width || !length || !pieces || !kgPrice || pieces <= 0 || kgPrice <= 0) {
            setWeightInKg(0.00);
            setTotalWeight(0.00);
            setTotalInPrice(0.00);
            return;
        }

        // Convert width and length based on their types
        const widthInCm =
            widthType === 'mm' ? width / 10 :
                widthType === 'cm' ? width :
                    widthType === 'in' ? width * 2.54 :
                        widthType === 'ft' ? width * 30.48 : 0;

        const lengthInCm =
            lengthType === 'mm' ? length / 10 :
                lengthType === 'cm' ? length :
                    lengthType === 'in' ? length * 2.54 :
                        lengthType === 'ft' ? length * 30.48 : 0;


        // If conversion results in 0, reset results
        if (!widthInCm || !lengthInCm) {
            setWeightInKg(0.00);
            setTotalWeight(0.00);
            setTotalInPrice(0.00);
            return;
        }

        // Calculate area, volume, and results
        const area = widthInCm * lengthInCm; // Area in cm²
        const volume = area * density; // Volume in grams
        const weightKg = (volume / 1000) * pieces; // Weight in kg
        const totalPrice = weightKg * kgPrice; // Total price

        setWeightInKg(weightKg.toFixed(2));
        setTotalWeight((weightKg * pieces).toFixed(2)); // Total weight equals weight * pieces
        setTotalInPrice(totalPrice.toFixed(2));

    }




    return (
        <>
            <div>
                <h3 className="text-3xl">Hexagon</h3>
            </div>
            <div className="flex flex-col justify-end items-end">
                <div>
                    <MetalType density={handleData} />
                </div>

                <div className="px-8 py-1">
                    <div className="form-control">
                        <label htmlFor="" className="label"></label>
                        <select onChange={(e) => setResultType(e.target.value)} required className="select select-primary focus:ring-0 focus:outline-none select-md">
                            <option value="length">By Length</option>
                            <option value="weight">By Weight</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex justify-end p-5 px-20">
                <p>Density: {(density == '' || density == null) ? '0.00' : density} gr/cm<sup>3</sup></p>
            </div>

            <div className="lg:grid grid-cols-2 gap-3">

                <div>
                    <div className="card">
                        {/* <Image src={} height={100} width={100} alt="Hexagon" /> */}
                    </div>
                    <div>

                        <div className="form-control">
                            <label htmlFor='width' className="label">
                                Width (A):
                            </label>
                            <div className="grid grid-cols-8">
                                <input onChange={(e) => setWidth(parseFloat(e.target.value) || 0)} type='number' required id='width'
                                    className="input col-span-6 input-primary border-accent focus:ring-0 focus:outline-none rounded-s-lg rounded-none input-md"
                                    placeholder='0.00' />

                                <select
                                    className="select rounded-e-lg col-span-2 select-primary 
                                 border-accent focus:ring-0 focus:outline-none select-md rounded-none" required
                                    onChange={(e) => setWidthType(e.target.value)}
                                >
                                    <option>select</option>
                                    <option value="mm">mm</option>
                                    <option value="cm">cm</option>
                                    <option value="in">in</option>
                                    <option value="ft">ft</option>

                                </select>
                            </div>
                        </div>

                        {resultType === 'weight' &&
                            <div className="form-control">
                                <label htmlFor='weight' className="label">
                                    Weight:
                                </label>
                                <div className="grid grid-cols-8">
                                    <input onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} type='number' id='weight'
                                        className="input col-span-6 input-primary border-accent focus:ring-0 focus:outline-none rounded-s-lg rounded-none input-md"
                                        placeholder='0.00' required />
                                    <span className="border border-1 col-span-2 border-accent focus:border-primary p-3 bg-base-100 rounded-e-lg focus:border-1">
                                        Kg
                                    </span>
                                    {/* <select onChange={(e) => setWeightType(e.target.value)} 
                                    className="select rounded-e-lg col-span-2 select-primary border-accent focus:ring-0 focus:outline-none select-md rounded-none">
                                        <option>select</option>
                                        <option value="">mm</option>
                                        <option value="">cm</option>
                                        <option value="">in</option>
                                        <option value="">ft</option>
                                    </select> */}
                                </div>
                            </div>
                        }



                        {resultType === 'length' &&
                            <div className="form-control">
                                <label htmlFor='length' className="label">
                                    Length:
                                </label>
                                <div className="grid grid-cols-8">
                                    <input onChange={(e) => setLength(parseFloat(e.target.value) || 0)} required type='number' id='length' className="input col-span-6 input-primary border-accent focus:ring-0 focus:outline-none rounded-s-lg rounded-none input-md"
                                        placeholder='0.00' />
                                    <select onChange={(e) => setLengthType(e.target.value)}
                                        className="select rounded-e-lg col-span-2 select-primary border-accent focus:ring-0 focus:outline-none select-md rounded-none" required >
                                        <option>select</option>
                                        <option value="mm">mm</option>
                                        <option value="cm">cm</option>
                                        <option value="in">in</option>
                                        <option value="ft">ft</option>
                                    </select>
                                </div>
                            </div>
                        }


                        <div className="form-control">
                            <label htmlFor='pieces' className="label">
                                Pieces:
                            </label>
                            <input onChange={(e) => setPieces(parseInt(e.target.value) || 0)} required type='number' id='pieces' className="input input-primary border-accent focus:ring-0 focus:outline-none input-md"
                                placeholder='0' />
                        </div>

                        {resultType === 'length' &&
                            <div className="form-control">
                                <label htmlFor='prices' className="label">
                                    KG Price:
                                </label>
                                <input onChange={(e) => setKgPrice(parseFloat(e.target.value) || 0)} required type='number' id='price' className="input input-primary border-accent focus:ring-0 focus:outline-none input-md"
                                    placeholder='0' />
                            </div>
                        }


                    </div>


                    {/* <div className="form-control">
                        <label htmlFor="" className="label">
                            Wide (A):
                        </label>
                        <input type="text" className="input input-primary input-md" placeholder="" />
                    </div> */}

                    <div className="flex lg:justify-end justify-center mt-3">
                        <button onClick={() => calculateResults()} className="btn btn-primary">Calculate</button>
                    </div>

                </div>

                <div className="p-5 bg-base-100 rounded-lg">
                    results
                    <p>Single Weight: {weightInKg} kg</p>
                    <p>Total Weight: {totalWeight} kg</p>
                    <p>Total Price: {totalInPrice} Taka</p>
                </div>

            </div>

            <div>
                {/* <Fallback /> */}
            </div>

        </>
    )
}

export default memo(Hexagon)

