import { View } from "react-native";
import ImagePickerComponent from "../components/ImagePickerComponent";
import callGoogleVisionAsync from "../helperFunctions.js";

const Receipts = () => {
  return (
    <View style={{ marginTop: 300 }}>
      <ImagePickerComponent onSubmit={callGoogleVisionAsync} />
    </View>
  );
};

export default Receipts;
