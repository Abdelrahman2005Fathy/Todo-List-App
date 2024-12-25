import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';

interface TodoCardProps {
  setView: (view: string) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ setView }) => {
  const [activeLink, setActiveLink] = useState('all');

  const handleLinkClick = (view: string) => {
    setActiveLink(view);
    setView(view);
  };

  return (
        <ul className="w-[474px] h-[49] flex gap-10 ml-[50px] font-medium text-[20px]">
          <NavLink
            to="/AddToDo"
            className="text-center bg-green-500 w-[80px] h-9 pt-[2px] hover:bg-green-700 text-white rounded-[10px]"
          >
            Add
          </NavLink>
          <button
            onClick={() => handleLinkClick('all')}
            className={`${
              activeLink === 'all'
                ? 'text-red-500 font-bold border-b-2 border-red-500'
                : 'text-black hover:text-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleLinkClick('pending')}
                    className={`${
                      activeLink === 'pending'
                        ? 'text-red-500 font-bold border-b-2 border-red-500'
                        : 'text-black hover:text-gray-300'
                    }`}
          >
            Pending
          </button>
          <button
          onClick={() => handleLinkClick('completed')}
            className={`${
              activeLink === 'completed'
                ? 'text-red-500 font-bold border-b-2 border-red-500'
                : 'text-black hover:text-gray-300'
            }`}
  >
            Completed
          </button>
        </ul>
      );
    };

export default TodoCard;
