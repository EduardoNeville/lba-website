"use client"
import { Transition } from '@headlessui/react'
import React, { ReactNode } from 'react';

interface FadeInProps {
  className?: string;
  delay: string;
  children: ReactNode;
  x: string;
  y: string;
}

const staggerDelay = 600;

const FadeIn: React.FC<FadeInProps> = ({ className, delay, children, x, y}) => {
  return (
    <Transition.Child
      className={className}
      enter={`ease-in duration-[2000ms] transition-all ${delay}`}
      enterFrom={`opacity-0 
        ${
          x === 'right' ? 'translate-x-48' : x === 'left' ? '-translate-x-48' : 'translate-x-0'
        } ${
          y === 'down' ? 'translate-y-48' : y === 'up' ? '-translate-y-48' : 'translate-y-0'
        }`}
      enterTo="opacity-100 translate-x-0 translate-y-0"
      leave={`transition-opacity duration-[2000ms]`}
      leaveFrom="opacity-100"
      leaveTo={`opacity-0 
        ${
          x === 'right' ? '-translate-x-48' : x === 'left' ? 'translate-x-48' : 'translate-x-0'
        } ${
          y === 'down' ? '-translate-y-48' : y === 'up' ? 'translate-y-48' : 'translate-y-0'
        }`}
    >
      {children}
    </Transition.Child>
  )
} 
export default FadeIn;
