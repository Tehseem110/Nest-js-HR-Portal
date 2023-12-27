import React from 'react';
import Stepper from '@/components/Stepper';

const steps = [
  {
    step: 'personal Details',
  },
  {
    step: 'Education Qualifications',
  },
  {
    step: 'Office Details',
  },
];

const page: React.FC = () => {
  return (
    <div className='mt-20 w-[100vw] '>
      <Stepper step={steps} />
    </div>
  );
};

export default page;
