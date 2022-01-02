import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import {API_KEY} from '@env';

const News = ({route}) => {
  const [data, setData] = useState(null);
  const country = route.params.country;

  const getNews = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`,
      )
      .then(response => {
        setData(response.data.articles);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  useEffect(() => {
    getNews();
    return () => {};
  });

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => <NewsCard item={item} />}
        refreshing={false}
        onRefresh={() => {
          getNews();
        }}
      />
    </View>
  );
};

export default News;
