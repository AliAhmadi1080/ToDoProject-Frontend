export default function ToDoDetailContainer() {
  return (
    <div
      dir="rtl"
      className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
    >
      <div className="head flex flex-col">
        <h3 className=" text-3xl">عنوان</h3>
        <h4 className=" text-lg my-2">زیر عنوان</h4>
      </div>
      <textarea
        disabled
        value={
          "ali is good person"
        }
        className="w-2/3 rounded-xl p-3 bg-gray-200 h-32"
      ></textarea>
      <br />
      <div className="footer grid grid-cols-3 gap-5 border border-black px-6 w-5/6">
        <div className=" text-center">
          <ul dir="ltr">
            <h6 className="text-lg">تگ ها</h6>
            <li>-asdf</li>
            <li>-asdf</li>
          </ul>
        </div>
        <div className=" col-span-2 py-6 flex">
          <label className="mt-2 mx-3">وضعیت:</label>
          <div className="relative h-10 w-72 min-w-[200px]">
            {/* material tailwind */}
            <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              <option value="brazil">انجام شده</option>
              <option value="bucharest">درحال انجام</option>
              <option value="london">انجام نشده</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a City
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
