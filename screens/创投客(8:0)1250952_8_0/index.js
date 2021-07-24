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
      <View style={styles.View_17_1} />
      <View style={styles.View_17_4} />
      <View style={styles.View_8_2}>
        <View style={styles.View_8_3} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a0/357c/e63df441b25549bbe2c6716966710adb"
          }}
          style={styles.ImageBackground_8_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a64/410e/40e7ea56dc693a96f8bd75af9185c683"
          }}
          style={styles.ImageBackground_8_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/801c/8b4f/04843e05d4af4b567263cf81cdc615be"
          }}
          style={styles.ImageBackground_8_6}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f3/0635/42a0aabf3cc59699532d5030bbc7d2a7"
          }}
          style={styles.TouchableOpacity_8_7}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("23_3"))
          }
        />
        <View style={styles.View_8_8}>
          <Text style={styles.Text_8_8}>首页</Text>
        </View>
        <View style={styles.View_8_9}>
          <Text style={styles.Text_8_9}>活动</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_10}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("23_3"))
          }
        >
          <Text style={styles.Text_8_10}>我的</Text>
        </TouchableOpacity>
        <View style={styles.View_8_11}>
          <Text style={styles.Text_8_11}>创投客</Text>
        </View>
      </View>
      <View style={styles.View_8_12} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eea/7081/38eba1c212ac0aff834fa9f45aa0bbee"
        }}
        style={styles.ImageBackground_8_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770d/cf9a/296129f080d9e32bd4838d4e8d407ddb"
        }}
        style={styles.ImageBackground_8_38}
      />
      <View style={styles.View_12_1}>
        <View style={styles.View_8_14}>
          <Text style={styles.Text_8_14}>感兴趣的内容……</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b51/1c3d/01acfdb1e8f5e29ecb228a5153e9accd"
          }}
          style={styles.ImageBackground_11_2}
        />
        <View style={styles.View_10_2} />
      </View>
      <View style={styles.View_12_2} />
      <View style={styles.View_12_3}>
        <Text style={styles.Text_12_3}>+</Text>
      </View>
      <View style={styles.View_17_0} />
      <View style={styles.View_17_2} />
      <View style={styles.View_17_3} />
      <View style={styles.View_22_35}>
        <View style={styles.View_22_36}>
          <Text style={styles.Text_22_36}>学生剧组《夏日大作战》招募</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/76a1/51f9e9fa5738c05c0fb2ada64bd26868"
          }}
          style={styles.ImageBackground_22_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b486/5786/027d9463b41317497d1996d985412395"
          }}
          style={styles.ImageBackground_22_38}
        />
        <View style={styles.View_23_94} />
        <View style={styles.View_22_39}>
          <View style={styles.View_22_40} />
          <View style={styles.View_22_41} />
        </View>
        <View style={styles.View_22_42}>
          <Text style={styles.Text_22_42}>信誉优良</Text>
        </View>
        <View style={styles.View_22_43}>
          <Text style={styles.Text_22_43}>Higher Brother·制片人</Text>
        </View>
        <View style={styles.View_22_44}>
          <Text style={styles.Text_22_44}>
            拍摄时间：6.5-6.8 拍摄地点：北京
          </Text>
        </View>
      </View>
      <View style={styles.View_22_45}>
        <View style={styles.View_22_46}>
          <Text style={styles.Text_22_46}>学生剧组《拯救》招募</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/76a1/51f9e9fa5738c05c0fb2ada64bd26868"
          }}
          style={styles.ImageBackground_22_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b486/5786/027d9463b41317497d1996d985412395"
          }}
          style={styles.ImageBackground_22_48}
        />
        <View style={styles.View_23_95} />
        <View style={styles.View_22_49}>
          <View style={styles.View_22_50} />
          <View style={styles.View_22_51} />
        </View>
        <View style={styles.View_22_52}>
          <Text style={styles.Text_22_52}>信誉优良</Text>
        </View>
        <View style={styles.View_22_53}>
          <Text style={styles.Text_22_53}>Lynn·演员统筹</Text>
        </View>
        <View style={styles.View_22_54}>
          <Text style={styles.Text_22_54}>
            拍摄时间：5.28-5.30 拍摄地点：北京
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e427/5cb6/6a15f2935063bb1bd3f26b4dcbcb8cd4"
        }}
        style={styles.ImageBackground_41_6}
      />
      <View style={styles.View_17_5}>
        <Text style={styles.Text_17_5}>推荐</Text>
      </View>
      <View style={styles.View_17_6}>
        <Text style={styles.Text_17_6}>附近</Text>
      </View>
      <View style={styles.View_17_8}>
        <Text style={styles.Text_17_8}>最新</Text>
      </View>
      <View style={styles.View_17_9} />
      <View style={styles.View_17_10} />
      <View style={styles.View_17_12} />
      <View style={styles.View_21_0} />
      <View style={styles.View_21_3} />
      <View style={styles.View_21_5} />
      <View style={styles.View_17_11}>
        <Text style={styles.Text_17_11}>学生剧组</Text>
      </View>
      <View style={styles.View_17_13}>
        <Text style={styles.Text_17_13}>公司项目</Text>
      </View>
      <View style={styles.View_21_2}>
        <Text style={styles.Text_21_2}>北京</Text>
      </View>
      <View style={styles.View_21_4}>
        <Text style={styles.Text_21_4}>按时间</Text>
      </View>
      <View style={styles.View_21_6}>
        <Text style={styles.Text_21_6}>按热度</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a35/3f4a/9c12b2867ed8167ae2e8445e76d12be5"
        }}
        style={styles.ImageBackground_21_8}
      />
      <View style={styles.View_21_9} />
      <View style={styles.View_22_5} />
      <View style={styles.View_22_24}>
        <View style={styles.View_22_0}>
          <Text style={styles.Text_22_0}>学生剧组《女娲》招募</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/76a1/51f9e9fa5738c05c0fb2ada64bd26868"
          }}
          style={styles.ImageBackground_22_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b486/5786/027d9463b41317497d1996d985412395"
          }}
          style={styles.ImageBackground_22_10}
        />
        <View style={styles.View_22_11}>
          <View style={styles.View_22_4} />
          <View style={styles.View_22_3} />
        </View>
        <View style={styles.View_22_7}>
          <Text style={styles.Text_22_7}>信誉优良</Text>
        </View>
        <View style={styles.View_22_14}>
          <Text style={styles.Text_22_14}>Olivia·制片人</Text>
        </View>
        <View style={styles.View_22_12}>
          <Text style={styles.Text_22_12}>
            拍摄时间：六月中下旬 拍摄地点：北京
          </Text>
        </View>
      </View>
      <View style={styles.View_22_25}>
        <View style={styles.View_22_26}>
          <Text style={styles.Text_22_26}>里予影业《白鹤亮翅》项目发布</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5c8/9f5d/479c0742db4ffc22d524c028d8c1394a"
          }}
          style={styles.ImageBackground_23_0}
        />
        <View style={styles.View_22_57} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b486/5786/027d9463b41317497d1996d985412395"
          }}
          style={styles.ImageBackground_22_28}
        />
        <View style={styles.View_22_29}>
          <View style={styles.View_22_30} />
          <View style={styles.View_22_31} />
        </View>
        <View style={styles.View_22_58} />
        <View style={styles.View_22_59}>
          <View style={styles.View_22_60} />
          <View style={styles.View_22_61} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b902/b9c0/83b2eebf4b3472834a2a2a0078744fdd"
          }}
          style={styles.ImageBackground_23_1}
        />
        <View style={styles.View_22_32}>
          <Text style={styles.Text_22_32}>信誉优良</Text>
        </View>
        <View style={styles.View_22_62}>
          <Text style={styles.Text_22_62}>认证企业</Text>
        </View>
        <View style={styles.View_22_33}>
          <Text style={styles.Text_22_33}>Ella·选角导演</Text>
        </View>
        <View style={styles.View_22_34}>
          <Text style={styles.Text_22_34}>
            开机时间：8月底/80天 拍摄地点：东北、海南
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2ab/6856/820000f4eb2f68cc04ac57c8f8f6efb9"
        }}
        style={styles.ImageBackground_23_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2686/4b47/d35ab52e8ebb298a9d102f7c7c5906bb"
        }}
        style={styles.ImageBackground_26_0}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_17_1: {
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
  View_17_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.49175412293853%"),
    minHeight: hp("16.49175412293853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.31334332833583%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_2: {
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
  View_8_3: {
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
  ImageBackground_8_4: {
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
  ImageBackground_8_5: {
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
  ImageBackground_8_6: {
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
  TouchableOpacity_8_7: {
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
  View_8_8: {
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
  Text_8_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_9: {
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
  Text_8_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_10: {
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
  Text_8_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_11: {
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
  Text_8_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_12: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.044977511244378%"),
    minHeight: hp("10.044977511244378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_37: {
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
  ImageBackground_8_38: {
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
  View_12_1: {
    width: wp("66.13333333333333%"),
    minWidth: wp("66.13333333333333%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("5.547226386806597%")
  },
  View_8_14: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("1.0494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_8_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_2: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.8995502248875571%"),
    resizeMode: "cover"
  },
  View_10_2: {
    width: wp("66.13333333333333%"),
    minWidth: wp("66.13333333333333%"),
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
  View_12_2: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("5.547226386806597%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.6399999856948853,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_12_3: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("5.997001499250374%"),
    justifyContent: "flex-start"
  },
  Text_12_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27.136431784107945%"),
    minHeight: hp("27.136431784107945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.044977511244378%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.49175412293853%"),
    minHeight: hp("16.49175412293853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.23088455772114%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.49175412293853%"),
    minHeight: hp("16.49175412293853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6%"),
    top: hp("55.77211394302849%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_22_35: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("12.443778110944528%"),
    minHeight: hp("12.443778110944528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("57.721139430284865%")
  },
  View_22_36: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1499250374812533%"),
    justifyContent: "flex-start"
  },
  Text_22_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_22_37: {
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
  ImageBackground_22_38: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("9.745127436281848%"),
    resizeMode: "cover"
  },
  View_23_94: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068961%"),
    backgroundColor: "rgba(236, 239, 236, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_22_39: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068961%")
  },
  View_22_40: {
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
  View_22_41: {
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
  View_22_42: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999995%"),
    top: hp("3.898050974512735%"),
    justifyContent: "flex-start"
  },
  Text_22_42: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_43: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("10.494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_22_43: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_44: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("6.596701649175401%"),
    justifyContent: "flex-start"
  },
  Text_22_44: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_45: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("13.193403298350825%"),
    minHeight: hp("13.193403298350825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("75.86206896551724%")
  },
  View_22_46: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1499250374812533%"),
    justifyContent: "flex-start"
  },
  Text_22_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_22_47: {
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
  ImageBackground_22_48: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("9.745127436281862%"),
    resizeMode: "cover"
  },
  View_23_95: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068968%"),
    backgroundColor: "rgba(236, 239, 236, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_22_49: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068968%")
  },
  View_22_50: {
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
  View_22_51: {
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
  View_22_52: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999995%"),
    top: hp("3.898050974512742%"),
    justifyContent: "flex-start"
  },
  Text_22_52: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_53: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("10.494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_22_53: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_54: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("6.596701649175415%"),
    justifyContent: "flex-start"
  },
  Text_22_54: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_6: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("8.395802098950526%"),
    minHeight: hp("8.395802098950526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("75.86206896551724%"),
    resizeMode: "cover",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_17_5: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11.694152923538232%"),
    justifyContent: "flex-start"
  },
  Text_17_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_6: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("11.694152923538232%"),
    justifyContent: "flex-start"
  },
  Text_17_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_8: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("11.694152923538232%"),
    justifyContent: "flex-start"
  },
  Text_17_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_9: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14.69265367316342%"),
    backgroundColor: "rgba(136, 215, 186, 1)",
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_17_10: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("16.64167916041979%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_17_12: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("16.64167916041979%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_21_0: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("16.64167916041979%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_21_3: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    top: hp("16.64167916041979%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_21_5: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    top: hp("16.64167916041979%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0.27000001072883606,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90
  },
  View_17_11: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("17.24137931034483%"),
    justifyContent: "flex-start"
  },
  Text_17_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_13: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("17.24137931034483%"),
    justifyContent: "flex-start"
  },
  Text_17_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_2: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("17.24137931034483%"),
    justifyContent: "flex-start"
  },
  Text_21_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_4: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("17.24137931034483%"),
    justifyContent: "flex-start"
  },
  Text_21_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_6: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("17.24137931034483%"),
    justifyContent: "flex-start"
  },
  Text_21_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_8: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.7991004497751124%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("17.09145427286357%"),
    resizeMode: "cover"
  },
  View_21_9: {
    width: wp("103.2%"),
    minWidth: wp("103.2%"),
    height: hp("0.029985007943063302%"),
    minHeight: hp("0.029985007943063302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.689655172413794%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_22_5: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("26.236881559220386%"),
    backgroundColor: "rgba(236, 239, 236, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_22_24: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("12.443778110944528%"),
    minHeight: hp("12.443778110944528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("22.788605697151425%")
  },
  View_22_0: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1499250374812604%"),
    justifyContent: "flex-start"
  },
  Text_22_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_22_9: {
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
  ImageBackground_22_10: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("9.745127436281862%"),
    resizeMode: "cover"
  },
  View_22_11: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068961%")
  },
  View_22_4: {
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
  View_22_3: {
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
  View_22_7: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("3.898050974512742%"),
    justifyContent: "flex-start"
  },
  Text_22_7: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_14: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%"),
    top: hp("10.494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_22_14: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_12: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("6.596701649175415%"),
    justifyContent: "flex-start"
  },
  Text_22_12: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_25: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("25.787106446776615%"),
    minHeight: hp("25.787106446776615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("40.32983508245877%")
  },
  View_22_26: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1499250374812533%"),
    justifyContent: "flex-start"
  },
  Text_22_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_0: {
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
  View_22_57: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068968%"),
    backgroundColor: "rgba(236, 239, 236, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  ImageBackground_22_28: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("9.745127436281855%"),
    resizeMode: "cover"
  },
  View_22_29: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("3.448275862068968%")
  },
  View_22_30: {
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
  View_22_31: {
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
  View_22_58: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.599999999999998%"),
    top: hp("3.448275862068968%"),
    backgroundColor: "rgba(236, 239, 236, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_22_59: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.599999999999998%"),
    top: hp("3.448275862068968%")
  },
  View_22_60: {
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
  View_22_61: {
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
  ImageBackground_23_1: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("8.395802098950526%"),
    minHeight: hp("8.395802098950526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("17.391304347826093%"),
    resizeMode: "cover",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_22_32: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999995%"),
    top: hp("3.898050974512742%"),
    justifyContent: "flex-start"
  },
  Text_22_32: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_62: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666669%"),
    top: hp("3.898050974512742%"),
    justifyContent: "flex-start"
  },
  Text_22_62: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 5,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_33: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("10.494752623688157%"),
    justifyContent: "flex-start"
  },
  Text_22_33: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_34: {
    width: wp("53.86666666666666%"),
    minWidth: wp("53.86666666666666%"),
    minHeight: hp("1.3493253373313343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("6.596701649175415%"),
    justifyContent: "flex-start"
  },
  Text_22_34: {
    color: "rgba(135, 135, 135, 1)",
    fontSize: 7,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_2: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("67.46626686656671%"),
    resizeMode: "cover"
  },
  ImageBackground_26_0: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("50.07496251874063%"),
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
