import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const NewsDetail = ({route}) => {
  const articleURL = route.params.url;
  return <WebView source={{uri: articleURL}} />;
};

export default NewsDetail;
