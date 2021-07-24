import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_82_27} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eea/7081/38eba1c212ac0aff834fa9f45aa0bbee"
        }}
        style={styles.ImageBackground_82_28}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770d/cf9a/296129f080d9e32bd4838d4e8d407ddb"
        }}
        style={styles.ImageBackground_82_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/964f/9a7d8d5bf80db263fe96a44f14c93843"
        }}
        style={styles.ImageBackground_84_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/964f/9a7d8d5bf80db263fe96a44f14c93843"
        }}
        style={styles.ImageBackground_84_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5401/2437/5e4ce02db2107691bdf78257ea8d4600"
        }}
        style={styles.ImageBackground_82_108}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_82_27: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_82_28: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("1.6491754122938531%"),
    resizeMode: "cover"
  },
  ImageBackground_82_29: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.8%"),
    top: hp("1.6491754122938531%"),
    resizeMode: "cover"
  },
  ImageBackground_84_3: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("13.043478260869565%"),
    minHeight: hp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("42.578710644677656%")
  },
  ImageBackground_84_2: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("13.043478260869565%"),
    minHeight: hp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("42.578710644677656%")
  },
  ImageBackground_82_108: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("13.043478260869565%"),
    minHeight: hp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("42.578710644677656%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
