import { Text, StyleSheet, SafeAreaView, View, Dimensions, Pressable, TextInput, Platform } from 'react-native';
import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import AspireLogo from '@/assets/icons/AspireLogo';
import MainScreenListView from '@/components/MainScreenListView';
import TopUpAccountIcon from '@/assets/icons/TopUpAccountIcon';
import SpendingLimitIcon from '@/assets/icons/SpendingLimitIcon';
import FreezeCardIcon from '@/assets/icons/FreezeCardIcon';
import DeactivatedCardsIcon from '@/assets/icons/DeactivatedCardsIcon';
import NewCardIcon from '@/assets/icons/NewCardIcon';
import { useAddNewCardMutation, useGetCardsQuery, useFreezeCardMutation } from '@/redux-store/cards/CardsSlice';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';
import { ICard } from '@/models';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HideDetailsIcon from '@/assets/icons/HideDetailsIcon';
import ShowDetailsIcon from '@/assets/icons/ShowDetailsIcon';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import CardView from '@/components/CardView';
import { MaterialIcons } from '@expo/vector-icons';


const DebitCard = () => {
  const { data: cards, isFetching, isError, refetch } = useGetCardsQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = useSharedValue<number>(0);
  const [addNewCard, { isError: isAddingNewCardError }] = useAddNewCardMutation();
  const [freezeCard] = useFreezeCardMutation();
  const inputRef = useRef<TextInput>(null);
  const [cardName, setCardName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {top: SCREEN_TOP} = useSafeAreaInsets();
  const [cardNumberVisible, setCardNumberVisible] = useState(true);
  
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: Math.max(Math.min(translateY.value, 0), -150)}],
  }));

  
  const gesture = Gesture.Pan()
  .onUpdate((e) => {
      translateY.value = e.translationY;
    })

  const handleAddNewCard = () => {
    setIsModalVisible(true);
    inputRef.current?.focus();
  }

  const onPressAddCard = async () => {
    if (cardName.length === 0) {
      Toast.show({
        text1: 'Please enter a valid name',
        type: 'error'
      });
      return;
    }
    const nameParts = cardName.split(' ');
    if (nameParts.length < 2) {
      Toast.show({
        text1: 'Please enter both first and last name',
        type: 'error'
      });
      return;
    }
    setIsModalVisible(false);
    await addNewCard({ name: cardName })
    refetch()
    setCardName('');
  }

  const handleFreezeCard = async (freeze: boolean) => {
    if (!cards?.[currentIndex]) return;
    await freezeCard({ cardId: cards[currentIndex].id, freeze });
    refetch();
  }

  const toggleCardNumberVisibility = () => {
    setCardNumberVisible(!cardNumberVisible);
  }

  if (isError || isAddingNewCardError) {
    return <Text style={styles.title}>Error fetching cards</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {isFetching ? 
              <View style={styles.loadingBox} /> : 
              cards?.[currentIndex]?.cardType
            }
          </Text>
          <Pressable onPress={handleAddNewCard}>
            {Platform.OS === 'ios' ?
              <IconSymbol name='plus.circle.fill' size={20} color={Colors.light.white} /> :
              <MaterialIcons name='add-circle' size={20} color={Colors.light.white} />
            }
          </Pressable>
        </View>
        <AspireLogo color={Colors.light.tint} />
      </View>
      <Text style={styles.availableBalance}>Available Balance</Text>
      <View style={styles.balanceContainer}>
        <View style={styles.currencyContainer}>
          <Text style={styles.currency}>S$</Text>
        </View>
        <Text style={styles.balance}>
          {isFetching ? 
            <View style={styles.loadingBox} /> :
            cards?.[currentIndex]?.cardBalance
          }
        </Text>
      </View>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[animatedStyle]}>
          <Pressable onPress={toggleCardNumberVisibility} style={styles.cardNumberVisibilityContainer}>
            {cardNumberVisible ? <HideDetailsIcon /> : <ShowDetailsIcon />}
            <Text style={styles.cardNumberVisibilityText}>{cardNumberVisible ? 'Hide Card Number' : 'Show Card Number'}</Text>
          </Pressable>
          <Carousel
            loop={false}
            width={Dimensions.get('window').width}
            height={220}
            autoPlay={false}
            data={cards || []}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setCurrentIndex(index)}
            renderItem={({ item }) => (
              <CardView item={item} cardNumberVisible={cardNumberVisible} />
            )}
            style={styles.carousel}
            onProgressChange={progress}
          />
          {cards && cards?.length > 1 && <Pagination.Basic<ICard>
            progress={progress}
            data={cards}
            size={8}
            dotStyle={styles.paginationDot}
            activeDotStyle={styles.paginationActiveDot}
            containerStyle={styles.paginationContainer}
            horizontal
          />}
          <View style={styles.scrollView}>
            <MainScreenListView title="Top-up account" subtitle="Deposit money to your account to use with card">
              <TopUpAccountIcon />
            </MainScreenListView>
            <MainScreenListView title="Weekly spending limit" subtitle="You haven't set any spending limit on card" showSwitch={true}>
              <SpendingLimitIcon />
            </MainScreenListView>
            <MainScreenListView 
              title={isFetching ? "Loading..." : cards?.[currentIndex]?.cardFreezed ? "Unfreeze card" : "Freeze card"}
              subtitle={isFetching ? "Loading..." : cards?.[currentIndex]?.cardFreezed ? "Your debit card is currently frozen" : "Your debit card is currently active"}
              showSwitch={true}
              switchValue={isFetching ? false : cards?.[currentIndex]?.cardFreezed}
              onSwitchChange={handleFreezeCard}
            >
              <FreezeCardIcon />
            </MainScreenListView>
            <MainScreenListView title="Get a new card" subtitle="This deactivates your current debit card">
              <NewCardIcon />
            </MainScreenListView>
            <MainScreenListView title="Deactivated cards" subtitle="Your previously deactivated cards">
              <DeactivatedCardsIcon />
            </MainScreenListView>
            <View style={styles.bottomSpacing}></View>
          </View>
        </Animated.View>
      </GestureDetector>
      <View>
      <Modal style={{alignSelf: 'center', justifyContent: 'center', flex: 1, width: '100%', height: '100%'}} isVisible={isModalVisible} hasBackdrop={true} backdropOpacity={0.8} backdropColor={'#000'} onBackdropPress={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add Card</Text>
          <TextInput 
            value={cardName} 
            onChangeText={setCardName} 
            ref={inputRef} 
            placeholder='Enter your name' 
            style={styles.modalInput} 
          />
          <Pressable onPress={onPressAddCard} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Add Card</Text>
          </Pressable>
        </View>
        <Toast 
        topOffset={SCREEN_TOP + 8}
      />
      </Modal>
      </View>
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
  titleContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8
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
    zIndex: 1000,
  },
  cardContainerFreezed: {
    backgroundColor: '#CCCCCC',
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
  carousel: {
    position: 'absolute',
    top: 28,
    zIndex: 1000,
  },
  paginationContainer: {
    position: 'absolute',
    top: 230,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    zIndex: 10000,
    marginBottom: 10,
  },
  paginationDot: {
    borderRadius: 10,
    backgroundColor: Colors.light.blueTint,
  },
  paginationActiveDot: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: Colors.light.white,
  },
  scrollView: {
    height: '100%',
    backgroundColor: Colors.light.white,
    marginTop: 92,
    borderRadius: 24,
    paddingTop: 188,
    zIndex: -1
  },
  bottomSpacing: {
    height: 42
  },
  loadingBox: {
    width: 80,
    height: 24,
    backgroundColor: Colors.light.tint,
    borderRadius: 4,
  },
  loadingCardBox: {
    width: Dimensions.get('window').width,
    height: 220,
    backgroundColor: Colors.light.tint,
    borderRadius: 16,
  },
  modalContainer: {
    backgroundColor: Colors.light.white,
    borderRadius: 16,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  modalInput: {
    backgroundColor: Colors.light.white,
    width: '90%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.light.tint,
  },
  modalButton: {
    backgroundColor: Colors.light.blueTint,
    width: '90%',
    height: 40,
    borderRadius: 10,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: Colors.light.blueTint,
  },
  modalButtonText: {
    color: Colors.light.white,
    fontWeight: 'medium',
    fontSize: 16,
  },
  modalTitle: {
    color: Colors.light.blueTint,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  cardNumberVisibilityContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
    backgroundColor: Colors.light.white,
    width: 150,
    height: 44,
    position: 'absolute',
    right: 0,
    paddingTop: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardNumberVisibilityText: {
    color: Colors.light.tint,
    fontSize: 12,
    fontWeight: 'bold',
  }
});
export default DebitCard;