import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase , faFileCode, faPowerOff} from '@fortawesome/free-solid-svg-icons';


const Skills = () => {
    return (
        <div className="text-white mt-72 m-52">
            <h1 className="text-5xl">Skills</h1>
            <div className="grid grid-cols-4 gap-4 mt-10 text-3xl">
                {/* React Js */}
                <div className="relative border-white border-2 w-[220px] h-[230px] border-opacity-15 flex items-center justify-center cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/865457032/vector/abstract-futuristic-cyberspace-with-binary-code-matrix-background-with-digits-well-organized.jpg?s=612x612&w=0&k=20&c=IQcdedY8fn_DMq6nwc5MaHUBe0H0d5DPyibHR8J2usk=')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-100"></div>
                    <div className="relative w-40 h-40 rounded-full text-center flex items-center justify-center bg-opacity-65 z-10">
                        React Js
                        <FontAwesomeIcon className='ml-2' icon={faReact} />
                    </div>
                </div>

                {/* Oracle PLSQL */}
                <div className="relative border-white border-2 w-[220px] h-[230px] border-opacity-15 flex items-center justify-center cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/865457032/vector/abstract-futuristic-cyberspace-with-binary-code-matrix-background-with-digits-well-organized.jpg?s=612x612&w=0&k=20&c=IQcdedY8fn_DMq6nwc5MaHUBe0H0d5DPyibHR8J2usk=')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-100"></div>
                    <div className="relative w-40 h-40 rounded-full text-center flex items-center justify-center bg-opacity-65 z-10">
                      Oracle PLSQL
                      <FontAwesomeIcon icon={faDatabase} />
                    </div>
                </div>

                {/* Spring Boot */}
                <div className="relative border-white border-2 w-[220px] h-[230px] border-opacity-15 flex items-center justify-center cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/865457032/vector/abstract-futuristic-cyberspace-with-binary-code-matrix-background-with-digits-well-organized.jpg?s=612x612&w=0&k=20&c=IQcdedY8fn_DMq6nwc5MaHUBe0H0d5DPyibHR8J2usk=')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-100"></div>
                    <div className="relative w-40 h-40 rounded-full text-center flex items-center justify-center bg-opacity-65 z-10">
                      Spring Boot
                      <FontAwesomeIcon className='ml-2' icon={faPowerOff} />
                    </div>
                </div>

                {/* Tailwind */}
                <div className="relative border-white border-2 w-[220px] h-[230px] border-opacity-15 flex items-center justify-center cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/865457032/vector/abstract-futuristic-cyberspace-with-binary-code-matrix-background-with-digits-well-organized.jpg?s=612x612&w=0&k=20&c=IQcdedY8fn_DMq6nwc5MaHUBe0H0d5DPyibHR8J2usk=')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-100"></div>
                    <div className="relative w-40 h-40 rounded-full text-center flex items-center justify-center bg-opacity-65 z-10">
                      Tailwind
                      <FontAwesomeIcon className='ml-2' icon={faFileCode} />
                    </div>
                </div>

                {/* Java */}
                <div className="relative border-white border-2 w-[220px] h-[230px] border-opacity-15 flex items-center justify-center cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/865457032/vector/abstract-futuristic-cyberspace-with-binary-code-matrix-background-with-digits-well-organized.jpg?s=612x612&w=0&k=20&c=IQcdedY8fn_DMq6nwc5MaHUBe0H0d5DPyibHR8J2usk=')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-100"></div>
                    <div className="relative w-40 h-40 rounded-full text-center flex items-center justify-center bg-opacity-65 z-10">
                      Java
                      <FontAwesomeIcon className='ml-2' icon={faJava} />
                    </div>
                </div>

                {/* Selenium */}
                <div className="relative border-white border-2 w-[220px] h-[230px] border-opacity-15 flex items-center justify-center cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/865457032/vector/abstract-futuristic-cyberspace-with-binary-code-matrix-background-with-digits-well-organized.jpg?s=612x612&w=0&k=20&c=IQcdedY8fn_DMq6nwc5MaHUBe0H0d5DPyibHR8J2usk=')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-100"></div>
                    <div className="relative w-40 h-40 rounded-full text-center flex items-center justify-center bg-opacity-65 z-10">
                      Selenium
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
