import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MovieDetails = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>MovieDetails</Text>
      <Link href={"/"}>Home</Link>
    </View>
  );
};

export default MovieDetails;
