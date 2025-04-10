import { View, Text, StyleSheet, Switch } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

interface IMainScreenListView {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  showSwitch?: boolean;
}

const MainScreenListView = ({children, title, subtitle, showSwitch = false}: IMainScreenListView) => {
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
      {showSwitch && <Switch style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20
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
    color: Colors.light.subTitle,
    opacity: 0.4
  }
});

export default MainScreenListView