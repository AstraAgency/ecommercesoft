import React, { useState } from 'react'
import { Listbox, ListboxItem } from '@nextui-org/react'
import { FaToolbox } from 'react-icons/fa'
import { PiTelevisionFill } from 'react-icons/pi'
import { IoIosArrowForward, IoIosMenu } from 'react-icons/io'

interface RightControllersProps {
    menu: boolean;
    handleMenu: () => void;
  }

export default function RightControllers(props: RightControllersProps) {

  return (
    <Listbox
      aria-label='User Menu'
      className={`p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 ${
        props.menu ? 'max-w-[300px]' : 'max-w-[50px]'
      } overflow-visible shadow-small fixed left-0	h-full z-20`}
      itemClasses={{
        base: 'px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80 ',
      }}
    >
      <ListboxItem key='menu' className='flex justify-center' onClick={props.handleMenu}>
        <IoIosMenu />
      </ListboxItem>
      <ListboxItem key='issues' endContent={<IoIosArrowForward />} startContent={<FaToolbox />}>
        Issues
      </ListboxItem>
      <ListboxItem
        endContent={<IoIosArrowForward />}
        key='pull_requests'
        startContent={<PiTelevisionFill />}
      >
        Pull Requests
      </ListboxItem>
      <ListboxItem
        endContent={<IoIosArrowForward />}
        key='discussions'
        startContent={<FaToolbox />}
      >
        Discussions
      </ListboxItem>
      <ListboxItem
        endContent={<IoIosArrowForward />}
        key='actions'
        startContent={<PiTelevisionFill />}
      >
        Actions
      </ListboxItem>
    </Listbox>
  )
}
