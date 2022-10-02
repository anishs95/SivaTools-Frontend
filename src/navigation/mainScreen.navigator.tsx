import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavigator } from "./auth.navigator";
import { SocialNavigator } from "./social.navigator";
import { ArticlesNavigator } from "./articles.navigator";
import { MessagingNavigator } from "./messaging.navigator";
import { DashboardsNavigator } from "./dashboards.navigator";
import { EcommerceNavigator } from "./ecommerce.navigator";
import { LayoutsScreen } from "../scenes/layouts/layouts.component";
import { MainScreen } from "../scenes/main/main.component";
import { CustomerRegistrationScreen } from "../scenes/main/customer-registration.component";
// import { CustomerRegistration } from "../layouts/customer/registration";

const Stack = createStackNavigator();

export const MainScreenNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="MainScreen" component={MainScreen} />
    <Stack.Screen
      name="CustomerRegistration"
      component={CustomerRegistrationScreen}
    />
    <Stack.Screen name="Social" component={SocialNavigator} />
    <Stack.Screen name="Articles" component={ArticlesNavigator} />
    <Stack.Screen name="Messaging" component={MessagingNavigator} />
    <Stack.Screen name="Dashboards" component={DashboardsNavigator} />
    <Stack.Screen name="Ecommerce" component={EcommerceNavigator} />
  </Stack.Navigator>
);
