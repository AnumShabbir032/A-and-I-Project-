import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavBar from '../components/NavBar';

import "../App.css"

function Home() {
  return (
    <div className='body-img body-color'>
      {/* CONTACT INFO */}
      <div className="p-4 lg:bg-[#090909] flex justify-between">

        <div className="border border-gray-600 w-[10%] m-x-1">
          <a href="https://www.facebook.com/groupofai/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon sx={{ color: "#b68b03", width: "20%" }} />
          </a>
          <a href="https://www.instagram.com/aigroupofai/?hl=en" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: "#b68b03", width: "20%" }} />
          </a>
          <a href="https://www.youtube.com/c/AIGroupofCompanies" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon sx={{ color: "#b68b03", width: "20%" }} />
          </a>
        </div>

        <div className="border border-gray-600 w-[30%] text-[#b68b03]">
          <span className='font-bold'>0311-222647 | emailto:xyz@gmail.com</span>
        </div>

      </div>
      {/* CONTACT INFO */}

      {/* NAVBAR SECTION */}
      <NavBar />
      {/* NAVBAR SECTION */}

      {/* MAIN BANNER */}
{/* <div className='body-img body-color'>

</div> */}
      {/* MAIN BANNER */}
    </div>
  )
}

export default Home;