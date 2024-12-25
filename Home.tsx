// Home.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import TodoCard from '../components/TodoCard';

type Todo = {
  title: string;
  description: string;
  isChecked: boolean;
};

interface HomeProps {
  todos: Todo[];
  onDeleteTodo: (index: number) => void;
  onToggleCheckbox: (index: number) => void;
  view: string;
  setView: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({view, setView,todos,  onDeleteTodo, onToggleCheckbox }) => {

  const filteredTodos = todos.filter((todo) => {
    if (view === 'completed') return todo.isChecked;
    if (view === 'pending') return !todo.isChecked;
    return true; // all
  });

  if (todos.length === 0) {
    return (
      <div className="items-center flex flex-col gap-8 mt-10">
        <img src="./src/assets/app title.svg" alt="title" />
        <TodoCard setView={setView}/>
        <p className="font-medium text-[25px] mt-5">Enter your first Todo!</p>
      </div>
    );
  }

  return (
    <div className="items-center flex flex-col gap-8 mt-10">
        <img src="./src/assets/app title.svg" alt="title" />
        <TodoCard setView={setView}/>
        <div className="flex flex-wrap gap-8 mt-3 w-[1200px]">
          {filteredTodos.map((todo, index) => (
            <div key={index} className="w-[48%] h-[56px] flex rounded-[5px]">
              <span className="w-full h-[56px] rounded-[5px]">
                <div className="justify-between border-gray-500 pr-2 border-2 flex flex-row-reverse gap-2 rounded-[5px] w-full h-[56px]">
                  <div className="flex flex-row-reverse gap-2">
                    <img
                      className="w-[40px] cursor-pointer"
                      src="./src/assets/btn-delete.svg"
                      alt="btn-delete"
                      onClick={() => onDeleteTodo(index)} 
                    />
                    <NavLink to="/UpdateAddToDo">
                      <img
                        className="w-[40px] pt-2 cursor-pointer"
                        src="./src/assets/btn-edit.svg"
                        alt="btn-edit"
                      />
                    </NavLink>
                    <NavLink to="/ToDoDetails">
                      <img
                        className="w-[40px] pt-2 cursor-pointer"
                        src="./src/assets/btn-detail.svg"
                        alt="btn-detail"
                      />
                    </NavLink>
                  </div>
                  <div className="p-3 gap-3 flex flex-row-reverse items-center">
                    <p>{todo.title}</p>
                    <input type="checkbox"
                    className="w-[30px] h-10 cursor-pointer"
                    checked={todo.isChecked} // ربط حالة الـ checkbox بالبيانات
                    onChange={() => onToggleCheckbox(index)}
                    />
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Home;
