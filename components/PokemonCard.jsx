    import React, { useState, useEffect  } from 'react'

    const PokemonCard = ({ pokemon }) => {
        const [showStats, setShowStats] = useState(false);

        const toggleStats = () => {
            setShowStats(!showStats);
        };

        return (
            <div className="pokemon-card p-4 border border-gray-300 rounded shadow">
                <h1>{pokemon.name  }</h1>
                <h2>#{pokemon.number}</h2>
                <p className="text-gray-500">Type 1: {pokemon.type1}</p>
                <p className="text-gray-500">Type 2: {pokemon.type2}</p>
                <p className="text-gray-500">Generation: {pokemon.generation}</p>
                <p className="text-gray-500">Legendary: {pokemon.legendary ? 'Yes' : 'No'}</p>
            {/* Stats Section */}
                <button onClick={toggleStats} className="text-blue-500">
                    {showStats ? 'Hide Stats' : 'Show Stats'}
                </button>
                {showStats && (
                <div className="mt-4 border-t border-gray-300 pt-4">
                <p className="text-gray-500 font-semibold">Stats</p>
                <ul className="text-gray-700 list-disc pl-6">
                    <li>HP: {pokemon.stats.hp}</li>
                    <li>Attack: {pokemon.stats.attack}</li>
                    <li>Defense: {pokemon.stats.defense}</li>
                    <li>Sp. Attack: {pokemon.stats.sp_atk}</li>
                    <li>Sp. Defense: {pokemon.stats.sp_def}</li>
                    <li>Speed: {pokemon.stats.speed}</li>
                    <li>Total: {pokemon.stats.total}</li>
                </ul>
            </div>
            )}
        </div>
    );
    };
    
    export default PokemonCard;