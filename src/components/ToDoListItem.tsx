import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
interface TodoListItemProps {
  title: string;
  isCompleted: boolean;
}
const ToDoListItem = ({ title, isCompleted }: TodoListItemProps) => {
  return (
    <>
      <div className="border-b border-slate-200 flex justify-between items-center h-[49px] px-4">
        <p
          className={`${
            isCompleted ? "" : "line-through"
          } ff_inter text-sm text-slate-500 pb-1`}
        >
          {title}
        </p>
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
