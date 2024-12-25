import { NavLink } from "react-router-dom";
const UpdateAddToDo = ()=> {
    return(
        <div>
            <div className="items-center flex flex-col gap-8 mt-10">
              <img src="./src/assets/app title.svg" alt="title" />
              <div className="w-[180px] h-[49]">
                <p className="w-[180px] h-[23px] font-medium text-[25px] ">Update Todo</p>
              </div>
            </div>
            <div className="w-[597px] h-[329px] ml-[500px] mt-[100px] flex flex-col gap-8">
              <input type="text" className="w-[588px] h-[61px] rounded-[6px] p-5 border-2 border-gray-500 " placeholder="Enter Title"/>
              <textarea className="w-[597px] h-[190px] rounded-[6px] p-5 border-2 border-gray-500" placeholder="Enter Description"/>
            </div>
            <div className="flex items-center ml-[590px] gap-10">
              <NavLink to="/" className="text-center p-2 w-[191px] h-[57px] bg-green-500 hover:bg-green-600 rounded-[6px] text-white font-medium text-[23px] tracking-widest cursor-pointer">Update</NavLink>
              <NavLink to="/" className="text-center p-2 w-[191px] h-[57px] bg-slate-700 hover:bg-slate-900 rounded-[6px] text-white font-medium text-[23px] tracking-widest cursor-pointer">Cancel</NavLink>
            </div>
        </div>
    );
}
export default UpdateAddToDo;