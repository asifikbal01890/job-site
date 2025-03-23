import { useContext, useState } from "react";
import { FaUnlock, FaUser, FaBars, FaTimes, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "motion/react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div>
            {/* Top Navbar */}
            <nav className=" p-4 shadow-md">
                <div className="container max-w-[1200px] mx-auto flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4">


                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEv0lEQVR4nO2XS0xcVRyHZ1G7NK400qRYeQzQ2lpKtVXIVCswDDAIOhSaShneMJQmRl7WSjTKyxoTExNNTEw0MbGx1VihJaWl0rI0utZtcVGt8VEXRONn/tMZg4d75s69w51L6nzJl8zvnP895zePzXg8GTJkyJAhQ1rJjnBgax8L2RH+yO7j1tYIlx/oxef5P7CtlxMP9oGR2/p40XMnk9tDTV4Pf+f2sJLbzZA3QpaY28uwrEX3uin33Kl4u7lS0A0FXQyrewVdjMiet4tzno3Oni7u2t7BqR0d/LijE6zqbSNLPVPW7JwV7dDBG74xNqXtA9jZzvSuDrCr7txUztzZwZRjb7goxObiNqZ2t/FDcTvEfbiTx6ycE3/O7r4Re8KUru5U3M5ycTuT0tmzXpSEmdwbBlWr55g9l+q5qy1pZcKzXjx6lOV9rbC/9fY3Lq9Fq+fEnzPT7rnRrmFK5bV09qwXpS0g6rLVc8x0q58W33Mg6rLbON7vySMg6rLbON6v/DCIuuw2jveragZRl3X4m6mtamahqolbor+Jy1WHqUn2PjNT7Zc0NU0g6rLhM4cYj8+pVjfxWjL3mZlKP0vUNYKoywbztbIfbGSlrpGhYBNZYl2I4dgaTx8y/yU41c8yDSEQdVmlPsSC7NeH1v7paQgxEnv+klv9LBN6BkRdXjPfwO+yX1/P/eqerMWe/83sPjPt9rNMcwOIumw2b3ffTLv9LHOkHkRdNpu3uu90P8scrQNRlw3mf5b9tuDa//0t1WyRvZYgN93qZ5m2YPTNoMsq4SBzsh8OMqLutdcyGts7b3afzlT7WaazFkRdVumoYSw6U8NKVw0j8kvormZLZy2jshbbe9nsPp2p9rNMbzWIuryavmqe7Q3wV3xGZ081f/YGaEh3P1v0B0DU5TgDtdwXCXBT9iIBThzz44sEmI0EuCH2B5iRtf4qTkbPqOKnnnLuTVc/2xz3g6jLcQb8jMn6gJ8vzc4cqGQ2OlvJSd19qqn2s83zlSDq8qr1b6J7fg6anllBeXS2gq9196mm2s82gxUg6vK/6+X8KuvH/NxtduZxH/fI7AsV/JKufrYZfQpEXVbXrZqufrZ56SCIuqyuWzVd/Wwz9gSIuuw2jvd79QCIuuw2jvd73QeiLruN4/2mykDUZbdxvN+pUhB1WV03MpkZdXbwGktDS2Dk4BJXrfazzVuPg6jL6rqRycyos68sQiKt9rPN2/tB1GWnePMKJDJt/d7ZB6IuO8W7lyCRaev33iMg6rK6bmQyM+rsRxchkVb72eb9vSDqsrpuZDIz6uzZC5BIq/1s80EJiLrsFHMzkMi09fuwGERddopr5yCRaev38W4QdVldNzKZGXX2288hkVb72eaTXSDqsrpuZDIz6ux3Z7j6/Vkw9AyLVvvZ5tOdIOqy2zje77OHQNRlt3G83xfbQdRlt3G830wRy7NFMFtEqeTY6w3zAazuc76Qsli+vm4XzBUyMVcIqp4NglG3C4WMr9sFp4vYPO9lYj6f5XkvxL2Yf/sX4SbzeZT9p5OX6/P5jEtnxy5dyGNqIR82lHlMOvaGVRZ8bFrMYfqrHG4s5oKbRjvkMC2d1hTNkCFDhgwZPIn4B581HWgYJ0quAAAAAElFTkSuQmCC" alt="logo" />
                        {/* <motion.h1 animate={{x:[0, 40, 80, 120, 160, 200, 240, 280 ], y:[0, 40, 0, 40, 0, 40, 0, 40], }} transition={{ duration:2, repeat: Infinity }} className="text-2xl md:text-4xl font-extrabold text-gray-800">.</motion.h1> */}

                        <motion.h1 animate={{ color: ["#ff0088", "#0d63f8", "#78f542"] }} transition={{ repeatType: "reverse", easing: "linear", duration: 0.5, repeat: Infinity, }} className="text-2xl md:text-4xl font-extrabold text-gray-800">Job Nest</motion.h1>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* Right Side - User Info or Login/Signup */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full" />
                                <button onClick={handleLogOut} className="flex items-center text-gray-700 hover:text-orange-600">
                                    <FaSignOutAlt className="mr-1" /> Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                    <Link to="/login" className="flex items-center text-gray-700 hover:text-orange-600">
                                        <FaUser className="mr-1" /> Login
                                    </Link>
                                </motion.div>
                                <Link to="/register" className="flex items-center text-gray-700 hover:text-orange-600">
                                    <FaUnlock className="mr-1" /> Signup
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Bottom Navbar */}
            <nav className="bg-gray-100 shadow-md w-full">
                <div className="container max-w-[1200px] mx-auto xl:px-0 px-2 md:py-3 py-0 flex items-center justify-between">
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/jobs", label: "Jobs" },
                            { path: "/employers", label: "Employers" },
                            { path: "/candidates", label: "Candidates" },
                            { path: "/packages", label: "Packages" },
                            { path: "/pages", label: "Pages" }
                        ].map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-600 hover:text-orange-500"}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="md:block hidden">
                    <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <NavLink  to="/post-job" className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-600  md:flex">
                            <FaPlus /> Post New Job
                        </NavLink>
                       </motion.div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50" onClick={toggleMenu}></div>
            )}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50 p-5`}>
                <button className="absolute top-4 right-4 text-gray-700" onClick={toggleMenu}>
                    <FaTimes size={24} />
                </button>
                <div className="flex flex-col space-y-4 mt-10">
                    {[
                        { path: "/", label: "Home" },
                        { path: "/jobs", label: "Jobs" },
                        { path: "/employers", label: "Employers" },
                        { path: "/candidates", label: "Candidates" },
                        { path: "/packages", label: "Packages" },
                        { path: "/pages", label: "Pages" }
                    ].map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-600 hover:text-orange-500"}
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    {user ? (
                        <>
                            <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full mx-auto" />
                            <button onClick={handleLogOut} className="flex items-center text-gray-700 hover:text-orange-600 justify-center mt-4">
                                <FaSignOutAlt className="mr-2" /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="flex items-center text-gray-700 hover:text-orange-600" onClick={toggleMenu}>
                                <FaUser className="mr-2" /> Login
                            </Link>
                            <Link to="/register" className="flex items-center text-gray-700 hover:text-orange-600" onClick={toggleMenu}>
                                <FaUnlock className="mr-2" /> Signup
                            </Link>
                        </>
                    )}
                    <NavLink to="/post-job" className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-600 mt-4" onClick={toggleMenu}>
                        <FaPlus /> Post New Job
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
