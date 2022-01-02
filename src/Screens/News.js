import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import {API_KEY} from '@env';

const News = () => {
  const [data, setData] = useState(null);

  const getNews = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
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
