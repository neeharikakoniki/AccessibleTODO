// for unit testing 
import todoReducer, { addTodo, toggleTodo, deleteTodo } from '../store/todoSlice';

//describe() Groups related tests
describe('todoSlice reducer', () => {
// it () Defines a single test case
  it('should handle addTodo', () => {
    const initialState = { items: [] }; //empty to list 
    const nextState = todoReducer(initialState, addTodo('Buy milk'));
    expect(nextState.items.length).toBe(1);
    expect(nextState.items[0].title).toBe('Buy milk');
  });

  it('should handle toggleTodo', () => {
    const initialState = { items: [{ id: '1', title: 'Task', completed: false }] };
    const nextState = todoReducer(initialState, toggleTodo('1'));
    expect(nextState.items[0].completed).toBe(true);
  });

  it('should handle deleteTodo', () => {
    const initialState = { items: [{ id: '1', title: 'Task', completed: false }] };
    const nextState = todoReducer(initialState, deleteTodo('1'));
    expect(nextState.items.length).toBe(0);
  });
});
