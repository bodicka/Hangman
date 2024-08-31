
type HangmanWordType = {
  reveal?: boolean;
  wordToGuesse: string;
  guessedLetters: string[];
}

const HangmanWord = ({ reveal = false, wordToGuesse, guessedLetters }: HangmanWordType) => {
  return (
    <div style={{
      display: "flex",
      gap: ".25rem",
      fontSize: "6rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "monospace"
    }}>
      {
        wordToGuesse.split("").map((letter, index) => (
          <span style={{
            borderBottom: ".1em solid black"
          }} key={index}>
            <span style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "red" : "white" 
            }}>
              {letter}
            </span>
          </span>
        ))
      }
    </div>
  )
}

export default HangmanWord