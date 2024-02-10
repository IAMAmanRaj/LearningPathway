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
   
    
    <div className="relative h-56  sm:h-64 xl:h-80 2xl:h-96">
    <Button
          className="absolute z-10 top-4 right-4 w-12 h-10 inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      <Carousel className='mb-12 pt-16 h-[120%] px-2' pauseOnHover slide={false} >

        <div className=" flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          
          <div>
            
            <h1 className='text-5xl font-semibold'>
          
              Are you serious about your branch ?.
  <div className="flex flex-wrap gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to Blue
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to Yellow
      </Button>
    </div>
            </h1>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
      <Timeline horizontal className='my-8 mx-2 rounded-lg px-4 py-4  dark:bg-gray-700 dark:text-white"'>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>February 2022</TimelineTime>
          <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </TimelineBody>
          <Button color="gray">
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