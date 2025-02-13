import { Link } from 'react-router-dom'; // Import from react-router-dom

import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Languages from './Languages';
import Location from './Location';
import Tools from './Tools';
import Skills from './Skills';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../../constants/constants';
import myPhoto from '../../../assets/images/myPhoto.jpg';

const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className='headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-60 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4'>
        {/* <img className='w-32 h-32 rounded-full  object-top' src={myPhoto} alt='profile picture' /> */}
        <img src={myPhoto} style={{ width: '100px', height: '100px', borderRadius: '50%' }} alt="profile picture" />

        <div className='flex flex-col items-center justify-center'>
          <span className='text-gray-300 text-base font-bold break-normal'>{NAME}</span>
          <span className='text-sm text-LightGray text-center mt-2'>{DESIGNATION}</span>
        </div>
      </div>

      {/* middle components */}
      <div className='beech z-20 flex flex-col overflow-y-scroll pt-60 top-60 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4'>
        <Location />
        <Languages />
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className='footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow'>
        <a href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
          <FaGithub />
        </a>
        <a href={SOCIAL_LINKS.YOUTUBE} target='_blank' rel='noreferrer' className='text-red-600 hover:text-red-500'>
          <FaYoutube/>
        </a>
        <a href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer' className='text-blue-700 hover:text-blue-500'>
          <FaLinkedin />
        </a>
        {/* <Link href={SOCIAL_LINKS.TWITTER} target='_blank' rel='noreferrer' className=''>
          <FaTwitter />
        </Link> */}
        {/* <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
          <FaFacebook />
        </Link> */}
       
      </div>
    </>
  );
};

export default Intro;
