import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

export default function All() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:4000/api/crud")
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    getData();
  }, []);

  console.log(data);
  return (
    <div className=" p-2 bg-zinc-100">
      {data === null ? (
        <p>No data found</p>
      ) : (
        data?.cruds.map((item,i) => (
          <div className="flex items-center justify-between " key={item._id}>
            <p>{item.name}</p>
            <Link to={`${item._id}`} className="cursor-pointer">Edit</Link>
          </div>
        ))
      )}
    </div>
  );
}
