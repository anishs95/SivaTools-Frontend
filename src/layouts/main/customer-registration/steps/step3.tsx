import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  StyleService,
  useStyleSheet,
  Card,
  Text,
  IndexPath,
} from "@ui-kitten/components";
import Input from "react-native-input-style";

export default (props): React.ReactElement => {
  const [careOff, setCareOff] = React.useState<string>();
  const [cusId, setCusId] = React.useState<string>();
  const [currentStep, setCurrentStep] = React.useState<string>();
  const [totalSteps, setTotalSteps] = React.useState<string>();
  const styles = useStyleSheet(themedStyles);

  useEffect(() => {
    console.log(props);
    const { getTotalSteps, getCurrentStep } = props;
    console.log(getTotalSteps() + " " + getCurrentStep());
    setTotalSteps(getTotalSteps());
    setCurrentStep(getCurrentStep());
  }, []);

  const nextStep = () => {
    const { next, saveState } = props;
    // Save state for use in other steps
    saveState({
      customerCareoff: careOff,
      customerIdentificationNumber: cusId,
    });
    //  alert(JSON.stringify(props.getState()));
    // Go to next step
    next();

    // fetch(
    //   "http://cementapp-env.eba-pwzigxq8.us-east-1.elasticbeanstalk.com/customerservice/customer",
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(props.getState()),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     alert("SUCCESS");
    //     return json;
    //   })
    //   .catch((error) => {
    //     alert("Already registerd user , Try Log IN");
    //   });
  };

  const onChange = (value, name, id) => {
    console.log("Phone Number " + name);
  };

  return (
    <View>
      <View style={[styles.container, styles.formContainer]}>
        <View>
          <Text
            style={styles.currentStepText}
          >{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>

        <Input
          onlyEnglish
          id="careof"
          label="Care Off"
          keyboardType="default"
          required
          autoCapitalize="words"
          errorText="INVALID NAME"
          onInputChange={(id, value, state) => {
            setCareOff(value);
          }}
          initialValue=""
          // labelStyle={styles.lblStyle}
          outlined
          borderColor="blue"
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={nextStep} style={styles.btnStyle}>
            <Image
              source={require("../assets/farrow.jpg")}
              style={styles.btnImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    minHeight: 216,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 44,
    radius: 20,
  },
  bookingCard: {
    margin: 4,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "6%",
  },
  getOtpButton: {
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  formContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  dropdown_5: {
    marginTop: 8,
    borderColor: "lightgray",
    height: 40,
    backgroundColor: "#f8f9fd",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 8,
    paddingLeft: 20,
  },
  signUpButton: {
    marginVertical: 34,
    marginHorizontal: 26,
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  formInput: { height: 70, alignItems: "center" },
  formInput2: {
    marginTop: 16,
    fontSize: 12,
  },

  spinnerTextStyle: {
    color: "#FFF",
  },
  btnImage: {
    width: "40%",
    height: "40%",
  },
  btnStyle: {
    borderColor: "#faf",
    borderWidth: 2,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  currentStepText: {
    color: "#111",
    fontSize: 16,
  },
});
