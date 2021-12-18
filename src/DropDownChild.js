import react from "react";

const dummyData = [
  { id: 0, key: "first" },
  { id: 1, key: "second" },
  { id: 2, key: "third" },
  { id: 3, key: "fourth" },
  { id: 4, key: "fifth" }
];

const DropDownChild = (props) => {
  const { data, dropDownItemClicked } = props;

  return (
    <div>
      {data.map((item) => {
        return (
          <div onClick={() => dropDownItemClicked(item.key)}>{item.key}</div>
        );
      })}
    </div>
  );
};
DropDownChild.defaultProps = {
  data: dummyData
};
export default DropDownChild;
