import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./image/logo.jpg')} style={styles.logo} />
        <Text style={styles.headerText}>Beauty & Hair SALON</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tableHeader}>HAIR CUT</Text>
     

        <View style={styles.serviceRow}>
          <Text style={styles.serviceName}>Pendek (Setelinga)</Text>
          <Text style={styles.serviceDuration}>30 Menit</Text>
        </View>

        <View style={styles.serviceRow}>
          <Text style={styles.serviceName}>Sedang (Sebahu)</Text>
          <Text style={styles.serviceDuration}>45 Menit</Text>
        </View>

        <View style={styles.serviceRow}>
          <Text style={styles.serviceName}>Panjang (Sepinggang)</Text>
          <Text style={styles.serviceDuration}>1 Jam</Text>
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
  card: {
    backgroundColor: '#FADADD', 
    borderRadius: 10,
    padding: 15,
    margin: 20,
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginBottom: 10,
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
  serviceDuration: {
    fontSize: 16,
    color: '#B565A7',
    fontWeight: 'bold',
  },
});

export default App;
