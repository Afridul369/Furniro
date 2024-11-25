import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { GoHeart } from 'react-icons/go'
import { BsCart3 } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import NavContainer from './Container'
import Image from './Image'
import NavLogo from '../assets/NavLogo.png'
import Flex from './Flex'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const Nabvar = () => {
  return (
    <>
    <div className="py-8 ">
        <div className='max-w-NavContainer mx-auto'>
            <Flex className=" items-center justify-between">
                <div className="">
                    <Link to={'/'}><Image imgSrc={NavLogo} imgAlt={'navlogo'}/></Link>
                </div>
                <div className="text-base text-black font-Pop font-medium ">
                    <ul className={'flex gap-x-16 '}>
                        <Link to={'/'}><Menu menuname="Home" /></Link>
                        <Link to={'/shop'}><Menu menuname="Shop" /></Link>
                        <Link to={''}><Menu menuname="About" /></Link>
                        <Link to={''}><Menu menuname="Contact" /></Link>
                        
                    </ul>
                </div>
                <div className=" ">
               <Flex className={'items-center gap-x-12'}>
                <FaRegUser className='text-xl'/>
                 <CiSearch className='text-3xl'/>
                <GoHeart className='text-2xl'/>
                <BsCart3 className='text-2xl'/>

               </Flex>

                </div>
            </Flex>
        </div>
    </div>
    </>
  )
}

export default Nabvar