import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import ImagePickerComponent from "../components/ImagePicker";
import callGoogleVisionAsync from "../helperFunctions.js";

const Receipts = () => {
  return (
    <View style={styles.container}>
      {/* IMAGE PICKER */}
      <TouchableOpacity style={styles.button}>
        <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
      </TouchableOpacity>

      {/* <TouchableOpacity>
        <Text>Or enter it manually</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
  },
});

export default Receipts;
