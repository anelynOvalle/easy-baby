import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style =
    router.pathname === href
      ? 'px-3 py-2 rounded-full text-sm font-medium text-white bg-secondary-100'
      : 'px-3 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-white hover:bg-gray-700';

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={style}>
      {children}
    </a>
  );
}
export default function Navbar({ user }) {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-100 ">
        <div className="flex justify-between items-center py-6 md:justify-between">
          <div className="flex-shrink-0">
            <Image
              src="/easy-baby.png"
              alt="Easy Baby"
              width={65}
              height={55}
            />
          </div>
          {user && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <ActiveLink href="/cursos">Cursos</ActiveLink>
                <ActiveLink href="/maternidades">Maternidades</ActiveLink>
              </div>
            </div>
          )}
          {user && (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="flex-shrink-0 mr-2">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.picture}
                    alt={user.name}
                  />
                </div>
                <a
                  href="/api/logout"
                  className="bg-primary-100 p-1 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <svg
                    className="h-8 w-8 p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
          {!user && (
            <a
              href="/api/login"
              className="px-6 py-2 rounded-full text-sm font-medium text-white bg-primary-100"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
