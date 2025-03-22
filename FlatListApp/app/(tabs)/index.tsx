import { Image, StyleSheet, View, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TodoList from '@/components/TodoList';
import AddTaskForm from '@/components/AddTaskForm';

export default function HomeScreen() {
  const handleAddTask = (data: { title: string; date: string; priority: string }) => {
    console.log('Task Added:', data);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ODOT List</ThemedText>
        <ThemedText type="subtitle">4th March 2018</ThemedText>
      </ThemedView>

      <View style={styles.contentContainer}>
        <TodoList />

        <AddTaskForm onSubmit={handleAddTask} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
