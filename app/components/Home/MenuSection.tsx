import { MenuData } from '@/data/menu-data'
import React from 'react'
import MenuModal from './MenuModal'

const MenuSection = () => {
  return (
    <section className='mb-24 flex flex-col items-center md:justify-center'>
      <div className="text-center">
        <h2 className="text-3xl  leading-tight tracking-tight text-gray-600 sm:text-4xl ">
          Menu
        </h2>
      </div>

      <div className=" mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {MenuData.map((menu) => (
          <MenuModal
            key={menu.id}
            menu={menu}
            // user={user as User}
          />
        ))}
      </div>

    </section>
  )
}

export default MenuSection
