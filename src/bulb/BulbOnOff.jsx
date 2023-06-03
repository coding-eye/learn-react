import { useState } from "react";

const BulbOnOff = () => {
  const [bulbOnOff, setBulbOnOff] = useState(false);
  return (
    <div>
      <img
        src={
          bulbOnOff
            ? "https://i.postimg.cc/6QyTynzr/bulb-on.png"
            : "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
        }
        id="bulb"
        width="100"
      />
      <button onClick={() => setBulbOnOff(!bulbOnOff)}>
        {bulbOnOff ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default BulbOnOff;
