import react, { useState, useRef, useEffect } from "react";
import "./DropDown.css";
import DropDownChild from "./DropDownChild";

const dummyData = [
  { id: 0, key: "first" },
  { id: 1, key: "second" },
  { id: 2, key: "third" },
  { id: 3, key: "fourth" },
  { id: 4, key: "fifth" }
];

const DropDown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const dropDownItemClicked = (key) => {
    setIsActive(false);
    console.log(key);
  };

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>User</span>
      </button>
      <div
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <DropDownChild
          data={dummyData}
          dropDownItemClicked={dropDownItemClicked}
        />
      </div>
    </div>
  );
};

export default DropDown;
