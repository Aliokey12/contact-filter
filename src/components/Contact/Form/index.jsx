import { useState } from "react";

function Form({ contact, setContact }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname.trim() === "" || form.phone_number.trim() === "") {
      alert("Please fill in all fields!");
      return;
    }

    setContact([...contact, form]);

    console.log(form);

    setForm({ fullname: "", phone_number: "" });
  };

  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="fullname">
          Full Name
        </label>
        <input
          name="fullname"
          className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Full Name"
          onChange={onChange}
          value={form.fullname}
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone_number">
          Phone Number
        </label>
        <input
          name="phone_number"
          className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Phone Number"
          onChange={onChange}
          value={form.phone_number}
        />
      </div>
      <div className="mb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
