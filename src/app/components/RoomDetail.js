import React, { Component } from "react";

const Select = ({ selectedValue, options, onDataChange }) => (
  <select
    onChange={({ target: { value } }) => onDataChange(value)}
    value={selectedValue}
  >
    {options.map((option) => (
      <option value={option.value} key={option.name}>
        {option.name}
      </option>
    ))}
  </select>
);

// function range(start, end) {
//     return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
// }

// const occupants = range(1, 4).map (occupants => ({name: occupants, value: occupants}));

const occupantOptions = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
];

const roomTypeOptions = [
  { name: "Luxury Tent", value: "Tent" },
  { name: "Luxury Family Tent", value: "Family" },
];

const RoomDetail = (props) => {
  const { roomType, occupants, onRoomTypeChange, onOccupantsChange } = props;
  return (
    <div>
      <h4>Room Details</h4>

      <label><strong>Room Type</strong></label>
      <Select
        selectedValue={roomType}
        options={roomTypeOptions}
        onDataChange={onRoomTypeChange}
      />

      <label><strong>Occupants</strong></label>
      <Select
        selectedValue={occupants}
        options={occupantOptions}
        onDataChange={onOccupantsChange}
      />

      <div className='pad-top'>
        <p><strong>Government Fees (per person per day):</strong><br />
        <strong>Park Fees:</strong> $ 82.60<br />
        <strong>Concession Fees:</strong> $ 59.00<br />
        <strong>Tanzania Tourism Development Levy (TTDL):</strong> $ 13.99</p>
      </div>

    </div>
  );
};

export default RoomDetail;
