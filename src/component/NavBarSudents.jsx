import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link } from 'react-router';
import { FaGraduationCap } from "react-icons/fa6";

function NavBarSudents() {
 const isLoggedIn = localStorage.getItem('isLoggedIn');

  const navigation = [{ name: 'Home', to: '/studentHome', current: true }];
  if (!isLoggedIn) {
    navigation.push({ name: 'Sign In', to: '/signIn', current: false });
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <GiHamburgerMenu
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <MdOutlineCancelPresentation
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
                       <FaGraduationCap
                       className='text-white h-8 w-auto' />
              {/* <Link to="">
                <img
                  src="/nav.png"
                  className="h-8 w-auto"
                  alt=""
                />
              </Link> */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white absolute right-15',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                  
                ))}
              </div>
              
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                    className="size-10 rounded-full object-cover"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <Link
                    to="/userProfile/${matchedUser.id}"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link 
                  to="/SignIn"
                    onClick={() => {
                      localStorage.removeItem('isLoggedIn');
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
  
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
export default NavBarSudents;