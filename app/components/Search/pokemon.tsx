import React from 'react'

interface Pokemon {
    title: string;
    sprites: {
        front_default: string,
        other: {
            home: {
                front_default: string
            }
        }
    };
    name: string;
    height: number
    weight: number
}

export default function Pokemon({pokemon}: {pokemon: Pokemon}) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <img className="w-full" src={pokemon?.sprites?.other.home.front_default} alt={pokemon?.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{pokemon?.name}</div>
                <p className="text-gray-700 text-base">
                    Height: {pokemon?.height} | Weight: {pokemon?.weight}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Type: {pokemon?.types?.[0]?.type?.name}</span>
            </div>
        </div>
    )
}
