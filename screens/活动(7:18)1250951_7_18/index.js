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
      <View style={styles.View_7_20}>
        <View style={styles.View_7_21} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a0/357c/e63df441b25549bbe2c6716966710adb"
          }}
          style={styles.ImageBackground_7_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a64/410e/40e7ea56dc693a96f8bd75af9185c683"
          }}
          style={styles.ImageBackground_7_23}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/801c/8b4f/04843e05d4af4b567263cf81cdc615be"
          }}
          style={styles.TouchableOpacity_7_24}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_0"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f3/0635/42a0aabf3cc59699532d5030bbc7d2a7"
          }}
          style={styles.ImageBackground_7_25}
        />
        <View style={styles.View_7_26}>
          <Text style={styles.Text_7_26}>首页</Text>
        </View>
        <View style={styles.View_7_27}>
          <Text style={styles.Text_7_27}>活动</Text>
        </View>
        <View style={styles.View_7_28}>
          <Text style={styles.Text_7_28}>我的</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_7_29}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_0"))
          }
        >
          <Text style={styles.Text_7_29}>创投客</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.View_7_32} />
      <View style={styles.View_7_33}>
        <Text style={styles.Text_7_33}>活动日历</Text>
      </View>
      <View style={styles.View_7_34}>
        <Text style={styles.Text_7_34}>5.22 星期六</Text>
      </View>
      <View style={styles.View_7_65}>
        <View style={styles.View_7_35}>
          <Text style={styles.Text_7_35}>五月，2021</Text>
        </View>
        <View style={styles.View_7_40}>
          <Text style={styles.Text_7_40}>
            周日 周一 周二 周三 周四 周五 周六{" "}
          </Text>
        </View>
        <View style={styles.View_7_47}>
          <Text style={styles.Text_7_47}> 2 3 4 5 6 7 8 </Text>
        </View>
        <View style={styles.View_7_50}>
          <Text style={styles.Text_7_50}> 9 10 11 12 13 14 15 </Text>
        </View>
        <View style={styles.View_41_7}>
          <Text style={styles.Text_41_7}>创投</Text>
        </View>
        <View style={styles.View_41_9}>
          <Text style={styles.Text_41_9}>创投</Text>
        </View>
        <View style={styles.View_7_57}>
          <Text style={styles.Text_7_57}> 16 17 18 19 20 21 22 </Text>
        </View>
        <View style={styles.View_7_59}>
          <Text style={styles.Text_7_59}> 23 24 25 26 27 28 29 </Text>
        </View>
        <View style={styles.View_7_63}>
          <Text style={styles.Text_7_63}> 25 26 27 28 29 30 </Text>
        </View>
        <View style={styles.View_7_60}>
          <Text style={styles.Text_7_60}> 30 31 1 2 3 4 5 </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45d5/9b0a/c3b19445d755b5e3c42c0c918924f23c"
          }}
          style={styles.ImageBackground_7_73}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b727/863b/fa93ef50ce9dded0c32c6a1f6663fb35"
          }}
          style={styles.ImageBackground_7_75}
        />
        <View style={styles.View_7_45}>
          <Text style={styles.Text_7_45}> 1 </Text>
        </View>
        <View style={styles.View_7_44}>
          <Text style={styles.Text_7_44}>五月，2021</Text>
        </View>
        <View style={styles.View_7_74}>
          <Text style={styles.Text_7_74}>今日活动</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db7f/0a7a/757adc99c6e453da96c6ba896612bdbb"
          }}
          style={styles.ImageBackground_7_38}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c295/225e/b572e2a2c61b5db166d1d947b4d212d2"
          }}
          style={styles.ImageBackground_7_39}
        />
        <View style={styles.View_7_66} />
        <View style={styles.View_7_67} />
        <View style={styles.View_7_68} />
        <View style={styles.View_7_69} />
        <View style={styles.View_7_70} />
        <View style={styles.View_7_71} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eea/7081/38eba1c212ac0aff834fa9f45aa0bbee"
        }}
        style={styles.ImageBackground_7_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770d/cf9a/296129f080d9e32bd4838d4e8d407ddb"
        }}
        style={styles.ImageBackground_7_31}
      />
      <View style={styles.View_7_84} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cca5/5ab7/480b4eb487604814379377784c880b15"
        }}
        style={styles.ImageBackground_41_44}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_7_20: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.394302848575713%"),
    minHeight: hp("11.394302848575713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89.20539730134932%")
  },
  View_7_21: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.394302848575713%"),
    minHeight: hp("11.394302848575713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_7_22: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("5.247376311844078%"),
    minHeight: hp("5.247376311844078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("2.248875562218899%"),
    resizeMode: "cover"
  },
  ImageBackground_7_23: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.6476761619190405%"),
    minHeight: hp("4.6476761619190405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("2.8485757121439264%"),
    resizeMode: "cover"
  },
  TouchableOpacity_7_24: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("5.097451274362818%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("2.3988005997001522%"),
    resizeMode: "cover"
  },
  ImageBackground_7_25: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("4.94752623688156%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    top: hp("2.3988005997001522%"),
    resizeMode: "cover"
  },
  View_7_26: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("8.245877061469272%"),
    justifyContent: "flex-start"
  },
  Text_7_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_27: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("8.245877061469272%"),
    justifyContent: "flex-start"
  },
  Text_7_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_28: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("8.245877061469272%"),
    justifyContent: "flex-start"
  },
  Text_7_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_29: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: hp("8.245877061469272%"),
    justifyContent: "flex-start"
  },
  Text_7_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_32: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.69265367316342%"),
    minHeight: hp("14.69265367316342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_33: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.8980509745127434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("6.146926536731634%"),
    justifyContent: "flex-start"
  },
  Text_7_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_34: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("11.094452773613193%"),
    justifyContent: "flex-start"
  },
  Text_7_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_65: {
    width: wp("90.93333333333334%"),
    minWidth: wp("90.93333333333334%"),
    height: hp("48.425787106446776%"),
    minHeight: hp("48.425787106446776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("17.24137931034483%")
  },
  View_7_35: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_40: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("6.446776611694151%"),
    justifyContent: "flex-start"
  },
  Text_7_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_47: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("17.24137931034483%"),
    justifyContent: "flex-start"
  },
  Text_7_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_50: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("22.338830584707647%"),
    justifyContent: "flex-start"
  },
  Text_7_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_7: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("1.0494752623688157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%"),
    top: hp("21.28935532233883%"),
    justifyContent: "flex-start"
  },
  Text_41_7: {
    color: "rgba(89, 136, 208, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_9: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("1.0494752623688157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("31.484257871064468%"),
    justifyContent: "flex-start"
  },
  Text_41_9: {
    color: "rgba(89, 136, 208, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_57: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("27.436281859070466%"),
    justifyContent: "flex-start"
  },
  Text_7_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_59: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("32.53373313343329%"),
    justifyContent: "flex-start"
  },
  Text_7_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_63: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("12.143928035982011%"),
    justifyContent: "flex-start"
  },
  Text_7_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_60: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("37.6311844077961%"),
    justifyContent: "flex-start"
  },
  Text_7_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_73: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.7481259370314843%"),
    minHeight: hp("3.7481259370314843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666667%"),
    top: hp("11.094452773613195%")
  },
  ImageBackground_7_75: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("46.026986506746624%")
  },
  View_7_45: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("12.143928035982011%"),
    justifyContent: "flex-start"
  },
  Text_7_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_44: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_74: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("44.97751124437781%"),
    justifyContent: "flex-start"
  },
  Text_7_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_38: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_7_39: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_66: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("0.08995502606324707%"),
    minHeight: hp("0.08995502606324707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("10.494752623688154%"),
    backgroundColor: "rgba(87, 87, 87, 1)"
  },
  View_7_67: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("0.08995502606324707%"),
    minHeight: hp("0.08995502606324707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("15.442278860569711%"),
    backgroundColor: "rgba(87, 87, 87, 1)"
  },
  View_7_68: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("0.08995502606324707%"),
    minHeight: hp("0.08995502606324707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("20.53973013493253%"),
    backgroundColor: "rgba(87, 87, 87, 1)"
  },
  View_7_69: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("0.08995502606324707%"),
    minHeight: hp("0.08995502606324707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("25.637181409295348%"),
    backgroundColor: "rgba(87, 87, 87, 1)"
  },
  View_7_70: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("0.08995502606324707%"),
    minHeight: hp("0.08995502606324707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("30.734632683658166%"),
    backgroundColor: "rgba(87, 87, 87, 1)"
  },
  View_7_71: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    height: hp("0.08995502606324707%"),
    minHeight: hp("0.08995502606324707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("35.83208395802099%"),
    backgroundColor: "rgba(87, 87, 87, 1)"
  },
  ImageBackground_7_30: {
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
  ImageBackground_7_31: {
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
  View_7_84: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("17.391304347826086%"),
    minHeight: hp("17.391304347826086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("67.61619190404798%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(104, 106, 106, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_41_44: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("20.389805097451273%"),
    minHeight: hp("20.389805097451273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("67.61619190404798%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
