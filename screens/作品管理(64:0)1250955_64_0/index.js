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
      <View style={styles.View_64_55} />
      <View style={styles.View_67_36}>
        <View style={styles.View_67_37} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c44/2bfd/93cc16792cb2caf8da4d66ffd4a8e0ae"
          }}
          style={styles.ImageBackground_67_38}
        />
        <View style={styles.View_67_39}>
          <Text style={styles.Text_67_39}>合作广告片《绿色之旅》</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ab/1b70/25d35839a556e268d8f5d9bb5518d717"
          }}
          style={styles.ImageBackground_67_52}
        />
        <View style={styles.View_67_40}>
          <Text style={styles.Text_67_40}>播放：1万</Text>
        </View>
        <View style={styles.View_67_41}>
          <Text style={styles.Text_67_41}>发布：2021-5-30</Text>
        </View>
        <View style={styles.View_67_42}>
          <Text style={styles.Text_67_42}>评论：8</Text>
        </View>
        <View style={styles.View_67_43}>
          <Text style={styles.Text_67_43}>01:45:16</Text>
        </View>
        <View style={styles.View_67_44} />
        <View style={styles.View_67_45} />
        <View style={styles.View_67_46}>
          <Text style={styles.Text_67_46}>纪录片</Text>
        </View>
        <View style={styles.View_67_47}>
          <Text style={styles.Text_67_47}>文化</Text>
        </View>
        <View style={styles.View_67_48} />
        <View style={styles.View_67_49} />
        <View style={styles.View_67_50}>
          <Text style={styles.Text_67_50}>历史</Text>
        </View>
        <View style={styles.View_67_51}>
          <Text style={styles.Text_67_51}>风土人情</Text>
        </View>
      </View>
      <View style={styles.View_67_56} />
      <View style={styles.View_67_57}>
        <Text style={styles.Text_67_57}>更多</Text>
      </View>
      <View style={styles.View_67_2} />
      <View style={styles.View_67_3} />
      <View style={styles.View_67_4}>
        <Text style={styles.Text_67_4}>按时间</Text>
      </View>
      <View style={styles.View_67_5}>
        <Text style={styles.Text_67_5}>按热度</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a35/3f4a/9c12b2867ed8167ae2e8445e76d12be5"
        }}
        style={styles.ImageBackground_67_6}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_64_67}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("67_58"))
        }
      >
        <View style={styles.View_64_68} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c44/2bfd/93cc16792cb2caf8da4d66ffd4a8e0ae"
          }}
          style={styles.ImageBackground_64_69}
        />
        <View style={styles.View_64_70}>
          <Text style={styles.Text_64_70}>微纪录片《南红》</Text>
        </View>
        <View style={styles.View_64_71}>
          <Text style={styles.Text_64_71}>播放：3万</Text>
        </View>
        <View style={styles.View_64_72}>
          <Text style={styles.Text_64_72}>发布：2021-5-10</Text>
        </View>
        <View style={styles.View_67_19}>
          <Text style={styles.Text_67_19}>评论：50</Text>
        </View>
        <View style={styles.View_67_7}>
          <Text style={styles.Text_67_7}>01:45:16</Text>
        </View>
        <View style={styles.View_67_10} />
        <View style={styles.View_67_11} />
        <View style={styles.View_67_12}>
          <Text style={styles.Text_67_12}>纪录片</Text>
        </View>
        <View style={styles.View_67_13}>
          <Text style={styles.Text_67_13}>文化</Text>
        </View>
        <View style={styles.View_67_15} />
        <View style={styles.View_67_16} />
        <View style={styles.View_67_17}>
          <Text style={styles.Text_67_17}>历史</Text>
        </View>
        <View style={styles.View_67_18}>
          <Text style={styles.Text_67_18}>风土人情</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_67_55} />
      <View style={styles.View_67_54}>
        <Text style={styles.Text_67_54}>更多</Text>
      </View>
      <View style={styles.View_64_13} />
      <View style={styles.View_64_54}>
        <Text style={styles.Text_64_54}>作品管理</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4db/8dcd/78f626dbb27b9217c556c3322278cfbe"
        }}
        style={styles.ImageBackground_64_53}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eea/7081/38eba1c212ac0aff834fa9f45aa0bbee"
        }}
        style={styles.ImageBackground_64_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770d/cf9a/296129f080d9e32bd4838d4e8d407ddb"
        }}
        style={styles.ImageBackground_64_15}
      />
      <View style={styles.View_64_56} />
      <View style={styles.View_64_57}>
        <Text style={styles.Text_64_57}>我的作品</Text>
      </View>
      <View style={styles.View_64_58}>
        <Text style={styles.Text_64_58}>我的账户</Text>
      </View>
      <View style={styles.View_67_0}>
        <Text style={styles.Text_67_0}>视频 2</Text>
      </View>
      <View style={styles.View_64_60}>
        <Text style={styles.Text_64_60}>互动消息</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4beb/b9b7/63fe57daff04a1e85c87ce9666f1f3e6"
        }}
        style={styles.ImageBackground_64_62}
      />
      <View style={styles.View_64_66} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_64_55: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.20539730134932%"),
    minHeight: hp("89.20539730134932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.794602698650674%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_67_36: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("33.43328335832084%"),
    minHeight: hp("33.43328335832084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("61.6191904047976%")
  },
  View_67_37: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("33.43328335832084%"),
    minHeight: hp("33.43328335832084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_67_38: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("22.038980509745127%"),
    minHeight: hp("22.038980509745127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_67_39: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("23.538230884557713%"),
    justifyContent: "flex-start"
  },
  Text_67_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_67_52: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("22.038980509745127%"),
    minHeight: hp("22.038980509745127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_67_40: {
    width: wp("17.899544270833335%"),
    minWidth: wp("17.899544270833335%"),
    minHeight: hp("1.9677661169415293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("26.836581709145428%"),
    justifyContent: "flex-start"
  },
  Text_67_40: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_41: {
    width: wp("29.406392415364586%"),
    minWidth: wp("29.406392415364586%"),
    minHeight: hp("1.9677661169415293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("26.836581709145428%"),
    justifyContent: "flex-start"
  },
  Text_67_41: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_42: {
    width: wp("29.406392415364586%"),
    minWidth: wp("29.406392415364586%"),
    minHeight: hp("1.9677661169415293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8%"),
    top: hp("26.836581709145428%"),
    justifyContent: "flex-start"
  },
  Text_67_42: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_43: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%"),
    top: hp("19.34032983508245%"),
    justifyContent: "flex-start"
  },
  Text_67_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_44: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("29.085457271364326%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_45: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("29.085457271364326%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_46: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("29.685157421289354%"),
    justifyContent: "flex-start"
  },
  Text_67_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_47: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.400000000000002%"),
    top: hp("29.685157421289354%"),
    justifyContent: "flex-start"
  },
  Text_67_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_48: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("29.085457271364326%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_49: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.266666666666666%"),
    top: hp("29.085457271364326%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_50: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.466666666666665%"),
    top: hp("29.685157421289354%"),
    justifyContent: "flex-start"
  },
  Text_67_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_51: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666666%"),
    top: hp("29.685157421289354%"),
    justifyContent: "flex-start"
  },
  Text_67_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_56: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("3.4482758620689653%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("87.70614692653673%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(103, 153, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_57: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("88.45577211394303%"),
    justifyContent: "flex-start"
  },
  Text_67_57: {
    color: "rgba(103, 153, 235, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_2: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("21.289355322338828%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_3: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.33333333333334%"),
    top: hp("21.289355322338828%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_4: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("21.88905547226387%"),
    justifyContent: "flex-start"
  },
  Text_67_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_5: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("21.88905547226387%"),
    justifyContent: "flex-start"
  },
  Text_67_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_67_6: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.46666666666667%"),
    top: hp("21.73913043478261%"),
    resizeMode: "cover"
  },
  TouchableOpacity_64_67: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("33.43328335832084%"),
    minHeight: hp("33.43328335832084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("25.937031484257872%")
  },
  View_64_68: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("33.43328335832084%"),
    minHeight: hp("33.43328335832084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_64_69: {
    width: wp("93.33333333333333%"),
    minWidth: wp("93.33333333333333%"),
    height: hp("22.038980509745127%"),
    minHeight: hp("22.038980509745127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_64_70: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("23.53823088455772%"),
    justifyContent: "flex-start"
  },
  Text_64_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_71: {
    width: wp("17.899544270833335%"),
    minWidth: wp("17.899544270833335%"),
    minHeight: hp("1.9677661169415293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("26.836581709145428%"),
    justifyContent: "flex-start"
  },
  Text_64_71: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_72: {
    width: wp("29.406392415364586%"),
    minWidth: wp("29.406392415364586%"),
    minHeight: hp("1.9677661169415293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("26.836581709145428%"),
    justifyContent: "flex-start"
  },
  Text_64_72: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_19: {
    width: wp("29.406392415364586%"),
    minWidth: wp("29.406392415364586%"),
    minHeight: hp("1.9677661169415293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8%"),
    top: hp("26.836581709145428%"),
    justifyContent: "flex-start"
  },
  Text_67_19: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 6,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_7: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%"),
    top: hp("19.340329835082457%"),
    justifyContent: "flex-start"
  },
  Text_67_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_10: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("29.08545727136432%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_11: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000001%"),
    top: hp("29.08545727136432%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_12: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("29.68515742128936%"),
    justifyContent: "flex-start"
  },
  Text_67_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_13: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.400000000000002%"),
    top: hp("29.68515742128936%"),
    justifyContent: "flex-start"
  },
  Text_67_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_15: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("29.08545727136432%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_16: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.266666666666666%"),
    top: hp("29.08545727136432%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_17: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.933333333333334%"),
    top: hp("29.68515742128936%"),
    justifyContent: "flex-start"
  },
  Text_67_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_18: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666666%"),
    top: hp("29.68515742128936%"),
    justifyContent: "flex-start"
  },
  Text_67_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_55: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("3.4482758620689653%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("51.57421289355323%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(103, 153, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_54: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("52.32383808095952%"),
    justifyContent: "flex-start"
  },
  Text_67_54: {
    color: "rgba(103, 153, 235, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_13: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.644677661169414%"),
    minHeight: hp("10.644677661169414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_64_54: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("5.697151424287856%"),
    justifyContent: "flex-start"
  },
  Text_64_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_53: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("3.4482758620689653%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("5.247376311844078%"),
    resizeMode: "cover"
  },
  ImageBackground_64_14: {
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
  ImageBackground_64_15: {
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
  View_64_56: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.19640179910045%"),
    minHeight: hp("7.19640179910045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.644677661169414%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_64_57: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("13.043478260869565%"),
    justifyContent: "flex-start"
  },
  Text_64_57: {
    color: "rgba(103, 153, 235, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_58: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("13.043478260869565%"),
    justifyContent: "flex-start"
  },
  Text_64_58: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_0: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.88905547226387%"),
    justifyContent: "flex-start"
  },
  Text_67_0: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_60: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("13.043478260869565%"),
    justifyContent: "flex-start"
  },
  Text_64_60: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_64_62: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.5997001499250375%"),
    minHeight: hp("0.5997001499250375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.4%"),
    top: hp("12.443778110944528%")
  },
  View_64_66: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("17.541229385307346%"),
    backgroundColor: "rgba(103, 153, 235, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
