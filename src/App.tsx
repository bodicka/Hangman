import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./Components/HangmanDrawing";
import word from "./assets/word.json";
import HangmanWord from "./Components/HangmanWord";
import Keyboard from "./Components/Keyboard";

const getWord = () => {
  return word[Math.floor(Math.random() * word.length)];
};

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  ); //не правильные буквы
  const isLose = incorectLetters.length >= 6; //Поражение
  const isWinner = wordToGuess
    .split("") /* п а п а */
    .every((letter) =>
      guessedLetters.includes(letter)
    ); /* ?п => (wordToGuess) ? "true" : "false " */

  const addGuesedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLose || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLose]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[а-я]$/)) return;

      e.preventDefault();
      addGuesedLetters(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{fontSize: "2rem", textAlign:"center", color: "white"}}>
        {isWinner && "Победа поздравляю тебя!"}
        {isLose && "Поражение. Попробуй ещё раз, у тебя обязательно получится!!!"}
      </div>
      <HangmanDrawing numberOfGuessed={incorectLetters.length} />
      <HangmanWord
        reveal={isLose}
        wordToGuesse={wordToGuess}
        guessedLetters={guessedLetters}
      />
      <div style={{alignSelf: "stretch"}}>
        <Keyboard
          disabled={isWinner || isLose}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetters={incorectLetters}
          addGuesedLetters={addGuesedLetters}
        />
      </div>
    </div>
  );
};

export default App;
