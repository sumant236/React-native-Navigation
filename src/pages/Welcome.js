import {Text, View, Button, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Welcome({navigation}) {
  return (
    <View style={styles.root}>
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signin');
        }}>
        <View style={styles.element}>
          <Button title="Sign In" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        <View style={styles.element}>
          <Button title="Sign Up" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  element: {
    marginVertical: 4,
  },
});

export default Welcome;
