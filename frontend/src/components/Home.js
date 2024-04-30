import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const [hobbie, setHobbie] = useState("");

  const handleHobbies = () => {
    setHobbies((prev) => [...prev, hobbie]);

    setHobbie("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/api/crud", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        hobbies,
      }),
    }).then((res) => {
      console.log(res.status);
    });
  };

  return (
    <div className="w-full h-auto flex justify-center items-center bg-gray-700">
      <form
        onSubmit={submitHandler}
        className="p-10  flex flex-col gap-5 border-2"
      >
        <input
          type="text"
          className="px-2 py-1 my-3"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-2 py-1 my-3 "
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone"
        />

        <div className="flex items-center justify-center gap-2 ">
          <input
            className="px-2 py-1 my-3"
            type="text"
            value={hobbie}
            onChange={(e) => setHobbie(e.target.value)}
            placeholder="hobbies"
          />
          <p onClick={handleHobbies} className="bg-blue-500 px-2 py-1">
            Add
          </p>
        </div>

        <div>
          <ul>
            {hobbies.length > 0 &&
              hobbies.map((hobbie, i) => <li key={i}>{hobbie}</li>)}
          </ul>
        </div>
        <button type="submit" className="bg-blue-500 px-2 py-1">
          Create
        </button>
      </form>
    </div>
  );
}
