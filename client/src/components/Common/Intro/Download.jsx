// import { Link } from 'react-router-dom'; // Import from react-router-dom
// import resume from '../../../assets/osamajavaid-resume.pdf';
// const Download = ({ icon }) => {
//   return (
//     <>
//       <Link href={resume} target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
//         <span className='text-Snow'>Download Resume</span>
//         <span>{icon}</span>
//       </Link>
//     </>
//   );
// };

// export default Download;


import resume from '../../../assets/Muhammad-Bilal-Hussain-CV.pdf';

const Download = ({ icon }) => {
  return (
    <a href={resume} target="_blank" rel="noopener noreferrer" className="flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4">
      <span className="text-Snow">Download Resume</span>
      <span>{icon}</span>
    </a>
  );
};

export default Download;
