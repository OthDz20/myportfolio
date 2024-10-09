import MaCnss from '../assets/MaCnss.PNG';

const Projects = () => {
    
    return(
        <div className="text-white mt-72 m-52">
            <h1 className="text-5xl">Projects</h1>
            <div className='flex mt-9'>
                <div className='m-4 mt-7'>
                    <h3 className='text-2xl'>Ma CNSS</h3>
                    <div className='mt-3'>
                        Creating Api's For the backend of the website
                    </div>
                </div>
                <img src={MaCnss} alt="MaCnss" className='w-[600px] rounded-xl transform transition-transform duration-700 hover:translate-x-4 cursor-pointer ' />
            </div>
            <div className='flex mt-9'>
            <img src={MaCnss} alt="MaCnss" className='w-[600px] rounded-xl transform transition-transform duration-700 hover:-translate-x-4 cursor-pointer ' />
                <div className='m-4 mt-7'>
                    <h3 className='text-2xl'>Ma CNSS</h3>
                    <div className='mt-3'>
                        Creating Api's For the backend of the website
                    </div>
                </div>
            </div>
            <div className='flex mt-9'>
                <div className='m-4 mt-7'>
                    <h3 className='text-2xl'>Ma CNSS</h3>
                    <div className='mt-3'>
                        Creating Api's For the backend of the website
                    </div>
                </div>
                <img src={MaCnss} alt="MaCnss" className='w-[600px] rounded-xl transform transition-transform duration-700 hover:translate-x-4 cursor-pointer ' />
            </div>
        </div>
    );
}

export default Projects;