import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            search: '',
            resultsShown: false
        };
    }

    showResults = () => {
        this.setState({ resultsShown: true })
    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        const { handleSubmit } = this.props

        return (
            <SearchBar
                platform='ios'
                containerStyle={{ backgroundColor: '#008dff' }}
                inputContainerStyle={{ backgroundColor: 'white' }}
                cancelButtonProps={{ color: 'white' }}
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={search}
                onSubmitEditing={() => handleSubmit(search)}
            />
        );
    }
}