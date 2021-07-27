import React from 'react';

const HeroesCard = (props) => {
    const { heroes, onDelete } = props;
    return ( 
        <div className="row">
            { heroes.map(hero => (
                    <div key={hero.id}  className="card col-3 g-4">
                        <div className="card-body">
                            <h5 className="card-title">{hero.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{hero.herotype.type} - {hero.power}</h6>
                            <p className="card-text">{hero.description}</p>
                            <p className="card-text">{hero.backStory}</p>
                            <p className="card-text">Comic Appearences: {hero.comicsAppearedIn}</p>
                            <div className="text-end">
                                <button onClick={() => onDelete(hero)} className="btn btn-danger btn-sm m-2">Delete</button>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
     );
}
 
export default HeroesCard;
