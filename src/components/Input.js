export default function Input({lable}) {
  return (
    <div className="flex flex-col my-5">
      <label className="mr-6 w mb-2">{lable}</label>
      <input className="mx-6 w-[80%] px-3 bg-gray-100 rounded-lg"/>
    </div>
  );
}
