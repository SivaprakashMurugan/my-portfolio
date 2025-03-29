import Link from 'next/link';
const Download = ({ icon }) => {
  return (
    <>
      <Link href='https://drive.google.com/file/d/1T4cjIS7ue2Qqr7BqcY-ImlrW9FcyLl-Q/view?pli=1' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
