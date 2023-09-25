'use client'

import React, { useState } from 'react'
import Pokemon from './pokemon';
import Button from '../Common/Button';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchPokemon(event.target.value);
    }
  };

  const fetchPokemon = async (query: string) => {
    setLoading(true);
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + query.toLowerCase());
    setLoading(false);

    if (!data.ok) {
      setPokemon(false);
      return;
    }

    setPokemon(await data.json());
  }

  return (
    <div className='flex flex-col justify-items-center p-1 rounded'>
      <div className="p-1 rounded flex justify-center">
        <div className='w-1/2 flex'>
          <input
            className="appearance-none border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-full"
            type="search"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
          />
          <Button onClick={() => fetchPokemon(searchTerm)} />
        </div>
      </div>
      <div className='flex justify-center p-1'>
        {loading ? (
          <>Loading...</>
        ) : (
          <div className="flex w-1/2">
            {pokemon ? (
              <>
                <Pokemon pokemon={pokemon} />
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search