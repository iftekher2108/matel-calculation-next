
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
function Panel({items}) {
    const route = usePathname()

    

    return (
        <div className="bg-primary items-center min-h-screen rounded-lg p-2">
            <div className="flex items-center">
                {/* <Image src="logo" className="" height={50} width={50} alt="logo" /> */}
            </div>
            <div>
                <ul className="menu rounded-lg bg-base-200 min-h-screen">
                    <li className={'mb-2 ' + (route === '/' ? 'active' : '')}><Link href={'/'}>Home</Link></li>
                    {
                    items.map((item)=>(
                     <li key={item.id} className={'mb-2 '+ (route === item.link ? 'active' :'')}><Link href={item.link}>{item.name}</Link></li>   
                    ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Panel
