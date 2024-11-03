import { Dispatch, SetStateAction } from "react";
import s from "./LoadMoreBtn.module.css";

interface BtnProps {
  setPage:Dispatch<SetStateAction<number>>
}

const LoadMoreBtn:React.FC<BtnProps> = ({ setPage }) => {
  const handleChangePage = () => {
    setPage(prev => prev+1);
  };
  return (
    <div>
      <button onClick={handleChangePage} className={s.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
