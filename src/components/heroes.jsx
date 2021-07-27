import React, { Component } from "react";
import HeroesCard from "./heroesCards";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getHeroes } from "../services/fakeHeroDatabase";
import { getHeroType } from "../services/fakeTypeDatabase";
import { paginate } from "../utils/paginate";
import _ from "lodash"

class Heroes extends Component {
    state = { 
        heroes: [],
        herotypes: [],
        currentPage: 1,
        pageSize: 4,
    };

    componentDidMount() {
        const herotypes = [{type: "All Heroes"}, ...getHeroType()]
        this.setState({ heroes: getHeroes(), herotypes });
    }

    handleDelete = hero =>{
        const heroes = this.state.heroes.filter(h => h._id !== hero._id);
        this.setState({ heroes });
    };

    handlePageChange=(page) => {
        this.setState({ currentPage: page });
    }

    handleHeroTypeSelect = herotype => {
        this.setState({ selectedHeroType: herotype, currentPage: 1 });
    }

    render() { 
        const { length: count } = this.state.heroes;
        const {pageSize, currentPage, selectedHeroType, heroes: allHeroes } = this.state;
        if (count === 0)
            return <h5>There are no heroes/villains in the database.</h5>

        const filtered = 
        selectedHeroType && selectedHeroType._id
        ? allHeroes.filter(h => h.herotype._id === selectedHeroType._id) 
        : allHeroes;

        const heroes = paginate(filtered, currentPage, pageSize);

        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={this.state.herotypes}
                            selectedItem={this.state.selectedHeroType}
                            onItemSelect={this.handleHeroTypeSelect} />
                    </div>
                    <div className="col-3">
                        <h5>Showing {filtered.length} heroes/villains in the database.</h5>
                        <Pagination 
                            itemsCount={filtered.length}
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}/>
                    </div>
                        <HeroesCard
                        heroes={heroes}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        />
                </div>
            </div>
        );
    }
}
 
export default Heroes;