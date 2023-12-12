import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
interface datalist {
  title: string;
  isCompleted: boolean;
}
const ToDoListItem = ({ title, isCompleted }: datalist) => {
  return (
    <>
        <div className="border-b border-slate flex justify-between items-center h-[49px] px-4 mt-4 w-[30%] m-auto">
          <p className="ff_inter text-sm text-slate-500 pb-1">{title}</p>
          <div className="flex justify-between gap-2">
            <button id="isCompleted">
              <TrashIcon className="text-slate-500 hover:text-slate-400 h-6 w-6" />
            </button>
            <button id="id">
              <CheckCircleIcon
                className={`${
                  isCompleted
                    ? "text-slate-500 hover:text-slate-400"
                    : "text-green-500 hover:text-green-400"
                } h-6 w-6`}
              />
            </button>
        </div>
      </div>
    </>
  );
};

export default ToDoListItem;
