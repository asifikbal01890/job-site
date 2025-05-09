import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-orange-50  py-10 px-5 ">
            <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                     <img src="data:image/png;base64,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" alt="resume"/>
                    <h2 className="text-2xl font-bold text-orange-400">Job Nest</h2>
                    <p className="mt-2 text-sm">
                        Job Nest jobs aims to be the largest professional networking and job matching platform for the rising force in Bangladesh.
                    </p>
                    <h3 className="mt-4 font-semibold">Download Job Nest App</h3>
                    <button className="mt-2  rounded-md">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32" />
                    </button>
                </div>

                <div>
                    <h3 className="font-semibold text-orange-400">Company</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li>About Us</li>
                        <li>Impactful Insights</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-orange-400">Services</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li>Job Posting (Subscription Plans)</li>
                        <li>Recruitment Process Outsourcing / Headhunting</li>
                        <li>Staffing Solution / Payroll Solution</li>
                        <li>Corporate Training & Development</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-orange-400">Get In Touch</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li className="flex items-center"><FaPhoneAlt className="mr-2" /> +880 9638-885588</li>
                        <li className="flex items-center"><FaEnvelope className="mr-2" /> info@Job Nest.com</li>
                        <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Job Nest Technologies Ltd. Baridhara DOHS, Dhaka</li>
                    </ul>
                    <h3 className="mt-4 font-semibold">Follow Us:</h3>
                    <div className="flex space-x-3 mt-2 text-2xl">
                        <FaFacebook className="cursor-pointer" />
                        <FaYoutube className="cursor-pointer" />
                        <FaLinkedin className="cursor-pointer" />
                        <FaTiktok className="cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className=" mt-10 border-t border-gray-700 pt-4 text-center  text-xs text-gray-500">
            
                <span>Copyright © 2024 All Rights Reserved by Job Nest</span>
        
            </div>
        </footer>
    );
};

export default Footer;
