
import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import { usePathname } from "next/navigation"
function Panel({items}) {
    
    const route = usePathname()

    return (
        <div className="bg-primary items-center min-h-screen rounded-lg p-2">
            <div className="flex items-center">
                {/* <Image src="logo" className="" height={50} width={50} alt="logo" /> */}
            </div>
            <div>
                <ul className="menu rounded-lg min-h-screen">
                    <li className={'mb-2 focus:bg-primary text-white ' + (route === '/' ? 'active' : '')}><Link className="btn" href={'/'}>Home</Link></li>
                    {
                    items.map((item)=>(
                     <li key={item.id} className={'mb-2 text-white '+ (route === item.link ? 'active' :'')}><Link className="btn" href={item.link}>{item.name}</Link></li>   
                    ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default memo(Panel)
