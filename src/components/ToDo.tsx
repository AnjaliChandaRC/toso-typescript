import { DeleteIcon, GreenTickIcon, TickIcon } from "../common/Icons";

const ToDo = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-full sm:w-[479px] sm:h-[510px] border border-solid border-[#e2e8f0] bg-white rounded-[8px] py-[15px] sm:py-6 px-[15px] sm:px-[30px] mx-5 sm:mx-0">
          <h3 className="ff_inter text-[24px] font-semibold text-[#020617] text-center">
            Todos
          </h3>
          <div>
            <p className="ff_inter text-[12px] font-medium text-[#64748B]">
              Enter Todo
            </p>
            <div className="border border-solid border-[#e2e8f0] bg-white rounded-[8px] flex justify-between items-center h-[49px] ps-4 mt-2">
              <input
                className="ff_inter text-[14px] text-[#334155] pb-1"
                placeholder="Learn html css"
                type="text"
              />
              <button className="ff_inter text-[14px] font-semibold text-white pt-[8px]pb-[12px]px-[27px] w-[80px] h-[41px] bg-[#2563EB] rounded-[8px] me-[6px] hover:bg-black transition duration-400 ease-in-out">
                Add
              </button>
            </div>
            <div className="border border-solid border-[#e2e8f0] bg-white rounded-[8px_8px_0px_0px] flex justify-between items-center h-[49px] px-4 mt-4">
              <p className="ff_inter text-[14px] text-[#64748B] pb-1">
                Todo one
              </p>
              <div className="flex">
                <span className="cursor-pointer">
                  <DeleteIcon />
                </span>
                <span className="ps-4 sm:ps-2 cursor-pointer">
                  <TickIcon />
                </span>
              </div>
            </div>
            <div className="border border-solid border-[#e2e8f0] bg-white rounded[8px] flex justify-between items-center h-[49px] px-4">
              <p className="ff_inter text-[14px] text-[#CBD5E1] pb-1 line-through">
                Todo one
              </p>
              <div className="flex">
                <span className="cursor-pointer">
                  <DeleteIcon />
                </span>
                <span className="ps-4 sm:ps-2 cursor-pointer">
                  {/* <TickIcon /> */}
                  <GreenTickIcon />
                </span>
              </div>
            </div>
            <div className="border border-solid border-[#e2e8f0] bg-white rounded[8px] flex justify-between items-center h-[49px] px-4">
              <p className="ff_inter text-[14px] text-[#64748B] pb-1">
                Todo one
              </p>
              <div className="flex">
                <span className="cursor-pointer">
                  <DeleteIcon />
                </span>
                <span className="ps-4 sm:ps-2 cursor-pointer">
                  <TickIcon />
                </span>
              </div>
            </div>
            <div className="border border-solid border-[#e2e8f0] bg-white rounded[8px] flex justify-between items-center h-[49px] px-4">
              <p className="ff_inter text-[14px] text-[#64748B] pb-1">
                Todo one
              </p>
              <div className="flex">
                <span className="cursor-pointer">
                  <DeleteIcon />
                </span>
                <span className="ps-4 sm:ps-2 cursor-pointer">
                  <TickIcon />
                </span>
              </div>
            </div>
            <div className="border border-solid border-[#e2e8f0] bg-white rounded[8px] flex justify-between items-center h-[49px] px-4">
              <p className="ff_inter text-[14px] text-[#64748B] pb-1">
                Todo one
              </p>
              <div className="flex">
                <span className="cursor-pointer">
                  <DeleteIcon />
                </span>
                <span className="ps-4 sm:ps-2 cursor-pointer">
                  <TickIcon />
                </span>
              </div>
            </div>
            <div className="border border-solid border-[#e2e8f0] bg-white rounded[8px] flex justify-between items-center h-[49px] px-4">
              <p className="ff_inter text-[14px] text-[#64748B] pb-1">
                Todo one
              </p>
              <div className="flex">
                <span className="cursor-pointer">
                  <DeleteIcon />
                </span>
                <span className="ps-4 sm:ps-2 cursor-pointer">
                  <TickIcon />
                </span>
              </div>
            </div>
            <div className="border border-solid border-[#e2e8f0] bg-white rounded-[0px_0px_8px_8px] flex justify-between items-center h-[49px] px-4">
              <p className="ff_inter text-[14px] text-[#64748B] pb-1">
                Todo one
              </p>
              <div className="flex">
                <span className="cursor-pointer">
                  <DeleteIcon />
                </span>
                <span className="ps-4 sm:ps-2 cursor-pointer">
                  <TickIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
