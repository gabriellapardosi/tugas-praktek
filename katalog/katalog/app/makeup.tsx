import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router'; 

const App = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.backButton}>
        <Button title="Back" color="#B565A7" onPress={() => router.push('/')} />
      </View>

      <View style={styles.headerContainer}>
        <Image
         source={require('./image/logo.jpg')} 
         style={styles.logo}
        />
        <Text style={styles.headerText}>Beauty & Hair SALON</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Make Up</Text>
        <View style={styles.card}>
          

          <View style={styles.serviceRow}>
          <Link href="/deskripsi" style={styles.serviceLink}>
              <Text style={styles.serviceName}>Make up Reguler</Text>
            </Link>
            <Text style={styles.servicePrice}>300k</Text>
          </View>
          <View style={styles.serviceRow}>
            <Text style={styles.serviceName}>Engagement</Text>
            <Text style={styles.servicePrice}>500k</Text>
          </View>
          <View style={styles.serviceRow}>
            <Text style={styles.serviceName}>PREWEDDING</Text>
            <Text style={styles.servicePrice}>700k</Text>
          </View>
          <View style={styles.serviceRow}>
            <Text style={styles.serviceName}>WEDDING</Text>
            <Text style={styles.servicePrice}>2500k</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBEFEF',
  },
  backButton: {
    marginTop: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
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
    marginTop: 10,
    fontFamily: 'serif',
  },
  contentContainer: {
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'serif',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FADADD', 
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F5CAC3',
  },
  serviceName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  servicePrice: {
    fontSize: 16,
    color: '#B565A7',
    fontWeight: 'bold',
  },  serviceLink: {
    textDecorationLine: 'underline',
    color: '#B565A7',
    fontWeight: 'bold',
  }
});

export default App;