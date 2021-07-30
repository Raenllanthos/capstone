import React, { Component } from "react";
import HeroesCard from "./heroesCards";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import SearchBox from "./common/searchbox"
import { Link } from "react-router-dom";
import { getHeroes, deleteHero } from "../services/fakeHeroDatabase";
import { getHeroType } from "../services/fakeTypeDatabase";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Heroes extends Component {
    state = { 
        heroes: [],
        heroTypes: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedHeroType: null,
        sortColumn: {path: "title", order: "asc"}
    };

    componentDidMount() {
        const heroTypes = [{_id: "", name: "All Heroes"}, ...getHeroType()]
        this.setState({ heroes: getHeroes(), heroTypes });
    }

    handleDelete = hero =>{
        const heroes = this.state.heroes.filter(h => h._id !== hero._id);
        this.setState({ heroes });

        deleteHero(hero._id);
    };

    handlePageChange=(page) => {
        this.setState({ currentPage: page });
    }

    handleHeroTypeSelect = heroType => {
        this.setState({ selectedHeroType: heroType, searchQuery: "", currentPage: 1 });
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedHeroType: null, currentPage: 1})
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    getPagedData = () => {
        const { 
            pageSize, 
            currentPage,
            sortColumn,
            searchQuery, 
            selectedHeroType, 
            heroes: allHeroes
        } = this.state;

        let filtered = allHeroes;
        if (searchQuery)
            filtered = allHeroes.filter(m =>
                m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedHeroType && selectedHeroType._id)
            filtered = allHeroes.filter(h => h.heroType._id === selectedHeroType._id)
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const heroes = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: heroes }
    }

    render() { 
        const { length: count } = this.state.heroes;
        const { pageSize, currentPage, sortColumn, heroTypes, selectedHeroType } = this.state;
        
        if (count === 0) return <p>There are no movies in the database.</p>

        const { totalCount, searchQuery, data: heroes } = this.getPagedData();

        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={heroTypes}
                            selectedItem={selectedHeroType}
                            onItemSelect={this.handleHeroTypeSelect} />
                    </div>
                    <div className="col-3">
                        <Link to="/heroes/new"
                            className="btn btn-primary"
                            style={{ marginBottom: 20 }} 
                            > New Hero
                        </Link>
                        <h5>Showing {totalCount} heroes/villains in the database.</h5>
                        <SearchBox value={searchQuery} onChange={this.handleSearch} />
                        <Pagination 
                            itemsCount={totalCount}
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}/>
                    </div>
                        <HeroesCard
                        heroes={heroes}
                        sortColumn={sortColumn}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                        />
                </div>
            </div>
        );
    }
}
 
export default Heroes;