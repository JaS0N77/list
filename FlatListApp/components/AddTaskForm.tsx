import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

interface TaskFormData {
  title: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
}

const AddTaskForm = ({ onSubmit }: { onSubmit: (data: TaskFormData) => void }) => {
  const { control, handleSubmit, reset } = useForm<TaskFormData>({
    defaultValues: { title: '', date: '', priority: 'medium' },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Назва</Text>
      <Controller
        control={control}
        name="title"
        rules={{ required: 'Поле обов’язкове' }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} placeholder="Введіть назву" />
        )}
      />

      <Text style={styles.label}>Дата</Text>
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} placeholder="YYYY-MM-DD" />
        )}
      />

      <Text style={styles.label}>Пріоритет</Text>
      <Controller
        control={control}
        name="priority"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} placeholder="low, medium, high" />
        )}
      />

      <Button title="Додати завдання" onPress={handleSubmit((data) => { onSubmit(data); reset(); })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white' },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default AddTaskForm;
