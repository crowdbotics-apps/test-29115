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
      <View style={styles.View_23_5} />
      <View style={styles.View_23_7}>
        <View style={styles.View_23_8} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a0/357c/e63df441b25549bbe2c6716966710adb"
          }}
          style={styles.ImageBackground_23_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a64/410e/40e7ea56dc693a96f8bd75af9185c683"
          }}
          style={styles.ImageBackground_23_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/801c/8b4f/04843e05d4af4b567263cf81cdc615be"
          }}
          style={styles.ImageBackground_23_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f3/0635/42a0aabf3cc59699532d5030bbc7d2a7"
          }}
          style={styles.ImageBackground_23_12}
        />
        <View style={styles.View_23_13}>
          <Text style={styles.Text_23_13}>首页</Text>
        </View>
        <View style={styles.View_23_14}>
          <Text style={styles.Text_23_14}>活动</Text>
        </View>
        <View style={styles.View_23_15}>
          <Text style={styles.Text_23_15}>我的</Text>
        </View>
        <View style={styles.View_23_16}>
          <Text style={styles.Text_23_16}>创投客</Text>
        </View>
      </View>
      <View style={styles.View_23_17} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eea/7081/38eba1c212ac0aff834fa9f45aa0bbee"
        }}
        style={styles.ImageBackground_23_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770d/cf9a/296129f080d9e32bd4838d4e8d407ddb"
        }}
        style={styles.ImageBackground_23_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fda6/26c9/859d76cf6a9ed4cd787fe96714b09ace"
        }}
        style={styles.ImageBackground_26_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a24/830b/d4c939d9455ca5636cff61003699e2ee"
        }}
        style={styles.ImageBackground_26_1}
      />
      <View style={styles.View_26_3}>
        <Text style={styles.Text_26_3}>Olivia·Wang</Text>
      </View>
      <View style={styles.View_26_7}>
        <Text style={styles.Text_26_7}>已认证</Text>
      </View>
      <View style={styles.View_26_6} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c23/43b0/7b821ff8985f39048b092aaeb7d59d3e"
        }}
        style={styles.ImageBackground_26_8}
      />
      <View style={styles.View_26_9}>
        <Text style={styles.Text_26_9}>中国传媒大学·2019级文化产业管理</Text>
      </View>
      <View style={styles.View_26_19} />
      <View style={styles.View_26_20} />
      <View style={styles.View_26_11}>
        <Text style={styles.Text_26_11}>关注</Text>
      </View>
      <View style={styles.View_26_28}>
        <Text style={styles.Text_26_28}>卡券</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5e/0e4a/a065700f6b51a1a62438e9680be4e11b"
        }}
        style={styles.ImageBackground_26_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5e/0e4a/a065700f6b51a1a62438e9680be4e11b"
        }}
        style={styles.ImageBackground_26_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5e/0e4a/a065700f6b51a1a62438e9680be4e11b"
        }}
        style={styles.ImageBackground_26_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5e/0e4a/a065700f6b51a1a62438e9680be4e11b"
        }}
        style={styles.ImageBackground_26_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5e/0e4a/a065700f6b51a1a62438e9680be4e11b"
        }}
        style={styles.ImageBackground_26_42}
      />
      <View style={styles.View_26_29}>
        <Text style={styles.Text_26_29}>签到</Text>
      </View>
      <View style={styles.View_26_32}>
        <Text style={styles.Text_26_32}>设置</Text>
      </View>
      <View style={styles.View_26_33}>
        <Text style={styles.Text_26_33}>作品管理</Text>
      </View>
      <View style={styles.View_26_31}>
        <Text style={styles.Text_26_31}>客服中心</Text>
      </View>
      <View style={styles.View_26_12}>
        <Text style={styles.Text_26_12}>收藏</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7af7/ce5b/29af6d023441105c770186fa590ba8d8"
        }}
        style={styles.ImageBackground_26_16}
      />
      <View style={styles.View_26_13}>
        <Text style={styles.Text_26_13}>订单</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c31/f434/d07f64bade89935622d30a03488799a7"
        }}
        style={styles.ImageBackground_26_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4785/5654/435aec9bc0f8b362dfeca67d4da8c043"
        }}
        style={styles.ImageBackground_26_15}
      />
      <View style={styles.View_26_23} />
      <View style={styles.View_26_24} />
      <View style={styles.View_26_25} />
      <View style={styles.View_26_26} />
      <View style={styles.View_41_1} />
      <View style={styles.View_41_3}>
        <Text style={styles.Text_41_3}>消费会员</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4342/ee66/1a3c199cfc98c2896ed74e47679c2bf9"
        }}
        style={styles.ImageBackground_41_0}
      />
      <View style={styles.View_41_2} />
      <View style={styles.View_41_38} />
      <View style={styles.View_41_39}>
        <Text style={styles.Text_41_39}>专业会员</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4342/ee66/1a3c199cfc98c2896ed74e47679c2bf9"
        }}
        style={styles.ImageBackground_41_40}
      />
      <View style={styles.View_41_41} />
      <TouchableOpacity
        style={styles.TouchableOpacity_82_8}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("64_0"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_23_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_23_7: {
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
  View_23_8: {
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
  ImageBackground_23_9: {
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
  ImageBackground_23_10: {
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
  ImageBackground_23_11: {
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
  ImageBackground_23_12: {
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
  View_23_13: {
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
  Text_23_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_14: {
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
  Text_23_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_15: {
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
  Text_23_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_16: {
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
  Text_23_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_17: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.89055472263868%"),
    minHeight: hp("18.89055472263868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_18: {
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
  ImageBackground_23_19: {
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
  ImageBackground_26_2: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("11.994002998500749%"),
    minHeight: hp("11.994002998500749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("12.893553223388308%")
  },
  ImageBackground_26_1: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("11.994002998500749%"),
    minHeight: hp("11.994002998500749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("12.893553223388308%"),
    resizeMode: "cover"
  },
  View_26_3: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("20.839580209895054%"),
    justifyContent: "flex-start"
  },
  Text_26_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_7: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("21.58920539730135%"),
    justifyContent: "flex-start"
  },
  Text_26_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_6: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("20.98950524737631%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_26_8: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    height: hp("1.0494752623688157%"),
    minHeight: hp("1.0494752623688157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("24.737631184407796%"),
    resizeMode: "cover"
  },
  View_26_9: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("24.587706146926536%"),
    justifyContent: "flex-start"
  },
  Text_26_9: {
    color: "rgba(122, 122, 122, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_19: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("8.095952023988005%"),
    minHeight: hp("8.095952023988005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("28.335832083958024%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_26_20: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("37.48125937031484%"),
    minHeight: hp("37.48125937031484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("39.130434782608695%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_26_11: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("31.03448275862069%"),
    justifyContent: "flex-start"
  },
  Text_26_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_28: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("41.82908545727136%"),
    justifyContent: "flex-start"
  },
  Text_26_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_26_38: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("41.82908545727136%"),
    resizeMode: "cover"
  },
  ImageBackground_26_39: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("48.87556221889056%"),
    resizeMode: "cover"
  },
  ImageBackground_26_40: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("56.37181409295352%"),
    resizeMode: "cover"
  },
  ImageBackground_26_41: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("63.8680659670165%"),
    resizeMode: "cover"
  },
  ImageBackground_26_42: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("71.36431784107945%"),
    resizeMode: "cover"
  },
  View_26_29: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("48.87556221889056%"),
    justifyContent: "flex-start"
  },
  Text_26_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_32: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("71.36431784107945%"),
    justifyContent: "flex-start"
  },
  Text_26_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_33: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("56.37181409295352%"),
    justifyContent: "flex-start"
  },
  Text_26_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_31: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("63.8680659670165%"),
    justifyContent: "flex-start"
  },
  Text_26_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_12: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%"),
    top: hp("31.03448275862069%"),
    justifyContent: "flex-start"
  },
  Text_26_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_26_16: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("31.03448275862069%"),
    resizeMode: "cover"
  },
  View_26_13: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("31.03448275862069%"),
    justifyContent: "flex-start"
  },
  Text_26_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_26_17: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("31.03448275862069%"),
    resizeMode: "cover"
  },
  ImageBackground_26_15: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("31.03448275862069%"),
    resizeMode: "cover"
  },
  View_26_23: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0.14992503748125938%"),
    minHeight: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("46.476761619190405%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_26_24: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0.14992503748125938%"),
    minHeight: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("53.973013493253376%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_26_25: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0.14992503748125938%"),
    minHeight: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("61.46926536731634%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_26_26: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0.14992503748125938%"),
    minHeight: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("68.96551724137932%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_41_1: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("14.842578710644677%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.6000000238418579,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_41_3: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("15.292353823088456%"),
    justifyContent: "flex-start"
  },
  Text_41_3: {
    color: "rgba(109, 109, 109, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_0: {
    width: wp("1.652282460530599%"),
    minWidth: wp("1.652282460530599%"),
    height: hp("0.9911933938960085%"),
    minHeight: hp("0.9911933938960085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("15.592203898050974%"),
    resizeMode: "cover"
  },
  View_41_2: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("14.842578710644677%"),
    backgroundColor: "rgba(84, 122, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_41_38: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("14.842578710644677%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.6000000238418579,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_41_39: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%"),
    top: hp("15.292353823088456%"),
    justifyContent: "flex-start"
  },
  Text_41_39: {
    color: "rgba(109, 109, 109, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_40: {
    width: wp("1.652282460530599%"),
    minWidth: wp("1.652282460530599%"),
    height: hp("0.9911933938960085%"),
    minHeight: hp("0.9911933938960085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    top: hp("15.592203898050974%"),
    resizeMode: "cover"
  },
  View_41_41: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("14.842578710644677%"),
    backgroundColor: "rgba(180, 105, 105, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  TouchableOpacity_82_8: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("7.19640179910045%"),
    minHeight: hp("7.19640179910045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("54.27286356821589%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
