import { NavLink } from "react-router-dom";

const ToDoDetails = ()=> {
    return(
        <div>
            <div className="items-center flex flex-col gap-8 mt-10">
              <img src="./src/assets/app title.svg" alt="title" />
              <div className="w-[180px] h-[49]">
                <p className="w-[180px] h-[23px] font-medium text-[25px] ">Details Todo</p>
              </div>
            </div>
            <div className="w-[597px] h-[329px] ml-[500px] mt-[50px] flex flex-col gap-8 border-gray-400 border-2 p-5 rounded-[8px]">
              <div className="flex">
                <div className="font-medium text-[22px]">Title:</div>
                <span></span>
              </div>
              <div className="flex">
                <div className="font-medium text-[22px]">Description:</div>
                <span></span>
              </div>
              <NavLink to="/" className="w-[191px] h-[57px] text-center pt-1 mt-[110px] bg-yellow-400 hover:bg-yellow-500 rounded-[6px] text-white font-medium text-[23px] tracking-widest cursor-pointer">Back</NavLink>
            </div>
              
        </div>
    );
}
export default ToDoDetails;