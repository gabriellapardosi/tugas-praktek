import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.headerContainer}>
        <Image
          source={require('./image/logo.jpg')} 
          style={styles.cardImage}
        />
        <Text style={styles.headerText}>Beauty & Hair SALON</Text>
      </View>

    
      <View style={styles.contentContainer}>
        
        <Link href="/hairstyle" style={styles.cardLink}>
          <View style={styles.card}>
            <Image
              source={require('./image/rambut.jpg')} 
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Hair Style</Text>
          </View>
        </Link>

      
        <Link href="/produk" style={styles.cardLink}>
        <View style={styles.card}>
          <Image
            source={require('./image/produk.jpg')} 
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Produk</Text>
        </View></Link>

      
        <Link href="/makeup" style={styles.cardLink}>
        <View style={styles.card}>
          <Image
            source={require('./image/makeup.jpg')} 
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Make Up</Text>
        </View></Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBEFEF',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B565A7',
    marginTop: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    backgroundColor: '#FFF',
    width: '40%',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10,
  },
  cardImage: {
    width: 200,
    height: 250,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  cardLink: {
    width: '40%', 
  },
});

export default App;