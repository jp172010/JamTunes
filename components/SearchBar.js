import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            search: ''
        };
    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        const { handleSubmit, clearResults} = this.props;

        return (
            <SearchBar
                platform='ios'
                containerStyle={{ backgroundColor: '#008dff' }}
                inputContainerStyle={{ backgroundColor: 'white' }}
                cancelButtonProps={{ color: 'white' }}
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={search}
                onClear={clearResults}
                onSubmitEditing={() => handleSubmit(search)}
            />
        );
    }
}