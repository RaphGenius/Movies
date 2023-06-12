import { useState, useEffect } from "react";
import { extractColorsFromSrc, extractColors } from "extract-colors";

type dataColor = {
  area: number;
  blue: number;
  green: number;
  hex: string;
  hue: number;
  intensity: number;
  lightness: number;
  red: number;
  saturation: number;
};

function useMainColor(imageLink: string) {
  const [colors, setcolors] = useState<string[]>([]);

  useEffect(() => {
    const emptyArray: string[] = [];
    extractColorsFromSrc(imageLink, { crossOrigin: "anonymous" })
      .then((data: dataColor[]) => data.map((el) => emptyArray.push(el.hex)))
      .catch((err) => console.log(err))
      .finally(() => {
        setcolors(emptyArray);
      });
  }, [imageLink]);
  if (colors.length < 1) {
    setcolors(["#fff"]);
  }

  return [colors];
}

export default useMainColor;
