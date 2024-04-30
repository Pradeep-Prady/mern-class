import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Update() {
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      await fetch(`http://localhost:4000/api/crud/${id}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    getData();
  }, []);

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

    fetch(`http://localhost:4000/api/crud/${id}`, {
      method: "PUT",
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

  console.log(data);
  return (
    <div className="w-full h-auto flex justify-center items-center bg-gray-700">
      <h2>Update</h2>
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
          Update
        </button>
      </form>
    </div>
  );
}
