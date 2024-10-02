import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  background_image: string;
}

function useGenre() {
  return useData<Genre>("/games");
}

export default useGenre;
