import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

interface IMainScreenListView {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const MainScreenListView = ({children, title, subtitle}: IMainScreenListView) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.iconContainer}>
          {children}
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  title: {
    fontSize: 14,
    fontWeight: 'medium',
    color: Colors.light.title
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'regular',
    color: Colors.light.subTitle
  }
});

export default MainScreenListView