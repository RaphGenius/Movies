import React from "react";

function NoVideo({
  setVideoID,
}: {
  setVideoID: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <div
      onClick={() => setVideoID(null)}
      className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center  backdrop-blur-sm z-50 "
    >
      <div className="relative ">
        <h4 className="text-center mt-4 text-black text-xl">
          Aucune bande annonce disponible actuellement :(
        </h4>
      </div>
    </div>
  );
}

export default NoVideo;
