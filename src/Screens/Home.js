import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Tap on an option below to get the Latest News:
      </Text>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'us'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - US</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'ca'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Canada</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'ar'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Argentina</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'at'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Austria</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'au'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Australia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'be'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Belgium</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'bg'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Bulgaria</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'br'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Brazil</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'cn'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - China</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'co'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Colombia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'cu'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Cuba</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'cz'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>
              Top Headlines - Czech Republic
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'eg'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Egypt</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'de'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Germany</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'in'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - India</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'ch'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - Switzerland</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('News', {country: 'ae'})}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Top Headlines - UAE</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    margin: 15,
    color: '#000000',
  },
  menuItem: {
    backgroundColor: 'blue',
    margin: 10,
    padding: 15,
    borderRadius: 30,
  },
  menuItemText: {
    color: '#FFF',
    fontSize: 22,
  },
});
