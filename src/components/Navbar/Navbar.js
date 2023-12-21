import React, {useState, useEffect} from 'react';
import profile from '../../assets/profile.jpeg';
import { IoBookmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Check if the screen size is small (sm) on mount
        const isSmScreen = window.innerWidth < 640; // You can adjust the breakpoint
        setIsSmallScreen(isSmScreen);

        // Add a resize event listener to update the state on window resize
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640); // You can adjust the breakpoint
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav className="bg-gray-3 p-2 shadow-md w-full">
            <div className='flex flex-col items-center'>
                <div className="container flex justify-between items-center">
                    {/* Logo on the left */}
                <Link to="/">
                <div className="Logo flex items-center">
                    <span className='text-xl font-bold'>THE</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 text-purple-500 ml-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                        />
                    </svg>
                    <span className="text-gray-500 text-lg font-bold">UTPOST</span>
                </div>
                </Link>
                    {/* Menu buttons in the middle */}
                    {!isSmallScreen ? (
                        // Render Menu 3 and Menu 4 on small screens only
                        <div className="flex space-x-4 items-center text-sm text-gray-400">
                            <Link to={"/alltools"} className='items-center hover:text-purple-900  text-black'>Alltools</Link>
                            <Link to={"/submit"} className='items-center hover:text-purple-900  text-black'>Submit</Link>
                            <Link to={"/newsletter"} className='items-center hover:text-purple-900  text-black'>Newsletter</Link>
                            <Link to={"/about-us"} className='items-center hover:text-purple-900  text-black'>About us</Link>
                        </div>
                    ) : ("")}

                    {/* Profile and bookmark buttons on the right */}
                    <div className="flex items-center space-x-4">
                    <IoBookmarkSharp size={25} className="text-purple-700"/>
                    <Link to={"/"}><img src={profile} alt="User" className="h-8 rounded-full" /></Link>
                    </div>
                </div>
                {
                    isSmallScreen ? (<div className="flex space-x-9 mt-2">
                        <Link to={"/alltools"} className='items-center hover:text-purple-900  text-black'>Alltools</Link>
                        <Link to={"/submit"} className='items-center hover:text-purple-900  text-black'>Submit</Link>
                        <Link to={"/newsletter"} className='items-center hover:text-purple-900  text-black'>Newsletter</Link>
                        <Link to={"/aboutUs"} className='items-center hover:text-purple-900  text-black'>About us</Link>
                    </div>): ("")
                }
            </div>
        </nav>
    );
};

export default Navbar;
