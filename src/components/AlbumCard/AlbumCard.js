import React from "react";
import { Card, View, Text } from "native-base";
import { Image } from "react-native";

import styles from "./styles";

const AlbumCard = (props) => {
  return (
    <Card style={styles.cardBody} transparent>
      <Image source={props.data} style={styles.image} />
    </Card>
  );
};

export default AlbumCard;
