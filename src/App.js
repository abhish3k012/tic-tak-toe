import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [isXstate, setIsXstate] = useState(false); //true false
  const [isDisable, setIsDisable] = useState(false); //true false

  const [firstBttn, setFirstBttn] = useState("");
  const [secondBttn, setSecondBttn] = useState("");
  const [thirdBttn, setThirdBttn] = useState("");

  const [fourthBttn, setFourthBttn] = useState("");
  const [fifthBttn, setFifthBttn] = useState("");
  const [isColorChange, setIsColorChange] = useState({}); //true false


  const [sixthBttn, setSixthBttn] = useState("");
  const [seventhBttn, setSeventhBttn] = useState("");
  const [eigthBttn, setEigthBttn] = useState("");
  const [ninthBttn, setNinthBttn] = useState("");


  useEffect(() => {
    if (firstBttn === "X" && secondBttn === "X" && thirdBttn === "X") {
      alert("X winner");
      setIsDisable(true);
      const redColor = { firstBttn: "X", secondBttn: "X", thirdBttn: "X" };
      setIsColorChange(redColor);
    }
    if (firstBttn === "O" && secondBttn === "O" && thirdBttn === "O") {
      alert("O winner");
      setIsDisable(true);
      const redColor={ firstBttn: "O", secondBttn: "O", thirdBttn: "O" }
      setIsColorChange(redColor);
      
    }
    if (firstBttn === "X" && fifthBttn === "X" && ninthBttn === "X") {
      alert("X winner");
      setIsDisable(true);
      const redColor={firstBttn:"X" , fifthBttn:"X" , ninthBttn: "X"}
      setIsColorChange(redColor)
    }
    if (firstBttn === "O" && fifthBttn === "O" && ninthBttn === "O") {
      alert("O winner");
      setIsDisable(true);
      const redColor={firstBttn:"O" , fifthBttn:"O" , ninthBttn: "O"}
      setIsColorChange(redColor)
    }
    if (fourthBttn === "X" && fifthBttn === "X" && sixthBttn === "X") {
      alert("X winner");
      setIsDisable(true);
      const redColor={fourthBttn :"X", fifthBttn: "X", sixthBttn:"X"}
      setIsColorChange(redColor)
    }
    if (fourthBttn === "O" && fifthBttn === "O" && sixthBttn === "O") {
      alert("O winner");
      setIsDisable(true);
    }
    if (thirdBttn === "X" && fifthBttn === "X" && seventhBttn === "X") {
      alert("X winner");
      setIsDisable(true);
    }
    if (thirdBttn === "O" && fifthBttn === "O" && seventhBttn === "O") {
      alert("Owinner");
      setIsDisable(true);
    }
    if (ninthBttn === "X" && seventhBttn === "X" && eigthBttn === "X") {
      alert("X winner");
      setIsDisable(true);
    }
    if (ninthBttn === "O" && seventhBttn === "0" && eigthBttn === "O") {
      alert("O winner");
      setIsDisable(true);
    }
    if (firstBttn === "X" && fourthBttn === "X" && seventhBttn === "X") {
      const redColor = { firstBttn: "X", fourthBttn: "X", seventhBttn: "X" };
      setIsColorChange(redColor);
      alert("X winner");
    
      setIsDisable(true);
    }
    if (firstBttn === "O" && fourthBttn === "O" && seventhBttn === "O") {
      alert("Owinner");
      setIsDisable(true);
      const redColor = { firstBttn: "O", fourthBttn: "O", seventhBttn: "O" };
      setIsColorChange(redColor);
    }
    if (secondBttn === "X" && fifthBttn === "X" && eigthBttn === "X") {
      
      setIsDisable(true);
      alert("Xwinner");
      const redColor = { secondBttn: "X", fifthBttn: "X", eigthBttn: "X" };
      setIsColorChange(redColor);
    }
    if (secondBttn === "O" && fifthBttn === "O" && eigthBttn === "O") {
      
      setIsDisable(true);
      const redColor = { secondBttn: "O", fifthBttn: "O", eigthBttn: "O" };
      setIsColorChange(redColor);
      
      alert("Owinner");
    }
    if (thirdBttn === "X" && sixthBttn === "X" && ninthBttn === "X") {
      alert("Owinner");
      setIsDisable(true);
      const redColor = {thirdBttn: "X", sixthBttn: "X", ninthBttn: "X" };
      setIsColorChange(redColor);
    }
    if (thirdBttn === "O" && sixthBttn === "O" && ninthBttn === "O") {
      alert("Owinner");
      const redColor = {thirdBttn: "O", sixthBttn: "O", ninthBttn: "O" };
      setIsColorChange(redColor);
      setIsDisable(true);
    }
  }, [
    firstBttn,
    secondBttn,
    thirdBttn,
    fourthBttn,
    fifthBttn,
    sixthBttn,
    seventhBttn,
    eigthBttn,
    ninthBttn,
  ]);

  useEffect(() => {
    setIsXstate(!isXstate);
  }, [
    firstBttn,
    secondBttn,
    thirdBttn,
    fourthBttn,
    fifthBttn,
    sixthBttn,
    seventhBttn,
    eigthBttn,
    ninthBttn,
  ]);
  const handleReset = () => {
    setFirstBttn("");
    setSecondBttn("");
    setThirdBttn("");
    setFourthBttn("");
    setFifthBttn("");
    setSixthBttn("");
    setSeventhBttn("");
    setEigthBttn("");
    setNinthBttn("");
  };
  const handleFirstBtn = (_id) => {
    if (_id === "first" && firstBttn === "") {
      console.log("isXstate",isXstate)
      if (isXstate) {
        setFirstBttn("X");
      } else {
        setFirstBttn("O");
      }
    }
    if (_id === "second" && secondBttn === "") {
      return isXstate ? setSecondBttn("X") : setSecondBttn("O");
    }
    if (_id === "third" && thirdBttn === "") {
      return isXstate ? setThirdBttn("X") : setThirdBttn("O");
    }
    if (_id === "fourth" && fourthBttn === "") {
      return isXstate ? setFourthBttn("X") : setFourthBttn("O");
    }
    if (_id === "fifth" && fifthBttn === "") {
      return isXstate ? setFifthBttn("X") : setFifthBttn("O");
    }
    if (_id === "sixth" && sixthBttn === "") {
      return isXstate ? setSixthBttn("X") : setSixthBttn("O");
    }
    if (_id === "seventh" && seventhBttn === "") {
      return isXstate ? setSeventhBttn("X") : setSeventhBttn("O");
    }
    if (_id === "eight" && eigthBttn === "") {
      return isXstate ? setEigthBttn("X") : setEigthBttn("O");
    }
    if (_id === "nine" && ninthBttn === "") {
      return isXstate ? setNinthBttn("X") : setNinthBttn("O");
    }
  };
  return (
    <div style={{ marginTop: "400", alignContent: "center" }}>
      {/* 1,2,3 */}
      <div>
        <button
        // if (isColorChange.firstBttn === firstBttn) {
        //   color = "red";
        // } else {
        //   color = "green";
        // }
        
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor: isColorChange.firstBttn===firstBttn?"red": "green"  }}
          onClick={() => handleFirstBtn("first")}
        >
          {firstBttn.length > 0 ? firstBttn : "-"}
        </button>
        <button
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor: isColorChange.secondBttn===secondBttn?"red": "green"   }}
          onClick={() => handleFirstBtn("second")}
        >
          {secondBttn?.length > 0 ? secondBttn : "-"}
        </button>
        <button
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor: isColorChange.thirdBttn===thirdBttn?"red": "green"  }} //obj.value===value
          onClick={() => handleFirstBtn("third")}
        >
          {thirdBttn.length > 0 ? thirdBttn : "-"}  
          {/* x print krenge to lenghth zero se bad jaygi fir - iski jagah se hatkar x or O print hojayga */}
        </button>
      </div>
      {/* 4,5,6 */}
      <div>
        <button
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor: isColorChange.fourthBttn===fourthBttn?"red": "green"  }}
          onClick={() => handleFirstBtn("fourth")}
        >
          {fourthBttn.length > 0 ? fourthBttn : "-"}
        </button>
        <button
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor: isColorChange.fifthBttn===fifthBttn?"red": "green"  }}
          onClick={() => handleFirstBtn("fifth")}
        >
          {fifthBttn.length > 0 ? fifthBttn : "-"}
        </button>
        <button
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor: isColorChange.sixthBttn===sixthBttn?"red": "green"  }}
          onClick={() => handleFirstBtn("sixth")}
        >
          {sixthBttn.length > 0 ? sixthBttn : "-"}
        </button>
      </div>
      {/* 7,8,9 */}
      <div>
        <button
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor:  isColorChange.seventhBttn===seventhBttn?"red": "green"  }}
          onClick={() => handleFirstBtn("seventh")}
        >
          {seventhBttn?.length > 0 ? seventhBttn : "-"}
        </button>
        <button
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor:  isColorChange.eigthBttn===eigthBttn?"red": "green"  }}
          onClick={() => handleFirstBtn("eight")}
        >
          {eigthBttn?.length > 0 ? eigthBttn : "-"}
        </button>
        <button
          disabled={isDisable}
          style={{ height: 100, width: 100,backgroundColor:  isColorChange.ninthBttn===ninthBttn?"red": "green" }}
          onClick={() => handleFirstBtn("nine")}
        >
          {ninthBttn?.length > 0 ? ninthBttn : "-"}
        </button>
      </div>
      <div>
        <button
          style={{ height: 20, width: 50 }}
          onClick={() => {
            handleReset();
            setIsDisable(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
