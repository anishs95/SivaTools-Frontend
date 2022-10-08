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
  const [name, setName] = React.useState<string>();
  const [phoneNumber, setPhoneNumber] = React.useState<string>();
  const [houseName, setHouseName] = React.useState<string>();
  const [junction, setJunction] = React.useState<string>();
  const [landmark, setLandmark] = React.useState<string>();
  const [district, setDistrict] = React.useState<string>();
  const [totalSteps, setTotalSteps] = React.useState<string>();
  const [currentStep, setCurrentStep] = React.useState<string>();

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
    console.log("Phone Number " + phoneNumber);
    saveState({
      customerName: name,
      customerPhoneNumber: phoneNumber,
      customerHouseName: houseName,
      customerNearestLandmark: landmark,
      customerDistrict: district,
    });
    // Go to next step
    next();
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
          dataDetectorTypes="phoneNumber"
          textContentType="telephoneNumber"
          label="Phone Number"
          keyboardType="phone-pad"
          minLength={10}
          maxLength={10}
          required
          autoCapitalize="words"
          errorText="INVALID PH.NO"
          value={phoneNumber}
          onInputChange={(id, value, state) => {
            setPhoneNumber(value);
          }}
          initialValue=""
          //fontSize={30}
          // labelStyle={styles.lblStyle}
          outlined
          borderColor="blue"
          //inputStyle={styles.formInput}
        />
        <Input
          onlyEnglish
          id="name"
          label="Name"
          keyboardType="default"
          required
          autoCapitalize="words"
          errorText="INVALID NAME"
          onInputChange={(id, value, state) => {
            setName(value);
          }}
          initialValue=""
          // labelStyle={styles.lblStyle}
          outlined
          borderColor="blue"
        />

        <Input
          onlyEnglish
          id="houseName"
          label="House Name"
          keyboardType="default"
          required
          autoCapitalize="words"
          errorText="INVALID House Name"
          onInputChange={(id, value, state) => {
            setHouseName(value);
          }}
          initialValue=""
          // labelStyle={styles.lblStyle}
          outlined
          borderColor="blue"
        />
        <Input
          onlyEnglish
          id="JunctionName"
          label="Junction"
          keyboardType="default"
          required
          autoCapitalize="words"
          errorText="INVALID House Name"
          onInputChange={(id, value, state) => {
            setJunction(value);
          }}
          initialValue=""
          // labelStyle={styles.lblStyle}
          outlined
          borderColor="blue"
        />

        <Input
          onlyEnglish
          id="boardingName"
          label="Nearest Landmark"
          keyboardType="default"
          required
          autoCapitalize="words"
          errorText="INVALID House Name"
          onInputChange={(id, value, state) => {
            setLandmark(value);
          }}
          initialValue=""
          // labelStyle={styles.lblStyle}
          outlined
          borderColor="blue"
        />
        <Input
          onlyEnglish
          id="district"
          label="District"
          keyboardType="default"
          required
          autoCapitalize="words"
          errorText="INVALID House Name"
          onInputChange={(id, value, state) => {
            setDistrict(value);
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
