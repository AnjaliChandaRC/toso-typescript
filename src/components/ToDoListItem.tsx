import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
interface TodoListItemProps {
  title: string;
  isCompleted: boolean;
  id: string;
}
const ToDoListItem = ({ title, isCompleted, id }: TodoListItemProps) => {
  return (
    <>
      <div
        className="flex justify-between items-center h-[49px] px-4 custom_border_2"
        id={id}
      >
        <p
          className={`${
            isCompleted ? "line-through" : ""
          } ff_inter text-sm text-slate-500 pb-1`}
        >
          {title}
        </p>
        <div className="flex justify-between gap-2">
          <button>
            <TrashIcon className="text-slate-500 hover:text-slate-400 h-6 w-6" />
          </button>
          <button>
            <CheckCircleIcon
              className={`${
                isCompleted
                  ? "text-green-500 hover:text-green-400"
                  : "text-slate-500 hover:text-slate-400"
              } h-6 w-6`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoListItem;
