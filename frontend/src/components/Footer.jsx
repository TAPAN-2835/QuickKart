import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 mt-8">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700 items-start">
        {/* Company Info */}
        <div>
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="QuickKart Logo" className="w-32 h-auto object-contain" />
          </div>
          <p className="mb-4 text-center">Your one-stop shop for groceries and essentials, delivered fast and fresh to your doorstep.</p>
          <div className="flex gap-3 text-xl mt-2 justify-center">
            <a href='https://github.com/PatelTapan7032' target='_blank' rel='noopener noreferrer' className='hover:text-primary-100 transition-colors'>
              <FaGithub/>
            </a>
            <a href='https://x.com/PatelTapan7032?t=te5oHww2W4Q5T2g9D2lTjg&s=09' target='_blank' rel='noopener noreferrer' className='hover:text-primary-100 transition-colors'>
              <FaXTwitter/>
            </a>
            <a href='https://www.instagram.com/charming_tapan/' target='_blank' rel='noopener noreferrer' className='hover:text-primary-100 transition-colors'>
              <FaInstagram/>
            </a>
            <a href='https://www.linkedin.com/in/tapan-patel-b91241288/' target='_blank' rel='noopener noreferrer' className='hover:text-primary-100 transition-colors'>
              <FaLinkedin/>
            </a>
          </div>
        </div>
        {/* Footer Links Row */}
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Company</h3>
          <ul className="space-y-1 text-xs">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Support</h3>
          <ul className="space-y-1 text-xs">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Shipping Info</a></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Legal</h3>
          <ul className="space-y-1 text-xs">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t text-center text-xs text-gray-500 py-4 bg-gray-50"> Made By Tapan
        © {new Date().getFullYear()} QuickKart. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
