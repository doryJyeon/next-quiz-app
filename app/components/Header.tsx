'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline"
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const routes = [
    { title: 'Info', path: '/' },
    { title: 'Programming', path: '/programming' },
    { title: 'Category', path: '/category' },
    { title: 'Tags', path: '/tags' },
  ]

  return (
    <header className="shadow-lg">
      {/* mobile */}
      <div
        className={`
        fixed lg:hidden transition-all z-20 duration-300 
        ${open ? "right-0" : "-right-64"} p-4 bg-emerald-500 h-screen w-64
        `}>
        <XCircleIcon
          className={`w-8 h-8 stroke-slate-50 mb-4`}
          stroke="2"
          onClick={() => setOpen(false)}
        />
        <div
          className="flex flex-col space-y-4"
          onClick={() => setOpen(false)}
        >
          {routes.map((route) => (
            <Link
              className={`
                px-6 py-2 text-slate-100 rounded bg-emerald-700
                ${pathname === route.path && "bg-emerald-900"}
                `}
              href={route.path}
              key={route.path}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>

      {/* pc */}
      <div className="flex justify-between items-center px-6 py-4 bg-emerald-600">
        <div
          className={`text-slate-50 text-xl sm:text-4xl lg:text-2xl xl:text-4xl font-bold`}
        >
          Quiz App
        </div>

        <nav className={"space-x-6 hidden lg:flex"}>
          {routes.map((route) => (
            <Link
              className={`
                px-6 py-2 text-slate-100 rounded bg-emerald-700
                ${pathname === route.path && "bg-emerald-900"}
                `}
              href={route.path}
              key={route.path}
            >
              {route.title}
            </Link>
          ))}
        </nav>
        <Bars3Icon
          onClick={() => setOpen(!open)}
          className={"lg:hidden stroke-indigo-50 w-6 h-6"}
        />
      </div>
    </header>
  )
}

export default Header