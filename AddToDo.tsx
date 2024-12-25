import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

type Todo = {
  title: string;
  description: string;
  isChecked: boolean;
};

const AddToDo = ({ onAddTodo }: { onAddTodo: (todo: Todo) => void }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (title.trim() && description.trim()) {
      onAddTodo({ title, description, isChecked: false }); // إضافة isChecked
      setTitle("");
      setDescription("");
      navigate("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <div className="items-center flex flex-col gap-8 mt-10">
        <img src="./src/assets/app title.svg" alt="title" />
        <div className="w-[180px] h-[49]">
          <p className="w-[180px] h-[23px] font-medium text-[25px]">Add New Todo</p>
        </div>
      </div>
      <div className="w-[597px] h-[329px] ml-[500px] mt-[100px] flex flex-col gap-8">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[588px] h-[61px] rounded-[6px] p-5 border-2 border-gray-500"
          placeholder="Enter Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-[597px] h-[190px] rounded-[6px] p-5 border-2 border-gray-500"
          placeholder="Enter Description"
        />
      </div>
      <div className="flex items-center ml-[590px] gap-10">
        <button
          onClick={handleAdd}
          className="text-center p-3 w-[191px] h-[57px] bg-green-500 hover:bg-green-600 rounded-[6px] text-white font-medium text-[23px] tracking-widest cursor-pointer"
        >
          Add
        </button>
        <NavLink
          to="/"
          className="text-center p-3 w-[191px] h-[57px] bg-slate-700 hover:bg-slate-900 rounded-[6px] text-white font-medium text-[23px] tracking-widest cursor-pointer"
        >
          Cancel
        </NavLink>
      </div>
    </div>
  );
};

export default AddToDo;
