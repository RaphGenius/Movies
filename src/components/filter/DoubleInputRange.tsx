import { minMaxType } from "../../features/filterListSlice";

type Props = {
  value: minMaxType;
  handleMinValue: any;
  handleMaxValue: (value: number) => void;
  step: number;
  rangeValue: minMaxType;
};
function DoubleInputRange({
  value,
  handleMaxValue,
  handleMinValue,
  step,
  rangeValue,
}: Props) {
  console.log(handleMaxValue);

  return (
    <div className="range_container">
      <div className="sliders_control">
        <input
          onChange={(e) => handleMinValue(Number(e.target.value))}
          className="relative"
          id="fromSlider"
          type="range"
          value={value.min}
          min={rangeValue.min}
          step={step}
          max={rangeValue.max}
        />
        <span className="absolute left-0 top-5 "> {value.min} </span>
        <input
          onChange={(e) => handleMaxValue(Number(e.target.value))}
          className="relative"
          id="toSlider"
          type="range"
          value={value.max}
          min={rangeValue.min}
          step={step}
          max={rangeValue.max}
        />
        <span className="absolute right-0 top-5 ">{value.max} </span>
      </div>
    </div>
  );
}

export default DoubleInputRange;
