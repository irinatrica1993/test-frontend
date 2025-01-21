import { useState } from "react";

const fruitsDefault = [
  {
    fruit: "Mela",
    color: "Red",
    countryOrigin: "Brasil",
  },
  {
    fruit: "Pera",
    color: "Green",
    countryOrigin: "Moldavia",
  },
  {
    fruit: "Banana",
    color: "Yellow",
    countryOrigin: "UK",
  },
  {
    fruit: "Kiwi",
    color: "Brown",
    countryOrigin: "New Zeland",
  },
  {
    fruit: "Mango",
    color: "Yellow",
    countryOrigin: "Venezuela",
  },
];

export const AddDeleteFruits = () => {
  const [fruits, setFruits] = useState(fruitsDefault);
  const [inputValue, setInputValue] = useState({
    fruit: "",
    color: "",
    countryOrigin: "",
  });

  return (
    <div>
      {fruits.map(({ fruit, color, countryOrigin }, index) => {
        return (
          <div key={index} style={{ display: "flex", gap: 10 }}>
            <div>Colore: {color}</div>
            <div>Nazione di provenienza: {countryOrigin}</div>
            <input
              value={fruit}
              onChange={(e) => {
                if (!fruits.some((f, i) => f.fruit === e.currentTarget.value)) {
                  const result = fruits.map((f) => {
                    if (f.fruit !== fruit) {
                      return f;
                    } else {
                      return {
                        fruit: e.currentTarget.value,
                        color: f.color,
                        countryOrigin: f.countryOrigin,
                      };
                    }
                  });

                  setFruits(result);
                } else {
                  alert(e.currentTarget.value + " esiste già");
                }
              }}
            />
            <button
              onClick={() => setFruits(fruits.filter((f) => f.fruit !== fruit))}
            >
              Cancella
            </button>
          </div>
        );
      })}
      <div style={{ height: 20 }} />
      <input
        type="text"
        value={inputValue.fruit}
        onChange={(e) => {
          setInputValue({
            fruit: e.currentTarget.value,
            color: inputValue.color,
            countryOrigin: inputValue.countryOrigin,
          });
        }}
        placeholder="Frutto"
      />
      <input
        type="text"
        value={inputValue.color}
        onChange={(e) => {
          setInputValue({
            fruit: inputValue.fruit,
            color: e.currentTarget.value,
            countryOrigin: inputValue.countryOrigin,
          });
        }}
        placeholder="colore"
      />
      <input
        type="text"
        value={inputValue.countryOrigin}
        onChange={(e) => {
          setInputValue({
            fruit: inputValue.fruit,
            color: inputValue.color,
            countryOrigin: e.currentTarget.value,
          });
        }}
        placeholder="origine"
      />
      <button
        onClick={() => {
          setFruits([...fruits, inputValue]);
        }}
        disabled={fruits.some((fruit) => fruit === inputValue)}
      >
        Inserisci
      </button>
    </div>
  );
};
