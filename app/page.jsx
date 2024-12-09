'use client'
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
function Home() {

//  const items = useContext(DataContext);

const HomeMenu = [
  {
    id: 1,
    icon: '/image/hexagon.jpeg',
    name: 'Hexagon',
    link: '/hexagon'
  },
  {
    id: 2,
    icon: '/image/round-bar.jpeg',
    name: 'Round Bar',
    link: '/round-bar'
  },
  {
    id: 3,
    icon: '/image/round-tube.jpeg',
    name: 'Round Tube',
    link: '/round-tube'
  },
  {
    id: 4,
    icon: '/image/square-bar.jpeg',
    name: 'Square Bar',
    link: '/square-bar'
  },
  {
    id: 5,
    icon: '/image/square-tube.jpeg',
    name: 'Square Tube',
    link: '/square-tube'
  },
  {
    id: 6,
    icon: '/image/t-bar.jpeg',
    name: 'T Bar',
    link: '/t-bar'
  },
  {
    id: 7,
    icon: '/image/flat-bar.jpeg',
    name: 'Flat Bar',
    link: '/flat-bar'
  },
  {
    id: 8,
    icon: '/image/sheet.jpeg',
    name: 'Sheet',
    link: '/sheet'
  }
]

  const [items, setItems] = useState(HomeMenu);




  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center pt-2">

        {
          items.map((item,index) => (
            <div key={index} className="card transition-all ease-in-out duration-300 bg-primary hover:bg-secondary p-5">
              <Link href={`${item.link}`}>
                <div className="card-title justify-center mb-4" >
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