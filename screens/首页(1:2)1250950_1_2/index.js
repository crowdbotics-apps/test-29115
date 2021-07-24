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
      <View style={styles.View_41_93}>
        <View style={styles.View_41_94}>
          <Text style={styles.Text_41_94}>学生剧组《拯救》招募</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/76a1/51f9e9fa5738c05c0fb2ada64bd26868"
          }}
          style={styles.ImageBackground_41_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b486/5786/027d9463b41317497d1996d985412395"
          }}
          style={styles.ImageBackground_41_96}
        />
        <View style={styles.View_41_97} />
        <View style={styles.View_41_98}>
          <View style={styles.View_41_99} />
          <View style={styles.View_41_100} />
        </View>
        <View style={styles.View_41_101}>
          <Text style={styles.Text_41_101}>信誉优良</Text>
        </View>
        <View style={styles.View_41_102}>
          <Text style={styles.Text_41_102}>Lynn·演员统筹</Text>
        </View>
        <View style={styles.View_41_103}>
          <Text style={styles.Text_41_103}>
            拍摄时间：5.28-5.30 拍摄地点：北京
          </Text>
        </View>
      </View>
      <View style={styles.View_7_9}>
        <View style={styles.View_7_10} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a0/357c/e63df441b25549bbe2c6716966710adb"
          }}
          style={styles.ImageBackground_7_5}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a64/410e/40e7ea56dc693a96f8bd75af9185c683"
          }}
          style={styles.TouchableOpacity_7_6}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_18"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/801c/8b4f/04843e05d4af4b567263cf81cdc615be"
          }}
          style={styles.TouchableOpacity_7_7}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_0"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f3/0635/42a0aabf3cc59699532d5030bbc7d2a7"
          }}
          style={styles.TouchableOpacity_7_8}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("23_3"))
          }
        />
        <View style={styles.View_7_11}>
          <Text style={styles.Text_7_11}>首页</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_7_12}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_18"))
          }
        >
          <Text style={styles.Text_7_12}>活动</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_7_16}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("23_3"))
          }
        >
          <Text style={styles.Text_7_16}>我的</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_7_15}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_0"))
          }
        >
          <Text style={styles.Text_7_15}>创投客</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.View_41_106} />
      <View style={styles.View_41_11} />
      <View style={styles.View_41_12}>
        <View style={styles.View_41_13}>
          <Text style={styles.Text_41_13}>感兴趣的内容……</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b51/1c3d/01acfdb1e8f5e29ecb228a5153e9accd"
          }}
          style={styles.ImageBackground_41_14}
        />
        <View style={styles.View_41_15} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eea/7081/38eba1c212ac0aff834fa9f45aa0bbee"
        }}
        style={styles.ImageBackground_7_3}
      />
      <View style={styles.View_41_104}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770d/cf9a/296129f080d9e32bd4838d4e8d407ddb"
          }}
          style={styles.ImageBackground_7_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c7/3520/823ce8beaafb8cf748ed534d09c1c6c7"
          }}
          style={styles.ImageBackground_41_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f760/8b63/e1570549e41d706b18e29e7eea8d11a9"
          }}
          style={styles.ImageBackground_41_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8608/29fb/e3445dab885f9e1f8ad4899e0d0da48c"
          }}
          style={styles.ImageBackground_41_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb1/6e88/d57b9cd1a21c37e83e12f25e94337c11"
          }}
          style={styles.ImageBackground_41_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb1/6e88/d57b9cd1a21c37e83e12f25e94337c11"
          }}
          style={styles.ImageBackground_41_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb1/6e88/d57b9cd1a21c37e83e12f25e94337c11"
          }}
          style={styles.ImageBackground_41_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb1/6e88/d57b9cd1a21c37e83e12f25e94337c11"
          }}
          style={styles.ImageBackground_41_22}
        />
      </View>
      <View style={styles.View_41_33}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6266/07ba/c48ac8e4d610495b9b3eb4a0e9acbbb9"
          }}
          style={styles.ImageBackground_41_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98de/188b/0c2b441c3fa491b55aafd07a1dc8d1a8"
          }}
          style={styles.ImageBackground_41_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93b5/f20e/3c09fb3c61df292609a3644d4c3f37ea"
          }}
          style={styles.ImageBackground_41_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9447/1580/a87d73b6e9218417ae7aa5ba71194ede"
          }}
          style={styles.ImageBackground_41_32}
        />
        <View style={styles.View_41_34}>
          <Text style={styles.Text_41_34}>影视</Text>
        </View>
        <View style={styles.View_41_35}>
          <Text style={styles.Text_41_35}>餐饮</Text>
        </View>
        <View style={styles.View_41_36}>
          <Text style={styles.Text_41_36}>娱乐</Text>
        </View>
        <View style={styles.View_41_37}>
          <Text style={styles.Text_41_37}>更多</Text>
        </View>
      </View>
      <View style={styles.View_41_42} />
      <View style={styles.View_41_45}>
        <Text style={styles.Text_41_45}>我的作品</Text>
      </View>
      <View style={styles.View_41_76} />
      <View style={styles.View_41_77}>
        <Text style={styles.Text_41_77}>创投客</Text>
      </View>
      <View style={styles.View_41_62}>
        <View style={styles.View_41_61} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/847b/9a32/0387c71c0b2c721f232562d7cf0e728a"
          }}
          style={styles.ImageBackground_41_55}
        />
        <View style={styles.View_41_56}>
          <Text style={styles.Text_41_56}>微纪录片《南红》</Text>
        </View>
        <View style={styles.View_41_57}>
          <Text style={styles.Text_41_57}>播放：3万</Text>
        </View>
        <View style={styles.View_41_59}>
          <Text style={styles.Text_41_59}>发布：2021-5-10</Text>
        </View>
      </View>
      <View style={styles.View_41_63}>
        <View style={styles.View_41_64} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9eb/e171/55e2a29e97d99e9aaa938859983458ea"
          }}
          style={styles.ImageBackground_41_69}
        />
        <View style={styles.View_41_66}>
          <Text style={styles.Text_41_66}>合作广告《绿色之旅》</Text>
        </View>
        <View style={styles.View_41_67}>
          <Text style={styles.Text_41_67}>播放：100万</Text>
        </View>
        <View style={styles.View_41_68}>
          <Text style={styles.Text_41_68}>发布：2021-5-20</Text>
        </View>
      </View>
      <View style={styles.View_41_70} />
      <View style={styles.View_41_71} />
      <View style={styles.View_41_72}>
        <Text style={styles.Text_41_72}>按时间</Text>
      </View>
      <View style={styles.View_41_73}>
        <Text style={styles.Text_41_73}>按热度</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a35/3f4a/9c12b2867ed8167ae2e8445e76d12be5"
        }}
        style={styles.ImageBackground_41_74}
      />
      <View style={styles.View_41_107} />
      <View style={styles.View_41_108} />
      <View style={styles.View_41_109}>
        <Text style={styles.Text_41_109}>按时间</Text>
      </View>
      <View style={styles.View_41_110}>
        <Text style={styles.Text_41_110}>按热度</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a35/3f4a/9c12b2867ed8167ae2e8445e76d12be5"
        }}
        style={styles.ImageBackground_41_111}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_41_93: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("13.193403298350825%"),
    minHeight: hp("13.193403298350825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("79.91004497751123%")
  },
  View_41_94: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1499250374812675%"),
    justifyContent: "flex-start"
  },
  Text_41_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_95: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("8.395802098950526%"),
    minHeight: hp("8.395802098950526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_41_96: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("9.745127436281876%"),
    resizeMode: "cover"
  },
  View_41_97: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068982%"),
    backgroundColor: "rgba(236, 239, 236, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_41_98: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068982%")
  },
  View_41_99: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_41_100: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(178, 203, 240, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_41_101: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999995%"),
    top: hp("3.8980509745127563%"),
    justifyContent: "flex-start"
  },
  Text_41_101: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_102: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("10.494752623688171%"),
    justifyContent: "flex-start"
  },
  Text_41_102: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_103: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("6.596701649175429%"),
    justifyContent: "flex-start"
  },
  Text_41_103: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_9: {
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
  View_7_10: {
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
  ImageBackground_7_5: {
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
  TouchableOpacity_7_6: {
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
  TouchableOpacity_7_7: {
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
  TouchableOpacity_7_8: {
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
  View_7_11: {
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
  Text_7_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_12: {
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
  Text_7_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_16: {
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
  Text_7_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_7_15: {
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
  Text_7_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_106: {
    width: wp("103.2%"),
    minWidth: wp("103.2%"),
    height: hp("0.029985007943063302%"),
    minHeight: hp("0.029985007943063302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("78.86056971514243%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_41_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("23.53823088455772%"),
    minHeight: hp("23.53823088455772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_41_12: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.397301349325337%")
  },
  View_41_13: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333335%"),
    top: hp("1.0494752623688166%"),
    justifyContent: "flex-start"
  },
  Text_41_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_14: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("1.0494752623688166%"),
    resizeMode: "cover"
  },
  View_41_15: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  ImageBackground_7_3: {
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
  View_41_104: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("33.733133433283356%"),
    minHeight: hp("33.733133433283356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.6491754122938531%")
  },
  ImageBackground_7_4: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_41_17: {
    width: wp("90.93333333333334%"),
    minWidth: wp("90.93333333333334%"),
    height: hp("23.388305847076463%"),
    minHeight: hp("23.388305847076463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.344827586206895%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_41_23: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("20.83958020989505%"),
    resizeMode: "cover"
  },
  ImageBackground_41_18: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("0.7496251874062968%"),
    minHeight: hp("0.7496251874062968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("11.544227886056971%")
  },
  ImageBackground_41_19: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("0.7496251874062968%"),
    minHeight: hp("0.7496251874062968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.6%"),
    top: hp("11.544227886056971%")
  },
  ImageBackground_41_20: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("0.7496251874062968%"),
    minHeight: hp("0.7496251874062968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("11.544227886056971%")
  },
  ImageBackground_41_21: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("0.7496251874062968%"),
    minHeight: hp("0.7496251874062968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("11.544227886056971%")
  },
  ImageBackground_41_22: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("0.7496251874062968%"),
    minHeight: hp("0.7496251874062968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("11.544227886056971%")
  },
  View_41_33: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("8.995502248875562%"),
    minHeight: hp("8.995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("38.3808095952024%")
  },
  ImageBackground_41_29: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("5.697151424287856%"),
    minHeight: hp("5.697151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0.2998500749625208%"),
    resizeMode: "cover"
  },
  ImageBackground_41_30: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("5.847076461769116%"),
    minHeight: hp("5.847076461769116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_41_31: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("5.247376311844078%"),
    minHeight: hp("5.247376311844078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666667%"),
    top: hp("0.7496251874062949%"),
    resizeMode: "cover"
  },
  ImageBackground_41_32: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.697151424287856%"),
    minHeight: hp("5.697151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1499250374812604%"),
    resizeMode: "cover"
  },
  View_41_34: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("7.34632683658171%"),
    justifyContent: "flex-start"
  },
  Text_41_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_35: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("7.34632683658171%"),
    justifyContent: "flex-start"
  },
  Text_41_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_36: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.400000000000006%"),
    top: hp("7.34632683658171%"),
    justifyContent: "flex-start"
  },
  Text_41_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_37: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("7.34632683658171%"),
    justifyContent: "flex-start"
  },
  Text_41_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_42: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("49.92503748125937%"),
    backgroundColor: "rgba(104, 125, 255, 1)"
  },
  View_41_45: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("50.67466266866567%"),
    justifyContent: "flex-start"
  },
  Text_41_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_76: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("74.81259370314842%"),
    backgroundColor: "rgba(104, 125, 255, 1)"
  },
  View_41_77: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("75.56221889055472%"),
    justifyContent: "flex-start"
  },
  Text_41_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_62: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("17.691154422788603%"),
    minHeight: hp("17.691154422788603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("55.02248875562219%")
  },
  View_41_61: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("17.691154422788603%"),
    minHeight: hp("17.691154422788603%"),
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
  ImageBackground_41_55: {
    width: wp("39.15981852213542%"),
    minWidth: wp("39.15981852213542%"),
    height: hp("11.244377811094452%"),
    minHeight: hp("11.244377811094452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.753426106770834%"),
    top: hp("0.8995502248875553%"),
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_41_56: {
    width: wp("21.041094970703124%"),
    minWidth: wp("21.041094970703124%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.753426106770834%"),
    top: hp("13.043478260869563%"),
    justifyContent: "flex-start"
  },
  Text_41_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_57: {
    width: wp("8.182648722330729%"),
    minWidth: wp("8.182648722330729%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.753426106770834%"),
    top: hp("14.99250374812594%"),
    justifyContent: "flex-start"
  },
  Text_41_57: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_59: {
    width: wp("13.442921956380207%"),
    minWidth: wp("13.442921956380207%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.470318603515622%"),
    top: hp("14.99250374812594%"),
    justifyContent: "flex-start"
  },
  Text_41_59: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_63: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("17.691154422788603%"),
    minHeight: hp("17.691154422788603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("55.02248875562219%")
  },
  View_41_64: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("17.691154422788603%"),
    minHeight: hp("17.691154422788603%"),
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
  ImageBackground_41_69: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("11.394302848575713%"),
    minHeight: hp("11.394302848575713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.8995502248875553%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_41_66: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("13.043478260869563%"),
    justifyContent: "flex-start"
  },
  Text_41_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_67: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("14.99250374812594%"),
    justifyContent: "flex-start"
  },
  Text_41_67: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_68: {
    width: wp("13.442921956380207%"),
    minWidth: wp("13.442921956380207%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.470318603515622%"),
    top: hp("14.99250374812594%"),
    justifyContent: "flex-start"
  },
  Text_41_68: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_70: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%"),
    top: hp("50.67466266866567%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_41_71: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("50.67466266866567%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_41_72: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("51.2743628185907%"),
    justifyContent: "flex-start"
  },
  Text_41_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_73: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.33333333333334%"),
    top: hp("51.2743628185907%"),
    justifyContent: "flex-start"
  },
  Text_41_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_74: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("51.12443778110944%"),
    resizeMode: "cover"
  },
  View_41_107: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%"),
    top: hp("74.96251874062968%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_41_108: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%"),
    top: hp("74.96251874062968%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_41_109: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("75.56221889055472%"),
    justifyContent: "flex-start"
  },
  Text_41_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_110: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.33333333333334%"),
    top: hp("75.56221889055472%"),
    justifyContent: "flex-start"
  },
  Text_41_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_111: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    top: hp("75.41229385307346%"),
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
