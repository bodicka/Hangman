const HEAD = (
  <div style={{
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    border: "10px solid white",
    position: "absolute",
    top: "50px",
    right: "-30px"
  }} />
);

const BODY = (
  <div style={{
    width: "10px",
    height: "100px",
    background: "white",
    position: "absolute",
    top: "120px",
    right: 0
  }} />
);

const RIGHT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "white",
    position: "absolute",
    top: "150px",
    right: "-100px",
    rotate: "-30deg",
    transformOrigin: "left bottom",
  }} />
);

const LEFT_ARM = (
  <div style={{
    width:"100px",
    height: "10px",
    background:"white",
    position: "absolute",
    top: "150px",
    right: "10px",
    rotate: "30deg",
    transformOrigin: "right bottom"
  }} />
);

const RIGHT_LEG = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "white",
    position: "absolute",
    top: "210px",
    right: "-90px",
    rotate: "60deg",
    transformOrigin: "left bottom"
  }} />
);

const LEFT_LEG = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "white",
    position: "absolute",
    top: "210px",
    right: 0,
    rotate: "-60deg",
    transformOrigin: "right bottom"
  }} />
);

type HangmanDrawingType = {
  numberOfGuessed: number
}

const HANGMAN = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing = ({ numberOfGuessed }: HangmanDrawingType) => {
  return (
    <div style={{position: "relative"}}>
      {
        HANGMAN.slice(0, numberOfGuessed)
      }
      <div style={{
        width: "10px", 
        height: "50px",
        background: "black",
        position: "absolute",
        top: 0,
        right: 0,
      }} />

      <div style={{
        height: "10px",
        width: "200px",
        background: "black",
        marginLeft: "120px",
      }} />

      <div style={{
        height: "400px",
        width: "10px",
        background: "black",
        marginLeft: "120px",
      }} />

      <div style={{
        height: "10px",
        width: "250px",
        background: "black"
      }} />
    </div>
  )
}

export default HangmanDrawing