import { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";

const navLink = [
  { path: '/home', display: 'Home' },
  { path: '/doctor', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyHeader);
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className='flex items-center justify-between'>
          <div>
            <img src={logo} alt='' className='w-32 h-auto' />
          </div>

          <div className='hidden md:flex' ref={menuRef}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-cyan-700 text-[25px] leading-7 font-bold '
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:bg-cyan-700 hover:text-white px-3 py-2 rounded transition duration-300'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex items-center gap-4'>
            <div className="hidden">
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} className='w-full rounded-full' alt="" />
                </figure>
              </Link>
            </div>

            <Link to='/login' className='hidden md:block'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                Login
              </button>
            </Link>

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>

      <div className='navigation md:hidden' ref={menuRef}>
        <ul className='menu flex flex-col items-start gap-4'>
          {navLink.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-cyan-700 text-[25px] leading-7 font-bold '
                    : 'text-textColor text-[16px] leading-7 font-[500] hover:bg-cyan-700 hover:text-white px-3 py-2 rounded transition duration-300'
                }
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
