import React, {Component} from 'react';
import { Tile } from 'react-native-elements';

export default class PlaylistTile extends Component {

    render() {

        const albumCover = this.props.data;
        console.log(albumCover);

        return (
            <Tile
                imageSrc={{ uri: albumCover.picture_xl }}
                contentContainerStyle={{ height: 100 }}
                featured={true}
                icon={{name: 'play', type: 'evilicon', size: 125, color: 'white'}}
                containerStyle={{ shadowColor: '#000000' }}
            >
            </Tile>
        )
    }
}