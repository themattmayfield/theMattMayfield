import Image from "next/image";
import { useState } from "react";

export default function BlurImage(props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={`${props.className} ${
        isLoading
          ? "grayscale blue-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      } duration-700 ease-in-out`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
