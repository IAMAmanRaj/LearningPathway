import React from 'react'
import { Alert, Button,Card,Select } from 'flowbite-react'
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {setBranch} from "../redux/Branch/branchSlice"
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";
const Home = () => {
    const navigate=useNavigate();
    
    const dispatch=useDispatch();
    
    const currentBranch=useSelector((state) => state.branch.value);
    const { theme } = useSelector((state) => state.theme);
    const [showAlert,setShowAlert]=useState(false);

const [formData,setFormData]=useState({});



    const handleTakeQuizClick = () => {
        
        if (!currentBranch) {
        
          setShowAlert(true);
        
          return;
        }
         
         
        navigate('/interest'); // Navigate to the '/interest' path when the button is clicked
      };
    

      const handleBranchChange=(e)=>{
    
          setFormData({...formData,category:e.target.value});
      setShowAlert(false);
      dispatch(setBranch(e.target.value));
      
        };

  return (
    <>
         
     <div className="container  flex flex-col pt-2 mx-auto h-full">
     <Button
          className="absolute top-4 right-4 w-12 h-10 inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
   <Card className='border-black mt-16 mx-auto max-w-[600px] border-4 '>
    <a href="#">
        <img className="h-[300px] object-cover mx-auto  rounded-b-2xl " src="../images/growtika-PYyPeCHonnc-unsplash.jpg" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Taking the First Step !</h5>
        </a>
        <p className="mb-2  font-semibold text-black dark:text-gray-400">Here is your learning pathway Quiz. Be Specific about your interests and likings. Decide today and Skill Up.</p>
        <p>Choose your Branch</p>
        < Select
       className='py-1'
       value={currentBranch===null? "":currentBranch}
    onChange={handleBranchChange}
        required >
<option value=''>Select a Category</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics and Communication">Electronics and Communication</option>
            <option value="Electrical">Electrical</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Chemical">Chemical</option>
            <option value="Civil">Civil</option>
            <option value="Production and Industrial Engineering">Production and Industrial Engineering</option>
            <option value="Biotechnology">Biotechnology</option>
          </Select>
          {showAlert && <Alert className="my-2" color='failure'>Branch not selected</Alert>}
        <Button className='mt-4  ' onClick={handleTakeQuizClick} gradientDuoTone="cyanToBlue" outline>
            Take Quiz
          </Button>
    </div>

</Card>
<section className="bg-white dark:bg-gray-900">
    <div className=" px-4 py-6 lg:py-6 mx-auto max-w-screen-md text-center  lg:px-12">
        <svg className="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Under Maintenance</h1>
        <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">Our Enterprise administrators are performing scheduled maintenance.</p>
    </div>
</section>


</div>

    </>
  )
}

export default Home