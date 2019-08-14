
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
export default class SuperGrid extends Component {
    state = { titles: [] };
    componentDidMount() {
        fetch(
          "https://api.deezer.com/chart/0/playlists"
        )
          .then(response => response.json())
          .then(responsejson => {
              console.log(responsejson);
             this.setState({ titles: responsejson.data })
          }).catch();
      }
    render() {
        const { titles } = this.state
        const items = [
            { name: 'This is very long text lets see what happends', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
        ];
       
        return (
            <FlatGrid
                itemDimension={130}
                items={titles}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                // spacing={20}
                renderItem={({ item, index }) => (
                    <View>
                        <View style={[styles.itemContainer]}>
                            <Image
                                style={{ width: 175, height: 175 }}
                                source={{ uri: item.picture_big }} />
                            {/* <Text numberOfLines={1} style={styles.itemName}>{item.name}</Text> */}
                            {/* <Text style={styles.itemCode}>{item.code}</Text> */}
                        </View>
                        <View>
                            <Text style={styles.songName} numberOfLines={1} >{item.title}</Text>
                            <Text style={styles.artistName} numberOfLines={1} >by {item.user.name}</Text>
                        </View>
                    </View>
                )}
            />
        );
    }
}
const styles = StyleSheet.create({
    gridView: {
        marginTop: 5,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 200,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    songName: {
        fontSize: 18,
        color: 'black',
        paddingTop: 10
    },
    artistName: {
        fontSize: 12,
        color: 'grey',
        maxWidth:150
    },
    test: {
        borderBottomWidth: .5,
        borderLeftWidth: .5,
        borderRightWidth: .5
    },
    topHitContainer: {
        borderColor: 'grey',
    }
});