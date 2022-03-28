import React from "react";
import "./App.scss";

function App() {

  const [squares, setSquares] = React.useState([
    { id: 81, title: "a8", src: "" },
    { id: 82, title: "b8", src: "" },
    { id: 83, title: "c8", src: "" },
    { id: 84, title: "d8", src: "" },
    { id: 85, title: "e8", src: "" },
    { id: 86, title: "f8", src: "" },
    { id: 87, title: "g8", src: "" },
    { id: 88, title: "h8", src: "" },
    { id: 71, title: "a7", src: "" },
    { id: 72, title: "b7", src: "" },
    { id: 73, title: "c7", src: "" },
    { id: 74, title: "d7", src: "" },
    { id: 75, title: "e7", src: "" },
    { id: 76, title: "f7", src: "" },
    { id: 77, title: "g7", src: "" },
    { id: 78, title: "h7", src: "" },
    { id: 61, title: "a6", src: "" },
    { id: 62, title: "b6", src: "" },
    { id: 63, title: "c6", src: "" },
    { id: 64, title: "d6", src: "" },
    { id: 65, title: "e6", src: "" },
    { id: 66, title: "f6", src: "" },
    { id: 67, title: "g6", src: "" },
    { id: 68, title: "h6", src: "" },
    { id: 51, title: "a5", src: "" },
    { id: 52, title: "b5", src: "" },
    { id: 53, title: "c5", src: "" },
    { id: 54, title: "d5", src: "" },
    { id: 55, title: "e5", src: "" },
    { id: 56, title: "f5", src: "" },
    { id: 57, title: "g5", src: "" },
    { id: 58, title: "h5", src: "" },
    { id: 41, title: "a4", src: "" },
    { id: 42, title: "b4", src: "" },
    { id: 43, title: "c4", src: "" },
    { id: 44, title: "d4", src: "" },
    { id: 45, title: "e4", src: "" },
    { id: 46, title: "f4", src: "" },
    { id: 47, title: "g4", src: "" },
    { id: 48, title: "h4", src: "" },
    { id: 31, title: "a3", src: "" },
    { id: 32, title: "b3", src: "" },
    { id: 33, title: "c3", src: "" },
    { id: 34, title: "d3", src: "" },
    { id: 35, title: "e3", src: "" },
    { id: 36, title: "f3", src: "" },
    { id: 37, title: "g3", src: "" },
    { id: 38, title: "h3", src: "" },
    { id: 21, title: "a2", src: "" },
    { id: 22, title: "b2", src: "" },
    { id: 23, title: "c2", src: "" },
    { id: 24, title: "d2", src: "" },
    { id: 25, title: "e2", src: "" },
    { id: 26, title: "f2", src: "" },
    { id: 27, title: "g2", src: "" },
    { id: 28, title: "h2", src: "" },
    { id: 11, title: "a1", src: "" },
    { id: 12, title: "b1", src: "" },
    { id: 13, title: "c1", src: "" },
    { id: 14, title: "d1", src: "" },
    { id: 15, title: "e1", src: "" },
    { id: 16, title: "f1", src: "" },
    { id: 17, title: "g1", src: "" },
    { id: 18, title: "h1", src: "" },
  ])

  const startPosition = [
    { id: 81, title: "a8", src: "/img/chess/chess_rook-black.svg" },
    { id: 82, title: "b8", src: "/img/chess/chess_knight-black.svg" },
    { id: 83, title: "c8", src: "/img/chess/chess_bishop-black.svg" },
    { id: 84, title: "d8", src: "/img/chess/chess_queen-black.svg" },
    { id: 85, title: "e8", src: "/img/chess/chess_king-black.svg" },
    { id: 86, title: "f8", src: "/img/chess/chess_bishop-black.svg" },
    { id: 87, title: "g8", src: "/img/chess/chess_knight-black.svg" },
    { id: 88, title: "h8", src: "/img/chess/chess_rook-black.svg" },
    { id: 71, title: "a7", src: "/img/chess/chess_pawn-black.svg" },
    { id: 72, title: "b7", src: "/img/chess/chess_pawn-black.svg" },
    { id: 73, title: "c7", src: "/img/chess/chess_pawn-black.svg" },
    { id: 74, title: "d7", src: "/img/chess/chess_pawn-black.svg" },
    { id: 75, title: "e7", src: "/img/chess/chess_pawn-black.svg" },
    { id: 76, title: "f7", src: "/img/chess/chess_pawn-black.svg" },
    { id: 77, title: "g7", src: "/img/chess/chess_pawn-black.svg" },
    { id: 78, title: "h7", src: "/img/chess/chess_pawn-black.svg" },
    { id: 61, title: "a6", src: "" },
    { id: 62, title: "b6", src: "" },
    { id: 63, title: "c6", src: "" },
    { id: 64, title: "d6", src: "" },
    { id: 65, title: "e6", src: "" },
    { id: 66, title: "f6", src: "" },
    { id: 67, title: "g6", src: "" },
    { id: 68, title: "h6", src: "" },
    { id: 51, title: "a5", src: "" },
    { id: 52, title: "b5", src: "" },
    { id: 53, title: "c5", src: "" },
    { id: 54, title: "d5", src: "" },
    { id: 55, title: "e5", src: "" },
    { id: 56, title: "f5", src: "" },
    { id: 57, title: "g5", src: "" },
    { id: 58, title: "h5", src: "" },
    { id: 41, title: "a4", src: "" },
    { id: 42, title: "b4", src: "" },
    { id: 43, title: "c4", src: "" },
    { id: 44, title: "d4", src: "" },
    { id: 45, title: "e4", src: "" },
    { id: 46, title: "f4", src: "" },
    { id: 47, title: "g4", src: "" },
    { id: 48, title: "h4", src: "" },
    { id: 31, title: "a3", src: "" },
    { id: 32, title: "b3", src: "" },
    { id: 33, title: "c3", src: "" },
    { id: 34, title: "d3", src: "" },
    { id: 35, title: "e3", src: "" },
    { id: 36, title: "f3", src: "" },
    { id: 37, title: "g3", src: "" },
    { id: 38, title: "h3", src: "" },
    { id: 21, title: "a2", src: "/img/chess/chess_pawn-white.svg" },
    { id: 22, title: "b2", src: "/img/chess/chess_pawn-white.svg" },
    { id: 23, title: "c2", src: "/img/chess/chess_pawn-white.svg" },
    { id: 24, title: "d2", src: "/img/chess/chess_pawn-white.svg" },
    { id: 25, title: "e2", src: "/img/chess/chess_pawn-white.svg" },
    { id: 26, title: "f2", src: "/img/chess/chess_pawn-white.svg" },
    { id: 27, title: "g2", src: "/img/chess/chess_pawn-white.svg" },
    { id: 28, title: "h2", src: "/img/chess/chess_pawn-white.svg" },
    { id: 11, title: "a1", src: "/img/chess/chess_rook-white.svg" },
    { id: 12, title: "b1", src: "/img/chess/chess_knight-white.svg" },
    { id: 13, title: "c1", src: "/img/chess/chess_bishop-white.svg" },
    { id: 14, title: "d1", src: "/img/chess/chess_queen-white.svg" },
    { id: 15, title: "e1", src: "/img/chess/chess_king-white.svg" },
    { id: 16, title: "f1", src: "/img/chess/chess_bishop-white.svg" },
    { id: 17, title: "g1", src: "/img/chess/chess_knight-white.svg" },
    { id: 18, title: "h1", src: "/img/chess/chess_rook-white.svg" },
  ]

  const figureBlack = [
    { id: 100, src: "/img/chess/chess_pawn-black.svg" },
    { id: 101, src: "/img/chess/chess_knight-black.svg" },
    { id: 102, src: "/img/chess/chess_bishop-black.svg" },
    { id: 103, src: "/img/chess/chess_rook-black.svg" },
    { id: 104, src: "/img/chess/chess_king-black.svg" },
    { id: 105, src: "/img/chess/chess_queen-black.svg" },
  ]

  const figureWhite = [
    { id: 106, src: "/img/chess/chess_pawn-white.svg" },
    { id: 107, src: "/img/chess/chess_knight-white.svg" },
    { id: 108, src: "/img/chess/chess_bishop-white.svg" },
    { id: 109, src: "/img/chess/chess_rook-white.svg" },
    { id: 110, src: "/img/chess/chess_king-white.svg" },
    { id: 111, src: "/img/chess/chess_queen-white.svg" },
  ]

  const [currentFigure, setCurrentFigure] = React.useState();


  // функции для перетаскиваемого элемента

  function dragStartFigure(element) {
    setCurrentFigure(element);
  }

  function dragEndHandler(element) {
    let newSquare = squares.map((item) => {
      if (item.id === element.id) {
        return { ...item, src: "" };
      } else {
        return item;
      }
    });
    setSquares(newSquare);
  }


  // функции для области размещения элемента

  function dragLeaveHandler(e) {
    e.target.style.backgroundColor = "transparent";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "rgb(40, 135, 220)";
  }

  function dropHandler(e, element) {
    e.preventDefault();
    e.target.style.backgroundColor = "transparent";
    let newSquare = squares.map((item) => {
      if (item.id === element.id) {
        return { ...item, src: currentFigure.src };
      } else {
        return item;
      }
    });
    setSquares(newSquare);
  }

  function getFigures(value) {
    return value.map((figuresItem) => (
      <div
        key={figuresItem.id}
        className="figure"
        onDragStart={(e) => dragStartFigure(figuresItem)}
        onDragEnd={(e) => dragEndHandler(currentFigure)}
      >
        <img src={figuresItem.src} alt="Шахматная фигура" />
      </div>
    ))
  }

  function clear() {
    if (window.confirm("Очистить доску?")) {
      let newSquare = squares.map((item) => {
        return { ...item, src: "" };
      });
      setSquares(newSquare);
    }
  }

  function setStartPosition() {
    if (window.confirm("Начать новую игру?")) {
      setSquares(startPosition);
    }
  }

  return (
    <div className="app">

      <div className="chessBoardWrap" style={{ backgroundImage: `url(${"/img/chess_board.jpg"})` }}>
        <div className="chessBoard">
          {squares.map((squaresItem) => (
            <div
              key={squaresItem.id}
              className="square"
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, squaresItem)}
              onDragStart={(e) => dragStartFigure(squaresItem)}
              onDragEnd={(e) => dragEndHandler(currentFigure)}
            >
              <img src={squaresItem.src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="rightBlock">

        <div className="figuresBlock">
          <div className="figuresWhite">
            {getFigures(figureWhite)}
          </div>
          <div className="figuresBlack">
            {getFigures(figureBlack)}
          </div>
        </div>

        <button className="btn" onClick={setStartPosition}>Начальная позиция</button>
        <button className="btn" onClick={clear}>Очистить доску</button>

      </div>
    </div>
  );
}

export default App;
