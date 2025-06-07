import React from 'react'
import HeadingWithBottomBorder from '../../components/HeadingWithBottomBorder'
import Categories from '../../components/Categories'
import SearchComponent from './SearchComponent'

function ProductSearchComponent() {
  return (
    <section className='container mx-auto min-h-screen h-auto py-10 flex justify-start items-center flex-col'>
        <HeadingWithBottomBorder heading={'Search Projects'}></HeadingWithBottomBorder>
        <SearchComponent></SearchComponent>
        <Categories></Categories>
    </section>
  )
}

export default ProductSearchComponent