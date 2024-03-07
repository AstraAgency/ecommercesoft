'use client'

import React from 'react'
import './landing.scss'
import {
  Input,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { IoIosSearch } from 'react-icons/io'

const Landing = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['text']))

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  )

  const list = [
    {
      title: 'Orange',
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: 'https://images-ext-1.discordapp.net/external/h9KBj4hZC8w-YcRJnCl0g2mIBpDPq6DKHSc_w2otdh4/https/nextui-docs-v2.vercel.app/images/fruit-1.jpeg?format=webp&width=561&height=701',
      price: '$12.20',
    },
  ]
  return (
    <>
      <div className='topsection bg-gradient-to-r from-purple-500 to-pink-500 w-screen	h-96'></div>
      <div className='w-screen  p-[20px] flex justify-center items-center	'>
        <div className='w-4/5 flex items-center justify-between max-w-[1024px]'>
          <div className=''></div>
          <Input
            classNames={{
              base: 'w-[350px]',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder='Type to search...'
            size='sm'
            startContent={<IoIosSearch size={18} />}
            type='search'
          />
          <Dropdown className=''>
            <DropdownTrigger>
              <Button variant='bordered' className='capitalize w-[100px]'>
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label='Single selection example'
              variant='flat'
              disallowEmptySelection
              selectionMode='single'
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key='text'>Text</DropdownItem>
              <DropdownItem key='number'>Number</DropdownItem>
              <DropdownItem key='date'>Date</DropdownItem>
              <DropdownItem key='single_date'>Single Date</DropdownItem>
              <DropdownItem key='iteration'>Iteration</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className='girdCard w-screen flex justify-center'>
        <div className='gap-2 grid grid-cols-2 sm:grid-cols-4 max-w-7xl'>
          {list.map((item, index) => (
            <Card
              shadow='sm'
              key={index}
              className=''
              isPressable
              onPress={() => console.log('item pressed')}
            >
              <CardBody className='overflow-visible p-0'>
                <Image
                  shadow='sm'
                  radius='lg'
                  width='100%'
                  alt={item.title}
                  className='w-full object-cover h-[140px]'
                  src={item.img}
                />
              </CardBody>
              <CardFooter className='text-small justify-between'>
                <b>{item.title}</b>
                <p className='text-default-500'>{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default Landing
