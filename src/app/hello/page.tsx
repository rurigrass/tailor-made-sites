"use client";
import { getGoogleFonts } from "@/components/lib/hooks/getGoogleFonts";

export default function Page() {
  // const { data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     axios
  //       .get("https://api.github.com/repos/tannerlinsley/react-query")
  //       .then((res) => res.data),
  // });

  const { isLoading, data } = getGoogleFonts();

  console.log("loading..", isLoading);

  console.log(data);

  return <div>hello</div>;
}
