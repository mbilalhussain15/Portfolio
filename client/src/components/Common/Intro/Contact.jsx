import React from 'react';
import { CONTACTS } from '../../../constants/constants';
import { Link } from 'react-router-dom'; // Import from react-router-dom

const Contact = () => {
  return (
    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Email Address</span>
        <Link className='text-xs text-gray-400' to={`mailto:${CONTACTS.EMAIL}`}>
          {CONTACTS.EMAIL}
        </Link>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Phone</span>
        <span className='text-xs text-gray-400'>{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contact;
