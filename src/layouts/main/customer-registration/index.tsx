import React, { ReactElement } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import {
  Button,
  CheckBox,
  Input,
  StyleService,
  Text,
  useStyleSheet,
  Icon,
} from "@ui-kitten/components";
import AnimatedMultistep from "react-native-animated-multistep";

import { KeyboardAvoidingView } from "./extra/3rd-party";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";

export default ({ navigation }): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const allSteps = [
    { name: "step 1", component: Step1 },
    { name: "step 2", component: Step2 },
    { name: "step 3", component: Step3 },
    { name: "step 4", component: Step4 },
  ];
  /* define the method to be called when you go on next step */
  const onNext = () => {
    console.log("Next");
  };
  /* define the method to be called when you go on back step */
  const onBack = () => {
    console.log("Back");
  };
  /* define the method to be called when the wizard is finished */
  const finish = (finalState) => {
    console.log(finalState);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.topBox}>
        <Text style={styles.headline}>Customer Registration</Text>
      </View>
      <AnimatedMultistep
        steps={allSteps}
        onFinish={finish}
        onBack={onBack}
        onNext={onNext}
        comeInOnNext="bounceInUp"
        OutOnNext="bounceOutDown"
        comeInOnBack="bounceInDown"
        OutOnBack="bounceOutUp"
      />
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topBox: {
    height: 80,
    flexDirection: "row",
    backgroundColor: "#046570",
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    marginTop: 0,
    width: 200,
    //  backgroundColor: "yellow",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 176,
  },
  profileAvatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignSelf: "center",
    backgroundColor: "background-basic-color-1",
    tintColor: "text-hint-color",
  },
  editAvatarButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: "text-control-color",
    marginLeft: 10,
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    alignSelf: "center",
    marginBottom: 16,
  },
});
