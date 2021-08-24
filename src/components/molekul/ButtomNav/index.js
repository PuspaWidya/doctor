import React from 'react'
import { View, StyleSheet } from 'react-native';
import { TabItem } from '../../../pages';
import { colors } from '../../../utilis/Color';
export default function ButtomNav({ state, descriptors, navigation }) {


  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem title={label}
          //title will give Tarbar name in router

          key={index}

          active={isFocused}
          //will give false/true

          onPress={onPress}
          onLongPress={onLongPress}/>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:12,
    paddingHorizontal:53,
    backgroundColor:colors.secondary
  }
})
