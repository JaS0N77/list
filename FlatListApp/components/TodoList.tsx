import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ODOT List</Text>
      <Text style={styles.date}>4th March 2018</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.todo}</Text>
            <Text style={styles.timeText}>{item.completed ? '✔' : '⏳'}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  date: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  todoItem: { backgroundColor: '#fff', padding: 15, marginVertical: 5, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between' },
  todoText: { fontSize: 16 },
  timeText: { fontSize: 16, color: 'gray' },
});

export default TodoList;
