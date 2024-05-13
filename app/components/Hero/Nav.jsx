
// import Link from 'next/link';

// const Nav = () => {
//   return (
//     <div className=" flex flex-col items-end 2xl:mt-0   md:mt-0 sm:mt-2 mt-[300px] mr-4 text-7xl font-bold">
//       <Link href="/work">
//         <div className="cursor-pointer mr-16">
//           <span className="text-lg font-semibold uppercase">01</span>Works
//         </div>
//       </Link>
//       <Link href="/about">
//         <div className="cursor-pointer mr-8 mt-4 sm:mt-5 md:mt-0 lg:mt-0 2xl:mt-0">
//           <span className="text-lg font-semibold uppercase">03</span>Profile
//         </div>
//       </Link>
//       <Link href="/contact">
//         <div className="cursor-pointer mt-4 sm:mt-5 md:mt-0 lg:mt-0 2xl:mt-0 mr-16">
//           <span className="text-lg font-semibold uppercase">02</span>Contact
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Nav;



import Link from "next/link";

const NavBar = () => {
    return ( 
        <>
            <nav className='w-[80%] md:w-[500px] h-[80px] bg-primary-color rounded-[35px] flex justify-end items-center fixed top-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] nav-bar bg-gray-300'>
                <p className="font-semibold mr-[39px] menu-btn scale-0 cursor-pointer text-sm">menu</p>
                <div className="dot w-[10px] h-[10px] rounded-full bg-secondary-color absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
            </nav>
            <Link href="/AboutMe">
                <div className="about w-[120px] h-[120px] rounded-full flex justify-center items-center bg-primary-color fixed top-[5%] left-[35%] scale-0 font-semibold z-[100]">About Me</div>
            </Link>
            <Link href="MyWorks">
                <div className="works w-[120px] h-[120px] rounded-full flex justify-center items-center bg-primary-color fixed top-[5%] right-[35%] scale-0 font-semibold z-[100]">My Works</div>
            </Link>
            <div className='w-[80px] h-[80px] bg-primary-color rounded-xl absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center btn font-black text-xl z-[150] cursor-pointer hover:rotate-[3deg]'>LA</div>
        </>
     );
}
 
export default NavBar;