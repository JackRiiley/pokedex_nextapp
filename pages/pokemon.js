import React from 'react'
import Head from 'next/head'
import PokemonCard from "../components/PokemonCard"
import NavBar from '@/components/NavBar'
import SearchBar from '../components/SearchBar';
import { useState } from 'react'

export default function pokemon({data}) {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredData(data);
    } else {
      const filteredResults = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  };

  return (
    <>
    <Head>
        <title>Pokemon List</title>
        <meta name="description" content="List of all pokemon throughout the series" />
    </Head>
    <NavBar />
    <div className='bg-gray-100'>
    <h1 className='text-6xl text-center my-2 p-3'>List of all Pokemon</h1>
    <SearchBar onSearch={handleSearch} />
    <div className="grid grid-cols-2 grid-flow-row gap-4 lg:grid grid-cols-6 grid-flow-row gap-4 ">
      {filteredData.map (p => (
          <PokemonCard key={p.id} pokemon={p} />
      ) ) }
    </div>
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.NEXT_API_URL}/pokemon-with-stats`)
  const data = await response.json()
  console.log("data", data)
  if(data.length === 0) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      data
    } 
  }
}
