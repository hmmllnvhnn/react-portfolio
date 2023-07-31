import { AiFillHome } from '/node_modules/react-icons/ai';
import { FaUserAlt } from '/node_modules/react-icons/fa';
import { RiBriefcase4Fill } from '/node_modules/react-icons/ri';
import { MdMail } from '/node_modules/react-icons/md';
import './Header.css'

const Sidenav = () => {

    return (
        <div>
            <div className='sideNav'>
                <div className='sideNavAlign'>
                    <a
                        href='#home'
                        className='iconsNav'
                    >
                        <AiFillHome size={25} />
                    </a>
                    <a
                        href='#about'
                        className='iconsNav'
                    >
                        <FaUserAlt size={25} />
                    </a>
                    <a
                        href='#projects'
                        className='iconsNav'
                    >
                        <RiBriefcase4Fill size={25} />
                    </a>
                    <a
                        href='#contact'
                        className='iconsNav'
                    >
                        <MdMail size={25} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
