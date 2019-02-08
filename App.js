import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button} from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Paul', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Yat', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Ben', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Alex', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Dariusz', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Sam', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Serene', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Rosie', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        title={item.text}
        image={{uri: item.uri}}
        key={item.id}
      >
        <Text style={{marginBottom: 10}}>
          For our clients
        </Text>
        <Button
          icon={{name: 'code'}}
          backgroundColor={"#03A9F4"}
          title="SPO Me!"
        >

        </Button>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="For our clients">
        <Text style={{marginBottom: 10}}>Nothing to see here</Text>
        <Button backgroundColor="#03A9F4" title="More Clients" />
      </Card>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
