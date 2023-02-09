import { Link } from '@inertiajs/react';
import React from 'react'

export default function Header({ user }) {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-end px-28 dark:text-white">
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1">{user.name}</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href={route('logout')} method="post">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer fixed dark:text-white w-60 z-[100]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content fixed top-2 left-20 ">
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button font-bold text-lg ">Gudang Tani</label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          {
            
                user.roles[0].name == 'admin' ?
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link href={route('index')}>Dashboard</Link></li>
                    <li><Link href={route('warehouse.index')}>Warehouse</Link></li>
                    <li><Link href={route('activity.index')}>Activity Storage</Link></li>
                    <li><Link href={route('item.index')}>Items List</Link></li>
                </ul>
                :
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link href={route('dashboard')}>Dashboard</Link></li>
                    <li><Link href={route('crew.warehouse')}>Warehouse</Link></li>
                    <li><Link href={route('crew.activity')}>Activity Storage</Link></li>
                    <li><Link href={route('crew.item')}>Items List</Link></li>
                </ul>
            }
        </div>
      </div>
    </>
  )
}
