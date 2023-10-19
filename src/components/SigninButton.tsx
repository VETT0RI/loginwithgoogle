'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

// import { Container } from './styles';

const SigninButton = () => {
  const { data: session } = useSession()
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto item-center">
        <p className="text-sky-600">{session.user.name}</p>
        <Image
          src={session.user.image ?? ''}
          alt={session.user.name ?? ''}
          className="rounded-full"
          width={32}
          height={32}
        />
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    )
  }
  return (
    <button onClick={() => signIn()} className="text-green-500">
      Sign In
    </button>
  )
}

export default SigninButton
