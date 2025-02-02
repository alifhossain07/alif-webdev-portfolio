import Link from "next/link";

const Navbar = () => {
    return (
      <div className="shadow-2xl py-6 bg-slate-50">
        <div className="flex w-11/12 mx-auto justify-between items-center p-4">
          <div className="flex font-title text-2xl space-x-4">
            <ul className="list-none flex space-x-14">
            <Link href="/"><li>Home</li></Link>
              <li>About</li>
              <Link href="/projects"><li>Projects</li></Link>
              
            </ul>
          </div>
          <div>
            <h1 className="font-logo uppercase tracking-widest text-5xl">
              Alif Hossain
            </h1>
          </div>
          <div className="flex font-title text-2xl space-x-4">
            <ul className="list-none flex space-x-14">
              <li>Blogs</li>
              <li>Components</li>
              <li>Hire Me</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  