import Head from 'next/head'
import Image from 'next/image'

import user from "./../service/user"
import { useState,useEffect } from 'react'

// component
import NavbarHeader from '@/components/guest/navbar/NavbarHeader'
import HeroGuest from '@/components/guest/hero/HeroGuest'
import Section1 from '@/components/guest/section_main_page/Section1'
import Section2 from '@/components/guest/section_main_page/Section2'
import Section3 from '@/components/guest/section_main_page/Section3'

export default function Home() {
  return (
    <>
      <Head>
        <title>njsajkdjsdk</title>
      </Head>
      <main>
        <NavbarHeader />
        <HeroGuest />
        <Section1 />
        <div className="my-32">
          <Section2 />
        </div>
        <Section3 />
      </main>
    </>
  )
}
