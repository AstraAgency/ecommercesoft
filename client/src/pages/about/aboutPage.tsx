"use client"
import React from 'react'
import { useParams } from 'next/navigation'

export const AboutPage = () => {
  const params = useParams<{ tag: string; item: string }>()

  console.log(params)
  return <div>about</div>
}
