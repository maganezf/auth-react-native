import React, { useContext } from 'react';

import { Button, StyleSheet, View } from 'react-native';
import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { signed, user, signIn } = useContext(AuthContext);

  console.log(signed);
  console.log(user);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
