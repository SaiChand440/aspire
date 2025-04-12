import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function ScreenRedirectView() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Please move ahead to debit card screen to view the test screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: { 
    flex: 1, 
    backgroundColor: Colors.light.white, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 20 
  },
  title: { 
    color: Colors.light.blueTint, 
    fontSize: 20, 
    fontWeight: 'bold' 
  }
});
