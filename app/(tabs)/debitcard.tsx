import { Text, StyleSheet, SafeAreaView, View, Dimensions } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import AspireLogo from '@/assets/icons/AspireLogo';
import { ScrollView } from 'react-native';
import MainScreenListView from '@/components/MainScreenListView';
import TopUpAccountIcon from '@/assets/icons/TopUpAccountIcon';
import SpendingLimitIcon from '@/assets/icons/SpendingLimitIcon';
import FreezeCardIcon from '@/assets/icons/FreezeCardIcon';
import DeactivatedCardsIcon from '@/assets/icons/DeactivatedCardsIcon';
import NewCardIcon from '@/assets/icons/NewCardIcon';
import AspireLogoWithText from '@/assets/icons/AspireLogoWithText';
import VisaLogo from '@/assets/icons/VisaLogo';

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
        <View style={styles.cardContainer}>
          <View style={styles.logoContainer}>
            <AspireLogoWithText />
          </View>
          <Text style={styles.cardName}>Mark Henry</Text>
          <Text style={styles.cardNumber}>1234     5678      9012     3456</Text>
          <View style={styles.cardDetailsContainer}>
            <Text style={styles.cardDetail}>Thru: 12/20</Text>
            <Text style={styles.cardDetailCvv}>CVV: 456</Text>
          </View>
          <View style={styles.visaLogoContainer}>
          <VisaLogo />
          </View>
        </View>
      <ScrollView style={styles.scrollView}>
        <MainScreenListView title="Top-up account" subtitle="Deposit money to your account to use with card">
          <TopUpAccountIcon />
        </MainScreenListView>
        <MainScreenListView title="Weekly spending limit" subtitle="You haven't set any spending limit on card" showSwitch={true}>
          <SpendingLimitIcon />
        </MainScreenListView>
        <MainScreenListView title="Freeze card" subtitle="Your debit card is currently active" showSwitch={true}>
          <FreezeCardIcon />
        </MainScreenListView>
        <MainScreenListView title="Get a new card" subtitle="This deactivates your current debit card">
          <NewCardIcon />
        </MainScreenListView>
        <MainScreenListView title="Deactivated cards" subtitle="Your previously deactivated cards">
          <DeactivatedCardsIcon />
        </MainScreenListView>
        <View style={styles.bottomSpacing}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.blueTint,
    flex: 1,
    zIndex: 1
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
  cardContainer: {
    marginHorizontal: 16,
    height: 220,
    width: Dimensions.get('window').width - 32,
    backgroundColor: Colors.light.tint,
    borderRadius: 16,
    top: 250,
    zIndex: 1000,
    position: 'absolute'
  },
  logoContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 24,
    marginRight: 24
  },
  cardName: {
    color: Colors.light.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24,
    marginHorizontal: 16
  },
  cardNumber: {
    color: Colors.light.white,
    fontSize: 14,
    fontWeight: 'condensedBold',
    marginTop: 24,
    marginHorizontal: 16
  },
  cardDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 16
  },
  cardDetail: {
    color: Colors.light.white,
    fontSize: 14,
    fontWeight: 'condensedBold',
    marginLeft: 16
  },
  cardDetailCvv: {
    color: Colors.light.white,
    fontSize: 14,
    fontWeight: 'condensedBold',
    marginLeft: 32
  },
  visaLogoContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 4,
    marginRight: 24
  },
  scrollView: {
    height: '100%',
    backgroundColor: Colors.light.white,
    marginTop: 92,
    borderRadius: 24,
    paddingTop: 188
  },
  bottomSpacing: {
    height: 42
  }
});

export default DebitCard;