import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface LoginScreenState {
  username: string;
  password: string;
}

export default function LoginScreen() {
  const [state, setState] = useState<LoginScreenState>({
    username: '',
    password: '',
  });

  const handleVerification = () => {
    console.log('Nombre de usuario:', state.username);
    console.log('Contraseña:', state.password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={state.username}
        onChangeText={(text) => setState({ ...state, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={state.password}
        onChangeText={(text) => setState({ ...state, password: text })}
      />
      <Button
        title="Verificar"
        onPress={handleVerification}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
});