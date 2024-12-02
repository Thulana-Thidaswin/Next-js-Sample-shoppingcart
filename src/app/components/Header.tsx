'use client';
import Link from 'next/link'
import React from 'react'
import CartBtn from './CartBtn';

const Header = () => {
  return (
    <div className="flex p-4 m-auto gap-5 lg:px-0 lg:max-w-[1440px]">
      <div className="">
      <h1 className="hidden">Thulana's Computer Shop</h1>
      <h1 className="lg:hidden">Thulana's</h1>
      </div>
      <div className="">
      <Link href='/products'>Products</Link>
      </div>
      <Link className="ml-auto mr-4" href={"/cart"}>
        <CartBtn />
      </Link>

    </div>
  )
}

export default Header
