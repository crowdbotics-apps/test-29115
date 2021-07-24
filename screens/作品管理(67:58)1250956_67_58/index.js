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
      <View style={styles.View_67_59} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c34f/82bd/4c55c82bc55f883460986ed238e3c1df"
        }}
        style={styles.ImageBackground_67_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77db/d4a1/6415d037da997f735155905ef5d07ca3"
        }}
        style={styles.ImageBackground_67_157}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c739/5d89/a85c7b84c9b835700342fe513eb3578e"
        }}
        style={styles.ImageBackground_67_156}
      />
      <View style={styles.View_67_154} />
      <View style={styles.View_67_155}>
        <Text style={styles.Text_67_155}>演职员</Text>
      </View>
      <View style={styles.View_67_181} />
      <View style={styles.View_67_182}>
        <Text style={styles.Text_67_182}>评论区</Text>
      </View>
      <View style={styles.View_67_153}>
        <Text style={styles.Text_67_153}>
          京剧艺术大师梅兰芳先生的传记电影，但多处描写与史实不符。
          唱了大半辈子戏的大伯因在西太后寿辰中顾及家中出殡未穿红被赐一纸枷锁后,少年梅兰芳将他临死留下的一封书信随身携带，开始跟随与梅家有世交的京剧老生名角十三燕（王学圻）学唱戏……
        </Text>
      </View>
      <View style={styles.View_67_150} />
      <View style={styles.View_67_151}>
        <Text style={styles.Text_67_151}>简介</Text>
      </View>
      <View style={styles.View_67_161}>
        <Text style={styles.Text_67_161}>陈凯歌</Text>
      </View>
      <View style={styles.View_67_173}>
        <Text style={styles.Text_67_173}>导演</Text>
      </View>
      <View style={styles.View_67_174}>
        <Text style={styles.Text_67_174}>黎明</Text>
      </View>
      <View style={styles.View_67_175}>
        <Text style={styles.Text_67_175}>饰 梅兰芳</Text>
      </View>
      <View style={styles.View_67_176}>
        <Text style={styles.Text_67_176}>章子怡</Text>
      </View>
      <View style={styles.View_67_177}>
        <Text style={styles.Text_67_177}>饰 孟小冬</Text>
      </View>
      <View style={styles.View_67_178}>
        <Text style={styles.Text_67_178}>孙红雷</Text>
      </View>
      <View style={styles.View_67_179}>
        <Text style={styles.Text_67_179}>饰 邱如白</Text>
      </View>
      <View style={styles.View_67_138} />
      <View style={styles.View_67_139} />
      <View style={styles.View_67_140}>
        <Text style={styles.Text_67_140}>剧情片</Text>
      </View>
      <View style={styles.View_67_141}>
        <Text style={styles.Text_67_141}>国产片</Text>
      </View>
      <View style={styles.View_67_134} />
      <View style={styles.View_67_135} />
      <View style={styles.View_67_136}>
        <Text style={styles.Text_67_136}>传记</Text>
      </View>
      <View style={styles.View_67_137}>
        <Text style={styles.Text_67_137}>历史</Text>
      </View>
      <View style={styles.View_67_132} />
      <View style={styles.View_67_133}>
        <Text style={styles.Text_67_133}>No.16/华语传记片榜</Text>
      </View>
      <View style={styles.View_67_128}>
        <Text style={styles.Text_67_128}>梅兰芳</Text>
      </View>
      <View style={styles.View_67_129}>
        <Text style={styles.Text_67_129}>（2008-12-05上映/片长147分钟）</Text>
      </View>
      <View style={styles.View_67_113} />
      <View style={styles.View_67_183} />
      <View style={styles.View_67_184}>
        <Text style={styles.Text_67_184}>在线预约</Text>
      </View>
      <View style={styles.View_67_114}>
        <Text style={styles.Text_67_114}>影片详情</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4db/8dcd/78f626dbb27b9217c556c3322278cfbe"
        }}
        style={styles.ImageBackground_67_115}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eea/7081/38eba1c212ac0aff834fa9f45aa0bbee"
        }}
        style={styles.ImageBackground_67_116}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770d/cf9a/296129f080d9e32bd4838d4e8d407ddb"
        }}
        style={styles.ImageBackground_67_117}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ccc/bf17/cc7e715e7c7825261d314e2ee806e9db"
        }}
        style={styles.ImageBackground_67_127}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3594/b72a/089e6ebc8c611c07bdd23d22c78ce5bd"
        }}
        style={styles.ImageBackground_67_158}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_67_59: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("92.95352323838081%"),
    minHeight: hp("92.95352323838081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("7.04647676161919%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  ImageBackground_67_159: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("15.892053973013493%"),
    minHeight: hp("15.892053973013493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("60.41979010494752%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_67_157: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("15.592203898050974%"),
    minHeight: hp("15.592203898050974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("60.569715142428784%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_67_156: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("15.592203898050974%"),
    minHeight: hp("15.592203898050974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("60.569715142428784%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_67_154: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("55.62218890554723%"),
    backgroundColor: "rgba(104, 125, 255, 1)"
  },
  View_67_155: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("56.37181409295352%"),
    justifyContent: "flex-start"
  },
  Text_67_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_181: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("84.55772113943029%"),
    backgroundColor: "rgba(104, 125, 255, 1)"
  },
  View_67_182: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("85.30734632683658%"),
    justifyContent: "flex-start"
  },
  Text_67_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_153: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("41.07946026986507%"),
    justifyContent: "flex-start"
  },
  Text_67_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_150: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("36.13193403298351%"),
    backgroundColor: "rgba(104, 125, 255, 1)"
  },
  View_67_151: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("36.8815592203898%"),
    justifyContent: "flex-start"
  },
  Text_67_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_161: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.4992503748125936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("77.06146926536732%"),
    justifyContent: "flex-start"
  },
  Text_67_161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_173: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("1.0494752623688157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("79.01049475262369%"),
    justifyContent: "flex-start"
  },
  Text_67_173: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_174: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("1.4992503748125936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("77.06146926536732%"),
    justifyContent: "flex-start"
  },
  Text_67_174: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_175: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.0494752623688157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("79.01049475262369%"),
    justifyContent: "flex-start"
  },
  Text_67_175: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_176: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.4992503748125936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("77.06146926536732%"),
    justifyContent: "flex-start"
  },
  Text_67_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_177: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.0494752623688157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("79.01049475262369%"),
    justifyContent: "flex-start"
  },
  Text_67_177: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_178: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.4992503748125936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("77.06146926536732%"),
    justifyContent: "flex-start"
  },
  Text_67_178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_179: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.0494752623688157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("79.01049475262369%"),
    justifyContent: "flex-start"
  },
  Text_67_179: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_138: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.133333333333326%"),
    top: hp("26.686656671664167%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_139: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("26.686656671664167%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_140: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("27.2863568215892%"),
    justifyContent: "flex-start"
  },
  Text_67_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_141: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("27.2863568215892%"),
    justifyContent: "flex-start"
  },
  Text_67_141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_134: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666666%"),
    top: hp("26.686656671664167%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_135: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.6%"),
    top: hp("26.686656671664167%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_136: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("27.2863568215892%"),
    justifyContent: "flex-start"
  },
  Text_67_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_137: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("27.2863568215892%"),
    justifyContent: "flex-start"
  },
  Text_67_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_132: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666666%"),
    top: hp("22.488755622188904%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(103, 153, 235, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_67_133: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("1.4992503748125936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("23.088455772113946%"),
    justifyContent: "flex-start"
  },
  Text_67_133: {
    color: "rgba(103, 153, 235, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_128: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("15.442278860569717%"),
    justifyContent: "flex-start"
  },
  Text_67_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_129: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("19.640179910044978%"),
    justifyContent: "flex-start"
  },
  Text_67_129: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_113: {
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
  View_67_183: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.995502248875562%"),
    minHeight: hp("8.995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91.00449775112443%"),
    backgroundColor: "rgba(98, 144, 243, 1)"
  },
  View_67_184: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.733333333333334%"),
    top: hp("93.85307346326837%"),
    justifyContent: "flex-start"
  },
  Text_67_184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_114: {
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
  Text_67_114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_67_115: {
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
  ImageBackground_67_116: {
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
  ImageBackground_67_117: {
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
  ImageBackground_67_127: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    height: hp("19.640179910044978%"),
    minHeight: hp("19.640179910044978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("12.593703148425787%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_67_158: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("15.592203898050974%"),
    minHeight: hp("15.592203898050974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("60.569715142428784%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
