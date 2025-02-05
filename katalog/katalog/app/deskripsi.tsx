import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./image/logo.jpg')} style={styles.logo} />
        <Text style={styles.headerText}>Beauty & Hair SALON</Text>
      </View>

      <Text style={styles.titleText}>Make Up</Text>

      <View style={styles.card}>
        <Text style={styles.serviceTitle}>REGULAR</Text>
        <Text style={styles.price}>Rp 300.000</Text>
        <Text style={styles.detail}>Detail: Graduation, Party, Bridesmaid</Text>
        <Text style={styles.include}>Include: MakeUp & Hairdo/Hijabdo</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.serviceTitle}>Engagement</Text>
        <Text style={styles.price}>Rp 500.000</Text>
        <Text style={styles.detail}>Detail: Engagement</Text>
        <Text style={styles.include}>Include: MakeUp & Hairdo/Hijabdo</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.serviceTitle}>PREWEDDING</Text>
        <Text style={styles.price}>Rp 700.000</Text>
        <Text style={styles.detail}>Detail: Prewedding</Text>
        <Text style={styles.include}>Include: MakeUp & Hairdo/Hijabdo</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.serviceTitle}>WEDDING</Text>
        <Text style={styles.price}>Rp 2.500.000</Text>
        <Text style={styles.detail}>Detail: Wedding</Text>
        <Text style={styles.include}>Include: MakeUp & Hairdo/Hijabdo</Text>
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
    paddingVertical: 20,
    backgroundColor: '#FFF',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B565A7',
    fontFamily: 'serif',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'serif',
    marginVertical: 15,
  },
  card: {
    backgroundColor: '#FADADD', 
    borderRadius: 10,
    padding: 15,
    margin: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B565A7',
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
  include: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default App;
