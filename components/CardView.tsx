import AspireLogoWithText from "@/assets/icons/AspireLogoWithText";
import VisaLogo from "@/assets/icons/VisaLogo";
import { Colors } from "@/constants/Colors";
import { ICard } from "@/models";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

interface CardViewProps {
    item: ICard;
    cardNumberVisible: boolean;
}

const CardView = ({ item, cardNumberVisible }: CardViewProps) => {
    return (
        <View 
            testID="card-container"
            style={[styles.cardContainer, item.cardFreezed && styles.cardContainerFreezed]}
        >
        <View style={styles.logoContainer}>
            <AspireLogoWithText />
        </View>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardNumber}>
            {cardNumberVisible 
            ? item.cardNumber.replace(/(\d{4})/g, '$1    ').trim()
            : `XXXX    XXXX    XXXX    ${item.cardNumber.slice(-4)}`}
        </Text>
        <View style={styles.cardDetailsContainer}>
            <Text style={styles.cardDetail}>Thru: {item.cardExpiry}</Text>
            <Text style={styles.cardDetailCvv}>CVV: {cardNumberVisible ? item.cardCVV : 'XXX'}</Text>
        </View>
        <View style={styles.visaLogoContainer}>
            <VisaLogo />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
})

export default React.memo(CardView);