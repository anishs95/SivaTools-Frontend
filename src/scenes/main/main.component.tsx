import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  Divider,
  TopNavigation,
  TopNavigationAction,
  Button,
} from "@ui-kitten/components";
import { SafeAreaLayout } from "../../components/safe-area-layout.component";
import { MenuGridList } from "../../components/menu-grid-list.component";
import { MenuIcon } from "../../components/icons";
import { data } from "./data";
import { ApplicationProperties } from "../../configurations/ApplicationProperties";

const version: string = ApplicationProperties.getVersion2();

export const MainScreen = (props): React.ReactElement => {
  const onItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );
  const onCustomerRegistrationButtonPress = (): void => {
    props.navigation && props.navigation.navigate("CustomerRegistration");
  };

  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <TopNavigation title="Siva Tools" accessoryLeft={renderDrawerAction} />
      <Divider />
      <Text>Hi Siva Tools mains</Text>
      <Text>{version}</Text>
      <Button size="giant" onPress={onCustomerRegistrationButtonPress}>
        Customer Registration
      </Button>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
