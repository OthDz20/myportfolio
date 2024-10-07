import React from 'react';
import Typical from 'react-typical';
import { Button } from "@material-tailwind/react";


const Main = () => {
    return(
        <div className='text-white text-center mt-40'>
            <h3>Hello i'm othmane a passionate software Engineer.</h3>
            <Typical
            steps={['<h1>Back End Developper, Spring boot!</h1>',3000, '', 3000]}
            loop={Infinity}
            wrapper="h1"
            className = 'text-5xl mt-5 text-lime-100'
            />  
            <div className='mt-12'>
              <Button className='bg-white text-black p-2 rounded-xl w-36 m-2 hover:bg-gray-300 transition delay-200'>
                  Contact Me
              </Button>
              <Button className='bg-gray-600 text-white p-2 rounded-xl w-36 m-2 hover:bg-gray-700 transition delay-200'>
                  Download CV
              </Button>
            </div>
        </div>
    );
}

export default Main;