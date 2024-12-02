import MetalType from "@/components/MetalType"
import TextInput from "@/components/TextInput"
import Image from "next/image"
function Hexagon() {
    return (
        <>
            <div className="flex justify-end">
            <MetalType/>
            </div>
            
            <div className="lg:grid grid-cols-2">

                <div>

                <div className="card">
                    {/* <Image src={} height={100} width={100} alt="Hexagon" /> */}
                </div>

                    <TextInput label='Wide (A):' type='text' id='wide-a' placeholder='Wide A' />

                    <TextInput label='Wide (B):' type='text' id='wide-b' placeholder='Wide B' />



                    {/* <div className="form-control">
                        <label htmlFor="" className="label">
                            Wide (A):
                        </label>
                        <input type="text" className="input input-primary input-md" placeholder="" />
                    </div> */}

                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Hexagon

