// components/layout.js
import React from 'react'
import Footer from '../components/Footer';

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <>
      <main>{children}</main>
			<Footer />
    </>
  )
}
