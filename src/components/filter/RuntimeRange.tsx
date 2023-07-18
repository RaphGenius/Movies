import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../app/store";
import {
  handleRuntimeMax,
  handleRuntimeMin,
  minMaxType,
} from "../../features/filters/filterListSlice";

function RuntimeRange() {
  const dispatch = useAppDispatch();
  const runtimeValue = useAppSelector(
    (state: RootState) => state.filter.runtime
  );
  const runtimeRange: minMaxType = {
    min: 0,
    max: 400,
  };

  return (
    <div className="range_container">
      <div className="sliders_control">
        <input
          onChange={(e) => dispatch(handleRuntimeMin(Number(e.target.value)))}
          className="relative"
          id="fromSlider"
          type="range"
          value={runtimeValue.min}
          min={runtimeRange.min}
          step={10}
          max={runtimeRange.max}
        />
        <span className="absolute left-0 top-5 "> {runtimeValue.min} </span>
        <input
          onChange={(e) => dispatch(handleRuntimeMax(Number(e.target.value)))}
          className="relative"
          id="toSlider"
          type="range"
          value={runtimeValue.max}
          min={runtimeRange.min}
          step={10}
          max={runtimeRange.max}
        />
        <span className="absolute right-0 top-5 ">{runtimeValue.max} </span>
      </div>
    </div>
  );
}

export default RuntimeRange;
