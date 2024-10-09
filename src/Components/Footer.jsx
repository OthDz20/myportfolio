import me from '../assets/me.jpeg';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return(
        <div className="flex">
            <div className='flex h-[350px] w-[50%]'>
                <img src={me} className=' w-[350px]' />
                <div className='bg-costumBlue'>
                        <h1 className='bg-transparent text-2xl ml-7 mt-7'>about</h1>
                         <p className='bg-costumBlue ml-7 mt-3'>Hey, I'm Othmane! I'm in my last year studying Software Engineering at Estem Casablanca. As a Full Stack Developer, I focus on building innovative solutions with a strong design mindset.</p>
                         <p className='bg-costumBlue ml-7 mt-3'>I am currently looking for full-time opportunities in software development.</p>
                        <button type="button" className="ml-7 mt-4 text-black bg-white hover:bg-black hover:text-white focus:ring-4 focus:ring-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                          View Resume
                        </button>
                    </div>
                </div>
                <div className='bg-black h-[350px] w-[50%] text-white'>
                <h1 className='bg-transparent text-2xl ml-7 mt-7'>Contact</h1>
                <p  className='ml-7 mt-7'>The best stories are told in person. Let's grab coffee and chat!</p>
                <div>
                    <ul className='ml-14 mt-9'>
                        <li><a className='hover:text-costumBlue' href="#"><FontAwesomeIcon icon={faEnvelope} className='mr-4'/> Othmanederaza@gmail.com</a></li>
                        <li className='mt-4'><a className='hover:text-costumBlue' href="#"><FontAwesomeIcon icon={faLinkedin} className='mr-5' />www.linkedin.com/in/othmane-deraza-44a0201a3</a></li>
                    </ul>
                </div>
                </div>
            <div>

            </div>
        </div>
    );
}

export default Footer;