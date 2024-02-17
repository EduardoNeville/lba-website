"use client"
import { Transition } from '@headlessui/react'
import React, { ReactNode } from 'react';
import { InView } from 'react-intersection-observer'

interface FadeInProps {
  delay: number;
  className?: string;
  children: ReactNode;
  x: string;
  y: string;
}

const staggerDelay = 500;

const Animation: React.FC<FadeInProps> = ({ delay, className, children, x, y}) => {
  const realDelay = staggerDelay + delay
  return (
    <InView triggerOnce={true} >
      {({inView, ref}) => (
        <div ref={ref} className={className}>
          <Transition
            show={inView}
            enter={`ease-in duration-[2000ms] transition-all delay-[${realDelay}ms]`}
            enterFrom={`opacity-0 
              ${
                x === 'right' ? 'translate-x-48' : x === 'left' ? '-translate-x-48' : 'translate-x-0'
              } ${
                y === 'down' ? 'translate-y-48' : y === 'up' ? '-translate-y-48' : 'translate-y-0'
              }`}
            enterTo="opacity-100 translate-x-0 translate-y-0"
            leave={`transition-opacity duration-[2000ms] delay-[${realDelay}ms]`}
            leaveFrom="opacity-100"
            leaveTo={`opacity-0 
              ${
                x === 'right' ? '-translate-x-48' : x === 'left' ? 'translate-x-48' : 'translate-x-0'
              } ${
                y === 'down' ? '-translate-y-48' : y === 'up' ? 'translate-y-48' : 'translate-y-0'
              }`}
          >
            {children}
          </Transition>
        </div>
      )}
    </InView>
  )
} 
export default Animation;

