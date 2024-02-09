import { useState } from "react";
import { Text, View, Modal, Button } from "react-native";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Open Modal"
        color="midnightblue"
        onPress={() => {
          setIsModalVisible(true);
        }}
      />
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
      </Modal>
    </View>
  );
}
