import TxtInput from "./componants/txt";
import BtnFace from "./componants/btn";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
   const [calVal, setCalVal] = useState("");
   const onBtnClick = (buttonText) => {
      if (buttonText === "AC") {
         setCalVal("");
      } else if (buttonText === "=") {
         const result = eval(calVal);
         setCalVal(result);
      } else {
         const newDisplayValue = calVal + buttonText;
         setCalVal(newDisplayValue);
      }
   };

   return (
      <center>
         <div className={styles.calculatorContainer}>
            <TxtInput displayValue={calVal}></TxtInput>
            <BtnFace onBtnClick={onBtnClick}></BtnFace>
         </div>
      </center>
   );
}

export default App;
