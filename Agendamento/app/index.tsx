import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './Telas/login';
import RegisterScreen from './Telas/cadastro';
import HomeScreen from './Telas/Home';
import SalasScreen from './Telas/Salas';  // Certifique-se de que a importação esteja correta
import SalasReservadasScreen from './Telas/SalasReservadas';
import AgendamentoScreen from './Telas/Agendamento';
import Navbar from '@/components/NavBar';
import Drawer from '@/components/Drawer';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'Register':
        return <RegisterScreen onNavigate={setCurrentScreen} />;
      case 'Home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'Salas':
        return <SalasScreen onNavigate={setCurrentScreen} onRoomSelect={setSelectedRoom} />;
      case 'SalasReservadas':
        return <SalasReservadasScreen onNavigate={setCurrentScreen} />;
      case 'Agendamento':
        return <AgendamentoScreen room={selectedRoom} onNavigate={setCurrentScreen} />;
      default:
        return <LoginScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      <Navbar onNavigate={setCurrentScreen} onOpenMenu={() => setIsDrawerOpen(true)} />
      {renderScreen()}
      {isDrawerOpen && <Drawer onClose={() => setIsDrawerOpen(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
