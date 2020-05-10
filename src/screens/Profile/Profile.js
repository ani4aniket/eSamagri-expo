import React, { Component } from 'react';
import { View, Text, Image, ImageBackground,  } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import { Card, CardItem, Body,Button } from 'native-base';

import styles from './styles'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <View style={styles.rect}></View>
                <Text style={styles.profilePicture}>Profile Picture</Text>

                <View style={styles.imgContainer}>
                    <ImageBackground
                    source={require("../../../assets/profile.png")}
                    resizeMode="contain"
                    style={styles.image}
                    imageStyle={styles.image_imageStyle}
                    />
                </View>

                <Button transparent onPress={()=>(console.log("I'm pressed"))}>
                    <View style={styles.camera}>
                        <View style={styles.ellipseStack}>
                            <Svg viewBox="0 0 33.54 33.54" style={styles.ellipse}>
                                <Ellipse
                                    strokeWidth={2}
                                    fill="rgba(196,196,196,1)"
                                    stroke="rgba(255,255,255,1)"
                                    cx={17} cy={17} rx={16} ry={16}
                                />
                            </Svg>
                            <EntypoIcon name="camera" style={styles.icon}></EntypoIcon>
                        </View>
                    </View>
                </Button>
                

                <View style={styles.personalDetailsRow}>
                    <Text style={styles.personalDetails}>Personal Details</Text>
                    <EntypoIcon name="edit" style={styles.iconEdit}></EntypoIcon>
                </View>
                <Card style={styles.rect2}>
                    <CardItem>
                    <Body>
                        <View style={styles.data_table}>
                            <View style={styles.data_row}>
                                <Text style={styles.key}>Name</Text>
                                <Text style={styles.value}>Rajesh Verma</Text>
                            </View>
                            <View style={styles.data_row}>
                                <Text style={styles.key}>Birthday</Text>
                                <Text style={styles.value}>08 May, 1997</Text>
                            </View>
                            <View style={styles.data_row}>
                                <Text style={styles.key}>Gender</Text>
                                <Text style={styles.value}>Male</Text>
                            </View>
                            <View style={styles.data_row}>
                                <Text style={styles.key}>Mobile No</Text>
                                <Text style={styles.value}>+91-67348 83425</Text>
                            </View>
                            <View style={styles.data_row}>
                                <Text style={styles.key}>Email</Text>
                                <Text style={styles.value}>rajesh2971@gmail.com</Text>
                            </View>
                        </View>
                    </Body>
                    </CardItem>
                </Card>
            </View>
         );
    }
}
 
export default Profile;