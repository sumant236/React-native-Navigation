import {View, Button} from 'react-native';
import {AppContext, actionTypes} from '../Context/AppContextProvider';
import React from "react"

function SignIn() {
  const dispatch = React.useContext(AppContext)[1];
  return (
    <View>
      <Button
        onPress={() => {
          dispatch({type: actionTypes.LOGIN_SUCCESS, payload: {}});
        }}
        title="Sign In"></Button>
    </View>
  );
}

export default SignIn;
