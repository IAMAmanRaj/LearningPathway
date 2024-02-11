import React from 'react'
import { Carousel } from 'flowbite-react';
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";
import {useDispatch,useSelector} from 'react-redux';


const Interest = () => {
  const dispatch=useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
   
    
    <div className="container flex flex-col gap-4 sm:gap-20 sm:p-8 mx-auto h-screen overflow-hidden">
    <Button
          className="absolute z-10 top-2 right-4 w-12 h-10 inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      <Carousel className=' sm:h-[380px] lg:h-[480px] xl:h-[560px] 2xl:h-[640px] px-2' pauseOnHover slide={false} >

        <div className="container flex flex-col items-center  justify-center rounded-3xl h-[100%] px-4 pt-4 mt-4 gap-12 md:gap-28 bg-gray-400 dark:bg-gray-700 dark:text-white">
          
         
            
            <h1 className=' text-4xl lg:text-5xl font-bold '>
          
              Are you serious about your branch ?.
              </h1>
  <div className='flex mb-12 gap-28 sm:gap-8 md:gap-12'>
      <Button className='' outline gradientDuoTone="purpleToBlue">
       <span className='text-lg w-16'>Yes</span> 
      </Button>
      <Button outline gradientDuoTone="redToYellow">
      <span className='text-lg w-16'>No</span> 
      </Button>
      </div>
          
         
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl  h-[100%] mt-4 gap-28  px-4 bg-gray-400 dark:bg-gray-700 dark:text-white">
          
        <h1 className='text-4xl lg:text-5xl font-bold '>
          
          Do you know the subjects in  ?.
          </h1>
<div className='flex gap-12'>
  <Button className='' outline gradientDuoTone="purpleToBlue">
   <span className='text-lg w-16'>Yes</span> 
  </Button>
  <Button outline gradientDuoTone="redToYellow">
  <span className='text-lg w-16'>No</span> 
  </Button>
  </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl  h-[100%] mt-4 gap-28  px-4 bg-gray-400 dark:bg-gray-700 dark:text-white">
          
        <h1 className='text-4xl lg:text-5xl font-bold '>
          
          Do you know the subjects in  ?.
          </h1>
<div className='flex gap-12'>
  <Button className='' outline gradientDuoTone="purpleToBlue">
   <span className='text-lg w-16'>Yes</span> 
  </Button>
  <Button outline gradientDuoTone="redToYellow">
  <span className='text-lg w-16'>No</span> 
  </Button>
  </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl  h-[100%] mt-4 gap-28  px-4 bg-gray-400 dark:bg-gray-700 dark:text-white">
          
        <h1 className='text-4xl lg:text-5xl font-bold '>
          
          Do you know the subjects in  ?.
          </h1>
<div className='flex gap-12'>
  <Button className='' outline gradientDuoTone="purpleToBlue">
   <span className='text-lg w-16'>Yes</span> 
  </Button>
  <Button outline gradientDuoTone="redToYellow">
  <span className='text-lg w-16'>No</span> 
  </Button>
  </div>
        </div>
        
      </Carousel>
      <Timeline horizontal className='  rounded-lg p-3  dark:bg-gray-700 dark:text-white'>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>February 2022</TimelineTime>
          <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </TimelineBody>
          <Button color="gray" outline>
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>March 2022</TimelineTime>
          <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
          <TimelineBody>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>April 2022</TimelineTime>
          <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    
    </>
  


  )
}

export default Interest