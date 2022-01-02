import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import moment from 'moment';
import placeholderImage from '../assets/placeholder_img.png';

const deviceWidth = Dimensions.get('window').width;

const NewsCard = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
      {item.urlToImage ? (
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: item.urlToImage,
          }}
        />
      ) : (
        <Image
          style={styles.image}
          resizeMode="contain"
          source={placeholderImage}
        />
      )}

      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.date}>
        Published at:
        {moment(item.publishedAt).format('ddd, MMM D, YYYY h:mma')}
      </Text>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  cardView: {
    width: deviceWidth - 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 14,
  },
  author: {
    fontSize: 17,
    color: '#808080',
    marginBottom: 30,
  },
  desc: {
    fontSize: 18,
    color: '#000000',
    margin: 15,
    lineHeight: 25,
  },
  image: {
    width: deviceWidth * 0.9,
    height: deviceWidth * 0.5,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#808080',
    marginTop: 10,
    marginBottom: 10,
  },
});
