'use client'
import Image from "next/image";
import Link from "next/link";
import { memo, useContext, useState } from "react";
function Home() {

//  const items = useContext(DataContext);

const HomeMenu = [
  {
    id: 1,
    icon: '/image/hexagon.png',
    name: 'Hexagon',
    link: '/hexagon'
  },
  {
    id: 2,
    icon: '/image/hexagon.png',
    name: 'Round Bar',
    link: '/round-bar'
  },
  {
    id: 3,
    icon: '/image/hexagon.png',
    name: 'Round Tube',
    link: '/round-tube'
  },
  {
    id: 4,
    icon: '/image/hexagon.png',
    name: 'Square Bar',
    link: '/square-bar'
  },
  {
    id: 5,
    icon: '/image/hexagon.png',
    name: 'Square Tube',
    link: '/square-tube'
  },
  {
    id: 6,
    icon: '/image/hexagon.png',
    name: 'T Bar',
    link: '/t-bar'
  },
  {
    id: 7,
    icon: '/image/hexagon.png',
    name: 'Flat Bar',
    link: '/flat-bar'
  },
  {
    id: 8,
    icon: '/image/hexagon.png',
    name: 'Sheet',
    link: '/sheet'
  }
]

  const [items, setItems] = useState(HomeMenu);




  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center pt-2">

        {
          items.map((item) => (
            <div key={item.id} className="card transition-all ease-in-out duration-300 bg-primary hover:bg-secondary p-5">
              <Link href={`${item.link}`} className="">
                <div className="card-title justify-center mb-4" >
                  <i className={'text-xl fa-lg' + ' ' + item.icon}></i>
                  <Image src={item.icon} className="rounded-md" height={100} width={100} alt={item.name} />
                </div>
                <p className="text-lg text-center font-semibold">{item.name}</p>
              </Link>
            </div>
          ))
        }

      </div>
    </>
  );
}

export default memo(Home)