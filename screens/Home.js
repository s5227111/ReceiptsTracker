import { Text, TouchableOpacity, View, Image } from "react-native";

const Home = () => {
  // const dimensions = Dimensions.get("window");
  // const imageHeight = Math.round((dimensions.width * 9) / 16);
  // const imageWidth = dimensions.width;

  return (
    <View>
      <TouchableOpacity>
        <Image
          style={{
            width: "100%",
            alignSelf: "flex-end",
            resizeMode: "cover",
          }}
          source={require("../assets/home_image.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
