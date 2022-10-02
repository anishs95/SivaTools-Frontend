import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  Divider,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { SafeAreaLayout } from "../../components/safe-area-layout.component";
import { MenuGridList } from "../../components/menu-grid-list.component";
import { MenuIcon } from "../../components/icons";
import { data } from "./data";

export const LayoutsScreen = (props): React.ReactElement => {
  const onItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <TopNavigation title="Siva Tools" accessoryLeft={renderDrawerAction} />
      <Divider />
      <Text>Hi Siva Tools</Text>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
