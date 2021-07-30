import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getHero, saveHero } from '../services/fakeHeroDatabase';
import { getHeroType } from '../services/fakeTypeDatabase';

class HeroForm extends Form {
    state = {
        data: {
            name: "",
            heroTypeId: "",
            power: "",
            comicsAppearedIn: "",
            description: "",
            backStory: "",
        },
        heroTypes: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        name: Joi.string().required().label("Hero Name"),
        heroTypeId: Joi.string().required().label("Hero Type"),
        power: Joi.string().required().label("Power"),
        comicsAppearedIn: Joi.number().required().min(0).label("Comics Appeared In"),
        description: Joi.string().required().label("description"),
        backStory: Joi.string().required().label("Daily Rental Rate")
    }

    componentDidMount() {
        const heroTypes = getHeroType();
        this.setState({ heroTypes });

        const heroId = this.props.match.params.id;
        if (heroId === "new") return;

        const hero = getHero(heroId);
        if (!hero) return this.props.history.replace("/not-found");

        this.setState({ data: this.mapToViewModel(hero) });
    }

    mapToViewModel(hero) {
        return {
            _id: hero._id,
            name: hero.name,
            heroTypeId: hero.heroType._id,
            power: hero.power,
            comicsAppearedIn: hero.comicsAppearedIn,
            description: hero.description,
            backStory: hero.backStory
        };
    }

    doSubmit = () => {
        saveHero(this.state.data);
        this.props.history.push("/heroes");
    }

    render() { 
        return ( 
            <div>
                <h1>Hero Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name","Name")}
                    {this.renderSelect("heroTypeId","Hero Type", this.state.heroTypes)}
                    {this.renderInput("power","Power")}
                    {this.renderInput("comicsAppearedIn","Comics Appeared In", "number")}
                    {this.renderInput("description", "Description")}
                    {this.renderInput("backStory", "Back Story")}
                    {this.renderButton("Save")}
                </form>
            </div>
         );
    }
}
 
export default HeroForm;