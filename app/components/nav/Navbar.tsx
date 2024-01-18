import Link from "next/link";
import Container from "../container/Container";
import { Redressed } from "next/font/google";


const redressed = Redressed({ subsets: ['latin'], weight: ['400'] })

const NavBar = () => {
    return (
        <div className="sticky top-0 z-30 w-full bg-slate-950 shadow-lg">
            <div className="py-5">
                <Container>
                    <div className="flex justify-between items-center gap-3 md:gap-0">
                        <Link href='/' className={`${redressed.className} text-2xl font-bold`}>
                            Maruf Hossain
                        </Link>
                        <div >
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