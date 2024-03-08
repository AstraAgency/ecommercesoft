'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { Avatar, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from '@nextui-org/react'

export const NavbarUserOptions = () => {
  const router = useRouter()
  const user = useSelector((state: any) => state.user)

  const logOut = () => {
    const token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }

  const menuItems = ['Profile', 'Dashboard', 'My Settings']

  if (user !== null) {
    return (
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
          <Avatar
            isBordered
            as='button'
            className='transition-transform'
            color='secondary'
            name='Jason Hughes'
            size='sm'
            src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
          />
        </DropdownTrigger>
        <DropdownMenu aria-label='Profile Actions' variant='flat'>
          <DropdownItem key='profile' className='h-14 gap-2'>
            <p className='font-semibold'>Signed in as</p>
            <p className='font-semibold'>{user?.email}</p>
          </DropdownItem>
          {menuItems.map((item, index) => (
            <DropdownItem key={index}>{item}</DropdownItem>
          ))}
          {user && (
            <DropdownItem key='logout' color='danger' onClick={() => logOut()}>
              Log Out
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    )
  } else {
    return (
      <Avatar
        as='button'
        size='sm'
        color='secondary'
        onClick={() => router.push('/login')}
        className='transition-transform'
        isBordered
      />
    )
  }
}
