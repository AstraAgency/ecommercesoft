'use client'

import { Input, Chip } from '@nextui-org/react'
import React, { useState } from 'react'

import RightControllers from './rightControllers'
import Image from 'next/image'
import './landing.scss'

const Landing = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['text']))

  const list = [
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
    {
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.50',
      title: 'Orange',
      rating: '4.5 star rating',
    },
  ]

  const [menu, setMenu] = useState(false) // Estado del menú
  const handleMenu = () => {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <>
      {/* <div className='topsection bg-gradient-to-r from-purple-500 to-pink-500 w-screen	h-96'></div> */}
      <div className=' flex justify-center '>
        <RightControllers menu={menu} handleMenu={handleMenu} />
        <div className={`w-full  pl-5 pr-5 pt-2  ${menu ? 'ml-[300px]' : 'ml-[50px]'} `}>
          <Input type='email' label='Search a product' className='mb-5' />
          <div className='flex flex-wrap gap-3 sm:gap-1 '>
            <Chip size='md' className='bg-[#f4f4f5] cursor-pointer'>
              $0 - $25
            </Chip>
            <Chip size='md' className='bg-[#f4f4f5] cursor-pointer'>
              $25 - $50
            </Chip>
            <Chip size='md' className='bg-[#f4f4f5] cursor-pointer'>
              $50 - $100
            </Chip>
            <Chip size='md' className='bg-[#f4f4f5] cursor-pointer'>
              More than $100
            </Chip>
            <Chip size='md' className='bg-[#f4f4f5] cursor-pointer'>
              Rating: 4+
            </Chip>
          </div>
          <div className='grid justify-center items-center 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-4 flex'>
            {list.map((ele, ind) => (
              <div key={ind} className='w-[100%] flex justify-center	items-center	 flex-col'>
                <Image className='rounded-2xl' src={ele.img} alt='' width={168} height={150} />
                <div className='flex flex-col gap-1 mt-2'>
                  <span className='font-bold h-5'>{ele.price}</span>
                  <span className='text-[#8A7061] h-5'>{ele.title}</span>
                  <span className='text-[#8A7061] h-5'>{ele.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
