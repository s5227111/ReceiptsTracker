import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Button, Image, View, Text } from "react-native";

function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  // const [text, setText] = useState("Please add an image");
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        base64: true,
      });
      console.log(result);
      if (!result.cancelled) {
        setImage(result.uri);
        setText("Loading..");
        const responseData = await onSubmit(result.base64);
        setText(responseData.text);
      }
    } catch (error) {
      console.log(result);
    }
  };
  return (
    <View>
      <Button title="Select Image From Camera" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 400, height: 300, resizeMode: "contain" }}
        />
      )}
      {/* <Text>{text}</Text> */}
    </View>
  );
}
export default ImagePickerComponent;
