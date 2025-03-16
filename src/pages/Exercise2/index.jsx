import useLocalStorage from "../../hooks/useLocalStorage";

// import { useEffect } from "react";
// import { useState } from "react";

function Exercise2() {
  const [name, setName] = useLocalStorage("name", "F8 User");
  const [age, setAge] = useLocalStorage("age", "18");
  const [height, setHeight] = useLocalStorage("height", "1.84");
  const [weight, setWeight] = useLocalStorage("weight", "80");

  return (
    <div>
      <label htmlFor="name">Tên</label>
      <br />
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Đây là, {name}!</p>
      <br />
      <label htmlFor="age">Tuổi</label>
      <br />
      <input name="age" value={age} onChange={(e) => setAge(e.target.value)} />
      <p>Tôi, {age} tuổi</p>
      <br />
      <label htmlFor="height">Chiều cao</label>
      <br />
      <input
        name="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <p>{height}m</p>
      <br />
      <label htmlFor="weight">Cân nặng</label>
      <br />
      <input
        name="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <p>{weight}kg</p>
    </div>
  );
}

export default Exercise2;
