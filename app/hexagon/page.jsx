'use client'
import MetalType from "@/components/MetalType"
// import Image from "next/image"
import { memo, useState } from "react";
function Hexagon() {

    const [density, setDensity] = useState(7.85)

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
    const [lengthType, setLengthType] = useState('mm')

    // weight 
    const [weight, setWeight] = useState(0)
    // const [weightType, setWeightType] = useState()


    const [pieces, setPieces] = useState(1); // default pieces
    const [kgPrice, setKgPrice] = useState(1); // default price per kg

    
    const resetField = () => {
        setWidth(0)
        setWidthType('mm')
        setLength(0)
        setLengthType('mm')
        setPieces(1)
        setWeight(1)
        setKgPrice(1)
        
    }


    // result 
    const [weightInKg, setWeightInKg] = useState(0.00)
    const [totalWeight, setTotalWeight] = useState(0.00)
    const [totalInPrice, setTotalInPrice] = useState(0.00)
    const [resultInLength, setResultInLength] = useState(0.00)
    const [totalLength,setTotalLength] = useState(0.00)


    const calculateResults = () => {

        // if (!width || !length || !pieces || !kgPrice || pieces <= 0 || kgPrice <= 0) {
        //     setWeightInKg(0.00);
        //     setTotalWeight(0.00);
        //     setTotalInPrice(0.00);
        //     return;
        // }


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


        // Calculate area, volume, and results           
        const area = (resultType === 'length') ? widthInCm * lengthInCm // Area in cm²
            : (resultType === 'weight') ? 0 : '';



        if (width > 0 && pieces > 0 && kgPrice > 0) {

            if (resultType === 'length' && length > 0) {
                const volume = area * density; // Volume in grams
                const weightKg = (volume / 1000); // Weight in kg
                const totalWeight = weightKg * pieces // total weight
                const totalPrice = weightKg * kgPrice; // Total price

                setWeightInKg(weightKg.toFixed(2));
                setTotalWeight(totalWeight.toFixed(2)); // Total weight equals weight * pieces
                setTotalInPrice(totalPrice.toFixed(2));
            }
            else if (resultType === 'weight' && weight > 0) {

                const widthInMeters = width / 100; // Convert cm to meters
                const weightInGrams = weight * 1000; // Convert kg to grams
                const calculatedLength = weightInGrams / (density * widthInMeters); //length in meters
                const totalCalculatedLength = calculatedLength * pieces; // total length in meters
                const calculatedPrice = totalCalculatedLength * kgPrice; // total price in per meters
                setResultInLength(calculatedLength)
                setTotalLength(totalCalculatedLength)
                setTotalInPrice(calculatedPrice)

            }
            else {
                alert('Please enter valid type value')
            }
        }
        else {
            alert('Please enter valid value')
        }

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
                <p>Density: {density} gr/cm<sup>3</sup></p>
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
                                <input onChange={(e) => setWidth(parseFloat(e.target.value) || 0)} value={width} type='number' required id='width'
                                    className="input col-span-6 input-primary border-accent focus:ring-0 focus:outline-none rounded-s-lg rounded-none input-md"
                                    placeholder='0.00' />

                                <select
                                    className="select rounded-e-lg col-span-2 select-primary 
                                 border-accent focus:ring-0 focus:outline-none select-md rounded-none" required
                                    onChange={(e) => setWidthType(e.target.value)}
                                >
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
                                    <input onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} value={weight} type='number' id='weight'
                                        className="input col-span-6 input-primary border-accent focus:ring-0 focus:outline-none rounded-s-lg rounded-none input-md"
                                        placeholder='0.00' required />
                                    <span className="border border-1 col-span-2 border-accent focus:border-primary p-3 bg-base-100 rounded-e-lg focus:border-1">
                                        Kg
                                    </span>
                                    {/* <select onChange={(e) => setWeightType(e.target.value)} 
                                    className="select rounded-e-lg col-span-2 select-primary border-accent focus:ring-0 focus:outline-none select-md rounded-none">

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
                                    <input onChange={(e) => setLength(parseFloat(e.target.value) || 0)} value={length} required type='number' id='length' className="input col-span-6 input-primary border-accent focus:ring-0 focus:outline-none rounded-s-lg rounded-none input-md"
                                        placeholder='0.00' />
                                    <select onChange={(e) => setLengthType(e.target.value)}
                                        className="select rounded-e-lg col-span-2 select-primary border-accent focus:ring-0 focus:outline-none select-md rounded-none" required >
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
                            <input onChange={(e) => setPieces(parseInt(e.target.value) || 0)} value={pieces} required type='number' id='pieces' className="input input-primary border-accent focus:ring-0 focus:outline-none input-md"
                                placeholder='0' />
                        </div>


                            <div className="form-control">
                                <label htmlFor='prices' className="label">
                                    Price:
                                </label>
                                <input onChange={(e) => setKgPrice(parseFloat(e.target.value) || 0)} value={kgPrice} required type='number' id='price' className="input input-primary border-accent focus:ring-0 focus:outline-none input-md"
                                    placeholder='0' />
                            </div>

                    </div>


                    {/* <div className="form-control">
                        <label htmlFor="" className="label">
                            Wide (A):
                        </label>
                        <input type="text" className="input input-primary input-md" placeholder="" />
                    </div> */}

                    <div className="flex lg:justify-between justify-center mt-3">
                        <button onClick={() => resetField()} className="btn btn-error text-white">Clear</button>
                        <button onClick={() => calculateResults()} className="btn btn-primary">Calculate</button>
                    </div>

                </div>

                <div className="p-5 bg-base-100 rounded-lg">
                    results
                    {resultType === 'length' &&
                        <>
                            <p>Single Weight: {weightInKg} kg</p>
                            <p>Total Weight: {totalWeight} kg</p>
                        </>
                    }

                    {resultType === 'weight' && 
                    <>
                    <p>Single Length: {resultInLength} Meters</p>
                    <p>Total Length: {totalLength} kg</p>
                    </>
                    }
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

