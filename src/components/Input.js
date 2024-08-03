export default function Input({lable, type='text', onchange}) {
  return (
    <div className="flex flex-col my-5">
      <label className="mr-6 w mb-2">{lable}</label>
      <input onChange={onchange} type={type} className="mx-6 w-[80%] px-3 bg-gray-100 rounded-lg"/>
    </div>
  );
}
