import React, { Component } from 'react';
import TableHeader from './common/tableHeader';

class HeroesCard extends Component {
    columns = [
        { path: "name", label: "Name"},
        { path: "heroType.name", label: "Hero Type"},
        { path: "power", label: "Power"},
        { path: "comicsAppearedIn", label: "Comic Appearences"},
    ]
    render() {
    const { heroes, onDelete, onSort, sortColumn } = this.props;
    return ( 
        <div className="row">
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
            </table>
            { heroes.map(hero => (
                <div key={hero._id}  className="card col-3 g-4">
                    <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{hero.heroType.name} - {hero.power}</h6>
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
}
 
export default HeroesCard;
