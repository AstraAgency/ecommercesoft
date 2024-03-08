'use client'
import React from 'react'
import { authLogin } from '@/api/Request'
import { Input, Button } from '@nextui-org/react'
import EcommerceNavbar from '@/components/Layouts/Navbar'

const Login = () => {
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

  const inputs = [
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

  const handleLogin = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await authLogin(data)
      const tokenRes = response.data

      if (!token) {
        localStorage.setItem('token', tokenRes)
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <EcommerceNavbar />
      <div className='w-screen h-screen bg-black	flex'>
        <div className='leftlogin w-2/4 bg-gray-300'></div>
        <div className='righthlogin w-2/4 bg-gray-50 flex justify-center items-center'>
          <div className='w-[500px] p-[40px] flex flex-col gap-4 '>
            <h2 className='text-base font-medium'>Sign in</h2>
            <form action='' className='flex flex-col gap-8	'>
              {inputs.map((item, index) => (
                <Input
                  key={index}
                  type={item.type}
                  name={item.name}
                  label={item.label}
                  onChange={(e) => handleChange(e)}
                  placeholder={item.placeholder}
                />
              ))}
              <Button className='bg-violet-500 text-white' onClick={() => handleLogin()}>
                Iniciar Sesion
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
