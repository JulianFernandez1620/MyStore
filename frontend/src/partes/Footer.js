import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
function Footer (){
    return(
        <footer className="flex items-center justify-between bg-purple-700 text-white py-5 px-10">
            <div>© 2023 My E-commerce</div>
            <div className="flex space-x-4">
                <a href="www.facebook.com" className="text-white hover:text-gray-300">
                    <FiFacebook />
                </a>
                <a href="www.instagram.com" className="text-white hover:text-gray-300">
                    <FiInstagram />
                </a>
                <a href="www.twitter.com" className="text-white hover:text-gray-300">
                    <FiTwitter />
                </a>
            </div>
        </footer>
    );
};

export default Footer;