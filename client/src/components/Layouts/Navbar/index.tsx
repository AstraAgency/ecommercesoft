'use client'
import React from 'react'
import { setMyUser } from '@/features/userSlice'
import { SearchIcon } from './SearchIcon'
import { useDispatch } from 'react-redux'
import { NavbarUserOptions } from './NavbarUserOptions'
import { authLoadProfileByToken } from '@/api/Request'
import { Link, Input, Navbar, NavbarItem, NavbarBrand, NavbarContent } from '@nextui-org/react'

const EcommerceNavbar = () => {
  let token: unknown = null

  const dispatch = useDispatch()

  React.useEffect(() => {
    token = localStorage.getItem('token')
  }, [])

  React.useEffect(() => {
    const loadProfile = async () => {
      try {
        if (token) {
          const response = await authLoadProfileByToken(token)
          dispatch(setMyUser(response.data))
        }
      } catch (error) {
        console.log(error)
      }
    }
    loadProfile()
  }, [token])

  const navbarSections = [
    {
      name: 'Features',
      path: '',
      isActive: true,
    },
    {
      name: 'Customers',
      path: '',
      isActive: true,
    },
    {
      name: 'Integrations',
      path: '',
      isActive: true,
    },
  ]

  return (
    <Navbar isBordered className='absolute fixed 	'>

      <NavbarContent justify='start'>
        <NavbarBrand className='mr-4'>
          <p className='hidden sm:block font-bold text-inherit'>ACME</p>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-3'>
          {navbarSections.map((item, index) => (
            <NavbarItem key={index}>
              <Link color='foreground' href={item.path}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as='div' className='items-center' justify='end'>
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={<SearchIcon size={18} />}
          type='search'
        />
      </NavbarContent>
      <NavbarUserOptions />
    </Navbar>
  )
}

export default EcommerceNavbar
