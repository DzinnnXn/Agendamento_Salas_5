// login.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Input from '@/components/Input';
import { login } from '@/app/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  onNavigate: (screen: string, userType?: string) => void;
}

const LoginScreen: React.FC<Props> = ({ onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      console.log('Resposta da requisição:', response);

      // Navegue para a tela inicial após o login bem-sucedido
      onNavigate('Home');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Credenciais inválidas ou problema de conexão');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input placeholder="Username" value={username} onChangeText={setUsername} />
      <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Entrar" color="red" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => onNavigate('Register')}>
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  link: {
    color: 'red',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default LoginScreen;
