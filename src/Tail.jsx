import { useState } from "react";
import './index.css'
const HeadAndTail = () => {
  const [selectValue, setSelectValue] = useState('');
  const [columns, setColumns] = useState([]);
  const [validation, setValidation] = useState('');

  const valueHandle = (e) => {
    setSelectValue(e.target.value);
  };

  const click = () => {
    if (selectValue === '') {
      setValidation("Please select a value");
      return;
    }
    setValidation('');

    if (columns.length === 0 || columns[columns.length - 1].value !== selectValue) {
      setColumns([...columns, { value: selectValue, data: [selectValue] }]);
    } else {
      const updatedColumns = [...columns];
      updatedColumns[columns.length - 1].data.push(selectValue);
      setColumns(updatedColumns);
    }

    setSelectValue('');
  };

  return (
    <div className="main">
      <div className="flex justify-center	my-4 gap-6">
      <select value={selectValue} onChange={valueHandle} className="border-2 rounded-md  py-2 border-sky-500">
        <option value="" disabled>Select Value</option>
        <option value="H">H</option>
        <option value="T">T</option>
      </select>
      <button onClick={click} className="border-2 rounded-md px-4 py-2 border-sky-500">Submit</button>
      </div>

      <h3 className="text-red-600 text-center">{validation}</h3>
      <div className="text-2xl mx-20">
        {columns.map((col, colIndex) => (
          <div key={colIndex} >
            {col.data.map((item, index) => (
              <span className="m-4" key={index}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadAndTail;
