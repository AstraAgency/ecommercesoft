'use client'
import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import { authRegister } from '@/api/Request'
import { Input, Button } from '@nextui-org/react'

const Register = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  })

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const userNameAndLastNameInputs = [
    {
      name: 'name',
      label: 'Nombre',
      placeholder: 'Enter your name',
    },
    {
      name: 'lastName',
      label: 'Last name',
      placeholder: 'Enter your last name',
    },
  ]

  const userEmailAndPasswordInputs = [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
    },
  ]

  const handleRegister = async () => {
    try {
      authRegister(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <div className='w-screen h-screen bg-black	flex'>
        <div className='leftlogin w-2/4 bg-gray-300'></div>
        <div className='righthlogin w-2/4 bg-gray-50 flex justify-center items-center'>
          <div className='w-[500px] p-[40px] flex flex-col gap-4 '>
            <h2 className='text-base font-medium'>Sign in</h2>
            <form action='' className='flex flex-col gap-8	'>
              <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
                {userNameAndLastNameInputs.map((item, index) => (
                  <Input
                    key={index}
                    type='text'
                    name={item.name}
                    label={item.label}
                    onChange={(e) => handleChange(e)}
                    placeholder={item.placeholder}
                  />
                ))}
              </div>
              {userEmailAndPasswordInputs.map((item, index) => (
                <Input
                  key={index}
                  name={item.name}
                  type={item.type}
                  label={item.label}
                  onChange={(e) => handleChange(e)}
                  placeholder={item.placeholder}
                />
              ))}
              <Button className='bg-violet-500 text-white' onClick={() => handleRegister()}>
                Registrar cuenta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
