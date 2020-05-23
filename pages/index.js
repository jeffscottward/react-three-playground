// REACT & NEXT
import React, {useState} from 'react'
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useStateValue } from '../state/state'

const delayTime = 4;
const SignInArea = dynamic(() => import('../components/SignInArea'), { ssr: false })

const Index = () => {
  const [{ dapp }, dispatch] = useStateValue()
  return (
    <Layout>
      
    </Layout>
  )
}

export default Index
