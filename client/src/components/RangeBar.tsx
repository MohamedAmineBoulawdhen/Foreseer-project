import { useState } from "react";

function RangeBar({
  setRange,
  range,
  min,
  max,
  step,
}: {
  setRange: any;
  range: any;
  min: number;
  max: number;
  step: any;
}) {
  const changedRange = (e: any) => {
    const newRangeValue = Number.isFinite(range)
      ? parseFloat(e.target.value)
      : parseInt(e.target.value);
    setRange(newRangeValue);
    console.log(range);
  };
  return (
    <div style={{ width: "30%" }}>
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      ></label>
      <input
        id="default-range"
        type="range"
        value={range}
        step={step}
        max={max}
        min={min}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={changedRange}
        style={{ width: "100%" }}
      />
      <div className="flex justify-between text-sm">
        <span>{formatValue(min)}</span>
        <span>{max > 1000 ? formatValue(max) : max}</span>
      </div>
      <p>Selected Value: {max >= 1000 ? formatValue(range) : range}</p>
    </div>
  );
}

export default RangeBar;
function formatValue(value: number) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + "k";
  }
  return value.toString();
}
