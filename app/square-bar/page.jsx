
'use client'
import MetalType from "@/components/MetalType"
// import Image from "next/image"
import { memo, useState } from "react";
function SquareBar() {
    const [density, setDensity] = useState(7.85)

    const handleData = (data) => {
        setDensity(data);
    }

    // result type 
    const [resultType, setResultType] = useState('length')

    // DiaMeter
    const [side, setSide] = useState(0)
    const [sideType, setSideType] = useState('mm')


    // length
    const [length, setLength] = useState(0)
    const [lengthType, setLengthType] = useState('mm')

    // weight 
    const [weight, setWeight] = useState(0)
    // const [weightType, setWeightType] = useState()

    const [pieces, setPieces] = useState(1); // default pieces
    const [kgPrice, setKgPrice] = useState(1); // default price per kg


    const resetField = () => {
        setSide(0)
        setSideType('mm')
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
    const [totalLength, setTotalLength] = useState(0.00)

    const calculateResults = () => {
        if (
            !side || !pieces || side <= 0 || pieces <= 0 ||
            (resultType === 'length' && (!length || !kgPrice || length <= 0 || kgPrice <= 0)) ||
            (resultType === 'weight' && (!weight || weight <= 0))
        ) {
            alert('Please enter valid input values.');
            // Reset results if inputs are invalid
            setWeightInKg(0.00);
            setTotalWeight(0.00);
            setTotalInPrice(0.00);
            setResultInLength(0.00);
            setTotalLength(0.00);
            return;
        }

        // Convert width to cm based on its type
        const sideInCm =
            sideType === 'mm' ? side / 10 :
                sideType === 'cm' ? side :
                    sideType === 'in' ? side * 2.54 :
                        sideType === 'ft' ? side * 30.48 : 0;

        // Convert length to cm based on its type (only if resultType is 'length')
        const lengthInCm =
            resultType === 'length' &&
            (lengthType === 'mm' ? length / 10 :
                lengthType === 'cm' ? length :
                    lengthType === 'in' ? length * 2.54 :
                        lengthType === 'ft' ? length * 30.48 : 0);


        // Calculate side length of the hexagon
        // const sideLength = widthInCm / Math.sqrt(3);
        // // Calculate cross-sectional area of the hexagon
        // const hexagonArea = (3 * Math.sqrt(3) / 2) * Math.pow(sideLength, 2); // Area in cm²

        if (resultType === 'length') {
            // When calculating by length

            // Calculate the weight of one piece
            const weightKg = (sideInCm ** 2 * lengthInCm * density) / 1000;
            const totalWeight = weightKg * pieces; // Total weight for all pieces
            const totalPrice = totalWeight * kgPrice; // Total price for all prices
            setWeightInKg(weightKg.toFixed(2));
            setTotalWeight(totalWeight.toFixed(2));
            setTotalInPrice(totalPrice.toFixed(2));
        }
        else if (resultType === 'weight') {

            // Calculate length in cm
            const length = (weight * 1000) / (side ** 2 * density);
            // Convert length to meters
            const lengthInMeters = length / 100;
            // Total length in meters
            const totalLength = lengthInMeters * pieces;
            setResultInLength((lengthInMeters).toFixed(2));
            setTotalLength((totalLength).toFixed(2));

        }
        else {
            alert('Please select a valid calculation type (length or weight).');
        }
    }

    return (
        <>
            <div>
                <h3 className="text-3xl text-white">Square Bar</h3>
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

            <div className="flex justify-end text-white p-5 px-20">
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
                                Side (A):
                            </label>
                            <div className="grid grid-cols-8">
                                <input onChange={(e) => setSide(parseFloat(e.target.value) || 0)} value={side} type='number' required id='width'
                                    className="input col-span-6 input-primary border-accent focus:ring-0 focus:outline-none rounded-s-lg rounded-none input-md"
                                    placeholder='0.00' />

                                <select
                                    className="select rounded-e-lg col-span-2 select-primary 
                                 border-accent focus:ring-0 focus:outline-none select-md rounded-none" required
                                    onChange={(e) => setSideType(e.target.value)}
                                >
                                    <option value="mm">mm</option>
                                    <option value="cm">cm</option>
                                    <option value="in">in</option>
                                    <option value="ft">ft</option>

                                </select>
                            </div>
                        </div>

                        {/* <div className="form-control">
                            <label htmlFor='thickness' className="label">
                                Thickness:
                            </label>
                            <div className="grid grid-cols-8">
                                <input onChange={(e) => setThickness(parseFloat(e.target.value) || 0)} value={thickness} type='number' id='thickness'
                                    className="input col-span-6 input-primary border-accent focus:ring-0 focus:outline-none rounded-s-lg rounded-none input-md"
                                    placeholder='0.00' required />
                                <select onChange={(e) => setThickType(e.target.value)}
                                    className="select rounded-e-lg col-span-2 select-primary border-accent focus:ring-0 focus:outline-none select-md rounded-none" required >
                                    <option value="mm">mm</option>
                                    <option value="cm">cm</option>
                                    <option value="in">in</option>
                                    <option value="ft">ft</option>
                                </select>
                            </div>
                        </div> */}

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

                        {resultType === 'length' &&

                            <div className="form-control">
                                <label htmlFor='prices' className="label">
                                    Kg Price:
                                </label>
                                <input onChange={(e) => setKgPrice(parseFloat(e.target.value) || 0)} value={kgPrice} required type='number' id='price' className="input input-primary border-accent focus:ring-0 focus:outline-none input-md"
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

                    <div className="flex lg:justify-between justify-center my-3">
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
                            <p>Total Price: {totalInPrice} Taka</p>
                        </>
                    }

                    {resultType === 'weight' &&
                        <>
                            <p>Single Length: {resultInLength} Meter</p>
                            <p>Total Length: {totalLength} Meter</p>
                        </>
                    }
                </div>
            </div>
            <div>
            </div>

        </>
    )
}

export default memo(SquareBar) 
