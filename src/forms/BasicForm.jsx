import { useState } from "react";

export default function BasicForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  async function saveUser(fd) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ message: "user created", user: fd }), 1000);
    });
  }

  async function submitAction(formData) {
    await saveUser(formData);
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(form);
  // }
  return (
    <form action={submitAction} className="form">
      <input type="text" name="name" id="" onChange={handleChange} />
      <input type="text" name="email" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
