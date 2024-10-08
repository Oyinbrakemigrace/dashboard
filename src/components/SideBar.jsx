import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/contextProvider'



function SideBar() {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize, currentColor } = useStateContext()
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleCloseSideBar = () => {
    activeMenu && screenSize <= 900 && setActiveMenu(false)
  }


  return (
    <div className='ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button type='button' onClick={() => { setActiveMenu((prev) => !prev) }} className='text-xl rounded-full p-3 hover:bg-light-gray block md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {
              links.map((link) => {
                return (
                  <div key={link.title}>
                    <p className='text-gray-300 m-3 mt-4 uppercase'>
                      {link.title}
                    </p>
                    {
                      link.links.map((item) => {
                        return (
                          <NavLink
                            to={`/${item.name}`}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ?  currentColor : ''
                            })}
                            key={item.name}
                            onClick={handleCloseSideBar}
                            className={({ isActive }) => isActive ? activeLink : normalLink}
                          >
                            {item.icon}
                            <span className='capitalize'>{item.name}</span>
                          </NavLink>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </>
      )

      }
    </div>
  )
}

export default SideBar