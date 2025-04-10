import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import AspireLogo from '@/assets/icons/AspireLogo';

const DebitCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Debit Card</Text>
        <AspireLogo color={Colors.light.tint} />
      </View>
      <Text style={styles.availableBalance}>Available Balance</Text>
      <View style={styles.balanceContainer}>
        <View style={styles.currencyContainer}>
          <Text style={styles.currency}>S$</Text>
        </View>
        <Text style={styles.balance}>100.00</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.blueTint,
    flex: 1,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 32
  },
  title: {
    color: Colors.light.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  availableBalance: {
    color: Colors.light.white,
    fontSize: 14,
    fontWeight: 'medium',
    marginTop: 24,
    marginHorizontal: 16,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  currencyContainer: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
    width: 40,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currency: {
    color: Colors.light.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  balance: {
    color: Colors.light.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});


export default DebitCard;