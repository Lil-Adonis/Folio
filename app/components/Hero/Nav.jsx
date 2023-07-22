import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex flex-col items-end 2xl:mt-0 lg:mt-[0]  md:mt-0 sm:mt-7 mt-6 mr-4 text-7xl font-bold">
      <Link href="/work">
        <div className="cursor-pointer mr-16">
          <span className="text-lg font-semibold uppercase">01</span>Works
        </div>
      </Link>
      <Link href="/about">
        <div className="cursor-pointer mr-8 mt-4 sm:mt-5 md:mt-0 lg:mt-0 2xl:mt-0">
          <span className="text-lg font-semibold uppercase">03</span>About
        </div>
      </Link>
      <Link href="/contact">
        <div className="cursor-pointer mt-4 sm:mt-5 md:mt-0 lg:mt-0 2xl:mt-0 mr-16">
          <span className="text-lg font-semibold uppercase">02</span>Contact
        </div>
      </Link>
    </div>
  );
};

export default Nav;
