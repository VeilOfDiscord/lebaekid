interface ModalProp{
  clickedImg: string;
  setClickedImg: any;
}

const Modal: React.FC<ModalProp> = ({ clickedImg, setClickedImg }) => {
  
  const handleClick = (e: any) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div
        className="flex items-center justify-center top-0 left-0 h-full w-full fixed dismiss"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        onClick={handleClick}
      >
        <img className="h-[90%] " src={clickedImg} alt={"Bigger Picture"} />
        <span
          className="text-white absolute text-2xl top-8 right-8 font-bold dismiss cursor-pointer"
          onClick={handleClick}
        >
          [ X ]
        </span>
      </div>
    </>
  );
};
export default Modal;
