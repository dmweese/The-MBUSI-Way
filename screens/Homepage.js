import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';

const Homepage = ({ navigation }) => {
  return ( 

    // Establishes the page layout
    <View style={styles.homeContainer}>

      {/* Establishes the text formatting */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          The MBUSI Way: Mobile MPS Handbook
        </Text>
      </View>

      {/* This view contains the containers for the shapes. Every shape is a button
          that navigates to a new page when pressed*/}
      <View id="shapes">

        {/* Establishes a row of triangles */}
        <View style={styles.triangleContainer}>
          <TouchableWithoutFeedback onPress = {() => navigation.navigate('Quality')}>
            <View style={[styles.triangleOne, {marginLeft: "18%"}]}></View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress = {() => navigation.navigate('JIT')}>
            <View style={styles.triangleTwo}></View>
          </TouchableWithoutFeedback>
        </View>

        {/* Establishes a row of boxes/squares */}
        <View id="boxes" style={styles.boxContainer}>
          <TouchableWithoutFeedback onPress = {() => navigation.navigate('Leadership')}>
            <View style={[styles.houseBox, {backgroundColor: "red"}]}>
              <Text style={styles.boxText}>Team Leadership & Development</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress = {() => navigation.navigate('Standardization')}>
            <View style={[styles.houseBox, {backgroundColor: "green"}]}>
              <Text style={styles.boxText}>Standardization</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress = {() => navigation.navigate('Quality')}>
            <View style={[styles.houseBox, {backgroundColor: "blue"}]}>
              <Text style={styles.boxText}>First Time Quality</Text>
            </View> 
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress = {() => navigation.navigate('JIT')}>
            <View style={[styles.houseBox, {backgroundColor: "yellow"}]}>
              <Text style={styles.boxText}>Just-In-Time Material & Product Flow</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress = {() => navigation.navigate('Improvement')}>
            <View style={[styles.houseBox, {backgroundColor: "#0099ff"}]}>
              <Text style={styles.boxText}>Continuous Improvement</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress = {() => navigation.navigate('Safety')}>
            <View style={[styles.houseBox, {backgroundColor: "#adadad", width: "90%", height: 36}]}>
              <Text style={styles.boxText}>Safety</Text>
            </View>
          </TouchableWithoutFeedback>
        
        </View>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  textContainer: {
    height: 250,
    alignItems: "flex-start",
    margin: 20
  },
  homeContainer: {
    flex: .5
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center"
  },
  boxText: {
    fontFamily: "Verdana",
    fontSize: 9,
    textAlign: 'center'
  },
  houseBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: "18%",
    backgroundColor: "red",
    position: 'relative'
  },
  title: {
    fontFamily: "Verdana",
    fontSize: 50,
    alignSelf: 'center',
    textAlign: 'center'
  },
  triangleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: 'center'
  },
  triangleOne: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 65,
    //React Native expects an integer when using borderWidth
    //so the line below is used instead of an explicit percentage
    borderLeftWidth: Dimensions.get('window').width / 100 * 18, 
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'blue',
    borderLeftColor: 'transparent',
  },
  triangleTwo: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 65,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: Dimensions.get('window').width / 100 * 18,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'yellow',
  }
    
  
});

export default Homepage;