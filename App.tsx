// App.tsx
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ToDoDetails from './pages/ToDoDetails';
import UpdateAddToDo from './pages/UpdateAddToDo';
import AddToDo from './pages/AddToDo';
import NoPage from './pages/NoPage';

type Todo = {
  title: string;
  description: string;
  isChecked: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [view, setView] = useState<string>('all');

  // تحميل todos من localStorage عند بدء التطبيق
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // حفظ todos إلى localStorage عند التغيير
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

    // تحديث حالة checkbox
    const handleToggleCheckbox = (index: number) => {
      const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, isChecked: !todo.isChecked } : todo
      );
      setTodos(updatedTodos);
    };

  const handleAddTodo = (todo: { title: string; description: string;  isChecked: boolean;}) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // إزالة العنصر من todos
    setTodos(updatedTodos); // تحديث الحالة
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home todos={todos} setView={setView} view={view} onDeleteTodo={handleDeleteTodo} onToggleCheckbox={handleToggleCheckbox}/>} />
        <Route path="/AddToDo" element={<AddToDo onAddTodo={handleAddTodo} />} />
        <Route path="/ToDoDetails" element={<ToDoDetails />} />
        <Route path="/UpdateAddToDo" element={<UpdateAddToDo />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
