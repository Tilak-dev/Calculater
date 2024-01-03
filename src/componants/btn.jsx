import styles from "./box.module.css";

const BtnFace = ({onBtnClick}) => {
   const btnArray = [
      "0",
      "AC",
      "-",
      "/",
      "7",
      "8",
      "9",
      "*",
      "4",
      "5",
      "6",
      "+",
      "3",
      "2",
      "1",
      "=",
   ];
   return (
      <div className={styles.btnContainer}>
         {btnArray.map((btnName) => (
            <button className={styles.btnface} onClick={()=>onBtnClick(btnName)}>{btnName}</button>
         ))}
      </div>
   );
};

export default BtnFace;
