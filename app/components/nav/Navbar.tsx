'use client'

import Link from "next/link";
import Container from "../container/Container";
import { Redressed } from "next/font/google";
import { AiOutlineMenuFold } from "react-icons/ai";
import DrawerNav from "./DrawerNav";
import Image from "next/image";


const redressed = Redressed({ subsets: ['latin'], weight: ['400'] })

const NavBar = () => {

    return (
        <div className="sticky top-0 z-30 w-full bg-slate-950 shadow-lg mb-10 md:mb-16">
            <div className="py-5">
                <Container>
                    <div className="flex justify-between items-center gap-3 md:gap-0">
                        <Link href='/' className={`${redressed.className} text-2xl font-bold`}>
                            <span className="text-indigo-500">Maruf</span> <span className="text-green-500">Hossain</span>
                        </Link>

                        <div className="hidden md:block">
                            <ul className="flex items-center gap-6 lg:gap-12 text-lg lg:text-xl font-[500]">
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='#services'>Services</Link></li>
                                <li><Link href='#projects'>Projects</Link></li>
                                <li><Link href='#expertise'>Expertise</Link></li>
                                <li><Link href='#about'>About</Link></li>
                                <li><Link href='#contact'>Contact</Link></li>
                            </ul>
                        </div>

                        {/* <div className="block md:hidden">
                            <DrawerNav />
                        </div> */}

                        <div className='md:hidden p-1 flex justify-center items-center w-12 h-12  rounded-full bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500'>
                            <Image
                                src='/images/munna.jpg'
                                alt='Maruf Hossain Munna'
                                width={48}
                                height={48}
                                className='rounded-full self-center'
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;