import { useState } from "react";
import {
  Text,
  View,
  Modal,
  Button,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* {//! 1. Modal} */}

      {/* <Button
        title="Open Modal"
        color="midnightblue"
        onPress={() => {
          setIsModalVisible(true);
        }}
      /> */}
      {/* 
      <Modal
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </Modal> */}

      {/* {//! 2. Status bar} */}

      <StatusBar
        backgroundColor="lightgreen"
        barStyle="light-content"
        hidden={isStatusBarHidden}
      />
      {/* {console.log(isStatusBarHidden)} */}
      <Button
        title={isStatusBarHidden ? "Show status bar" : "Hide status bar"}
        onPress={() => {
          if (isStatusBarHidden) {
            setIsStatusBarHidden(false);
          } else {
            setIsStatusBarHidden(true);
          }
        }}
      />

      {/* { //! Activity indicator} */}
      {/* 
      <ActivityIndicator />
      <ActivityIndicator color="midnightblue " />
      <ActivityIndicator size="large" color="darkblue" />
      <ActivityIndicator
        size="large"
        color="red"
        animating={isStatusBarHidden}
      /> */}

      {/* {//! Alert} */}
      <Button
        title="Alert"
        onPress={() => {
          Alert.alert("Invalid data!", "DOB Incorrect");
        }}
      />

      <Button
        title="Alert 2"
        onPress={() => {
          Alert.alert("Invalid data!", "DOB Incorrect", [
            {
              text: "Cancel",
              onPress: () => {
                console.log("Cancel Pressed");
              },
            },
            {
              text: "OK",
              onPress: () => {
                console.log("OK Pressed");
              },
            },
          ]);
        }}
      />
    </View>
  );
}
