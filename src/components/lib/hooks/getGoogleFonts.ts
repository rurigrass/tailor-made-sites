import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// export const getGoogleFonts = useQuery({
//   queryKey: ["fonts"],
//   queryFn: async () => {
//     const { data } = await axios.get(
//       "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCQ7NbkKMAJT-pVrGp-4oi0Fo0CqbBMytE"
//     );
//     return data;
//   },
// });

export const getGoogleFonts = () =>
  useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
  });
