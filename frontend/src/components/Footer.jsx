import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
            <p>Made by Tapan © All Rights Reserved 2025.</p>

            <div className='flex items-center gap-4 justify-center text-2xl'>
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
    </footer>
  )
}

export default Footer
