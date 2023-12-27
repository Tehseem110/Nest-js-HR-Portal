'use client';
import React, { useState } from 'react';
import RootLayout from '@/app/layout';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Nav = ({}) => {
  const [sideBar, showSidebar] = useState(false);

  const params = usePathname();

  return (
    <>
      <main
        style={{ zIndex: 1000 }}
        className={`fixed top-0 left-0 ${
          params === '/login' ? 'hidden' : 'block'
        }`}
      >
        <nav className={`relative bg-purple-500 w-[100vw] p-4 shadow-md `}>
          <div onClick={() => showSidebar(!sideBar)} className='p-3'>
            <button
              style={{ height: '2px', marginBottom: '-1px' }}
              className={`block bg-slate-200 w-7  ${
                sideBar ? 'transform rotate-45' : ''
              } duration-300`}
            ></button>
            <button
              style={{ height: '2px' }}
              className={`block bg-slate-200 w-7  ${
                sideBar ? 'transform -rotate-45' : ''
              } duration-300 ${sideBar ? 'mt-0' : 'mt-2'}`}
            ></button>
          </div>

          <aside
            className={`absolute bg-purple-400 ${
              sideBar ? 'left-0' : 'left-[-30rem]'
            } top-16 h-[92vh] w-[70vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] transition-all`}
          >
            <h2>Hello i am aside</h2>
          </aside>
        </nav>
      </main>
    </>
  );
};

export default Nav;
