'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import NavbarModal from '@/components/NavbarModal';
import { cn } from '@/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  // FIX FOR VH ON MOBILE

  useEffect(() => {
    const changeVhVariable = () => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      const vh = typeof window !== 'undefined' && window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      typeof document !== 'undefined' &&
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // biome-ignore lint/suspicious/noConsoleLog: Just a message
    console.log('Hey! Hope you enjoy 😀 - MATT');
    changeVhVariable();
  }, []);
  return (
    <>
      <div className={'bg-white dark:bg-matt-darknav select-none min-h-full '}>
        {open ? <NavbarModal setOpen={setOpen} open={open} /> : null}
        <Navbar open={open} setOpen={setOpen} />

        <main
          className={cn(
            'flex-1 transition-opacity ',
            open ? 'opacity-0' : 'delay-300 duration-1000 opacity-100'
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
}
