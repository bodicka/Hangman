import style from "./Keyboard.module.css";

const KEY = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
];

type KeyboardType = {
  disabled?: boolean;
  activeLetters: string[];
  inActiveLetters: string[];
  addGuesedLetters: (letter: string) => void;
};

const Keyboard = ({
  disabled = false,
  activeLetters,
  inActiveLetters,
  addGuesedLetters,
}: KeyboardType) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEY.map((key) => {
        const isActive = activeLetters.includes(key);
        const inActive = inActiveLetters.includes(key);

        return (
          <button
            key={key}
            disabled={inActive || isActive || disabled}
            onClick={() => addGuesedLetters(key)}
            className={`${style.btn} ${isActive ? style.active : ""} ${
              inActive ? style.inactive : ""
            }`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
