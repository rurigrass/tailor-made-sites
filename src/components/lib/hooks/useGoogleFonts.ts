import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGoogleFonts = () =>
  useQuery({
    queryKey: ["fonts"],
    queryFn: () =>
      axios
        .get(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.NEXT_PUBLIC_GOOGLE_FONTS_KEY}`
        )
        .then((res) => res.data.items),
  });
