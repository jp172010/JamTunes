import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                // containerStyle={{ backgroundColor: 'white' }}
                // inputStyle={{ backgroundColor: 'light grey' }}
                platform='ios'
                containerStyle={{backgroundColor: 'white'}}
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}