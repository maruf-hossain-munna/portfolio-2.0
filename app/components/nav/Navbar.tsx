'use client'

import Link from "next/link";
import Container from "../container/Container";
import { Redressed } from "next/font/google";
import { AiOutlineMenuFold } from "react-icons/ai";


const redressed = Redressed({ subsets: ['latin'], weight: ['400'] })

const NavBar = () => {
    // const menuItems = <>
    //     <li className='font-semibold lg:mr-6'><Link href='/'>Home </Link> </li>
    //     <li className='font-semibold lg:mr-6'>
    //         <Link href="/#skills"> Skills </Link>
    //     </li>
    //     <li className='font-semibold lg:mr-6'>
    //         <Link href="/#projects"> Projects </Link>
    //     </li>
    //     <li className='font-semibold lg:mr-6'>
    //         <Link href="/#about"> About  </Link>
    //     </li>
    //     <li className='font-semibold lg:mr-6'>
    //         <Link href="/#contact"> Contact </Link>
    //     </li>
    // </>

    return (
        <div className="sticky top-0 z-30 w-full bg-slate-950 shadow-lg">
            <div className="py-5">
                <Container>
                    <div className="flex justify-between items-center gap-3 md:gap-0">
                        <Link href='/' className={`${redressed.className} text-2xl font-bold`}>
                            Maruf Hossain
                        </Link>
                        {/* <div className=" ">
                            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                                <AiOutlineMenuFold
                                    className="border rounded-md py-1 px-2 bg-transparent border-gray-500 focus:border-gray-200 focus:bg-transparent"
                                    size={38} />
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>
                                    <ul className="flex flex-row items-center gap-8 text-xl font-[500]">
                                        <li><Link href='/'>Home</Link></li>
                                        <li><Link href='#services'>Services</Link></li>
                                        <li><Link href='#projects'>Projects</Link></li>
                                        <li><Link href='#skills'>Skills</Link></li>
                                        <li><Link href='#about'>About</Link></li>
                                        <li><Link href='#contact'>Contact</Link></li>
                                    </ul>
                                </Typography>
                            </Popover>
                        </div> */}

                        <div className="hidden md:block">
                            <ul className="flex items-center gap-8 md:gap-12 text-xl font-[500]">
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='#services'>Services</Link></li>
                                <li><Link href='#projects'>Projects</Link></li>
                                <li><Link href='#skills'>Skills</Link></li>
                                <li><Link href='#about'>About</Link></li>
                                <li><Link href='#contact'>Contact</Link></li>
                            </ul>
                        </div>


                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;