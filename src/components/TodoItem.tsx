import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';

type Props = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoItem = ({ id, title, completed }: Props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.item} accessible={true}>
      <TouchableOpacity
        accessibilityRole="checkbox"
        accessibilityLabel={title}
        accessibilityState={{ checked: completed }}
        accessibilityHint="Double tap to mark as complete or incomplete"
        onPress={() => dispatch(toggleTodo(id))}
      >
        <Text
          style={[styles.text, completed && styles.completed]}
          allowFontScaling={true}
        >
          {title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={`Delete ${title}`}
        accessibilityHint="Removes this task from the list"
        onPress={() => dispatch(deleteTodo(id))}
      >
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 10,
    elevation: 1,
  },
  text: { fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: '#999' },
  delete: { fontSize: 18, color: 'red' },
});

export default TodoItem;
