import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PokemonCard = ({ data, id }) => {
  const formattedId = String(id).padStart(3,'0');
  const imageURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`;
 // const imageURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;

  return (
    <div className="pokemon-card-container">
      <Card className="pokemongrid">
        <Card.Img variant="top" src={imageURL} alt={data.name} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Link to={`/pokemons/${id}`}>
            <button className="btn btn-primary">Get Details</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokemonCard;
