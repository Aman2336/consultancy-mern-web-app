import services from "../main"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
export default function footer(){
    return(
        <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold">Raghav Gupta</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <div className="mt-4 flex  space-x-2">
          <a href="#" className="text-blue-600"><span className="text-2xl"><FaFacebook /></span></a>
          <a href="#" className="text-blue-400"><span className="text-2xl"><FaTwitter /></span></a>
          <a href="#" className="text-pink-600"><span className="text-2xl"><FaInstagramSquare /></span></a>
          <a href="#" className="text-blue-700"><span className="text-2xl"><FaLinkedin /></span></a>
        </div>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              {services.slice(0, 4).map((service, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-gray-400">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <div>
              <a href="#" className="text-gray-400">Incorporation is a big milestone for business</a>
              <p className="text-gray-600">July. 10, 2024 by Raghav Gupta</p>
            </div>
            <div className="mt-4">
              <a href="#" className="text-gray-400">Incorporation is a big milestone for business</a>
              <p className="text-gray-600">July. 10, 2024 by Raghav Gupta</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Have a Questions?</h3>
            <p className="text-gray-400">203 Jankapuri East New Delhi</p>
            <p className="text-gray-400">+2 392 3929 210</p>
            <p className="text-gray-400">info@yourdomain.com</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 All rights reserved |This Section build by <span className="text-red-500">&hearts;</span> Raghav Gupta</p>
        </div>
      </footer>
    )
}
