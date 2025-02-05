import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./image/logo.jpg')} style={styles.logo} />
        <Text style={styles.title}>Beauty & Hair SALON</Text>
      </View>
      <Text style={styles.sectionTitle}>Produk</Text>
      <View style={styles.productContainer}>
        <View style={styles.productItem}>
          <Image source={require('./image/lipstik.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Lipstik</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./image/foundation.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Foundation</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./image/eye shadow.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Eye Shadow</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./image/maskara.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Maskara</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./image/makarizo.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Makarizo</Text>
        </View>
        <View style={styles.productItem}>
          <Image source={require('./image/powder.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Powder</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d47b8d',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  productItem: {
    width: '45%',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fce4ec',
    padding: 10,
    borderRadius: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;