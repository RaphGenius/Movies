import { RootState } from "../../app/store";
import {
  handleVoteAverageMax,
  handleVoteAverageMin,
  minMaxType,
} from "../../features/filterListSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

function VoteAverageInputRange() {
  const dispatch = useAppDispatch();
  const voteAverageValue = useAppSelector(
    (state: RootState) => state.filter.voteAverage
  );
  const voteAverageRange: minMaxType = {
    min: 0,
    max: 10,
  };
  return (
    <div className="range_container">
      <div className="sliders_control">
        <input
          onChange={(e) =>
            dispatch(handleVoteAverageMin(Number(e.target.value)))
          }
          className="relative"
          id="fromSlider"
          type="range"
          value={voteAverageValue.min}
          min={voteAverageRange.min}
          step={1}
          max={voteAverageRange.max}
        />
        <span className="absolute left-0 top-5 "> {voteAverageValue.min} </span>
        <input
          onChange={(e) =>
            dispatch(handleVoteAverageMax(Number(e.target.value)))
          }
          className="relative"
          id="toSlider"
          type="range"
          value={voteAverageValue.max}
          min={voteAverageRange.min}
          step={1}
          max={voteAverageRange.max}
        />
        <span className="absolute right-0 top-5 ">{voteAverageValue.max} </span>
      </div>
    </div>
  );
}

export default VoteAverageInputRange;
