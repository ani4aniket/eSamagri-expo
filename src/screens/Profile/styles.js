import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "#000000",
        borderWidth: 0
      },
      rect: {
        width: "100%",
        height: "10%",
        backgroundColor: "#5B7EFB"

      },
      profilePicture: {
        width: 120,
        height: 20,
        color: "#121212",
        fontSize: 17,
        fontFamily: "Poppins-Regular",
        fontWeight: "bold",
        marginTop: "2%",
        marginLeft: 17
      },
      personalDetails: {
        width: 140,
        height: 20,
        color: "#121212",
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Poppins-Regular",
        marginTop: 2
      },
      iconEdit: {
        color: "rgba(82,113,194,1)",
        fontSize: 17,
        marginLeft: "1%",
        marginTop: "1%"
      },
      personalDetailsRow: {
        marginHorizontal: "5%",
        marginVertical: 1,
        height: 20,
        flexDirection: "row",
        marginTop: 20,
      },
      imgContainer:{
        width:"100%",
        height: "12%",
        alignItems:"center",
      },
      image: {
        width: 144,
        height: 144,
        borderRadius: 100,
        borderColor: "#000000",
        borderWidth: 1,
        marginTop: "2%",
        
        // marginLeft: "35%",
        overflow: "hidden"
      },
      image_imageStyle: {
        width: 142,
        height: 142
      },
      camera: {
        width: 34,
        height: 34,
        marginTop: "4%",
        marginLeft: "57%"
      },
      ellipse: {
        top: 0,
        left: 0,
        width: 34,
        height: 34,
        position: "absolute"
      },
      icon: {
        top: 9,
        left: 8,
        position: "absolute",
        color: "rgba(0,0,0,1)",
        fontSize: 17
      },
      ellipseStack: {
        width: 34,
        height: 34
      },
      rect2: {
        width: "90%",
        height: 140,
        marginTop: "5%",
        alignSelf: "center",
        borderRadius: 5,
      },
      data_table: {
        // margin: "0 auto",
        marginTop: 5,
        textAlign: "center",
      },
      data_row: {
        width: 219,
        height: 19,
        marginTop: 2,
        marginLeft: 16
      },
      key: {
        top: 0,
        left: 0,
        width: "30%",
        height: 20,
        color: "#121212",
        fontWeight:"bold",
        position: "absolute",
        fontSize: 12,
        fontFamily: "Poppins-Regular"
      },
      value: {
        top: 0,
        left: 109,
        // margin: '0 auto',
        width: "70%",
        height: 20,
        color: "#121212",
        position: "absolute",
        fontSize: 12,
        fontFamily: "Poppins-Regular"
      },
      
});

export default styles;