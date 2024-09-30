import { useApi } from "@/hook/useApi";

const fetchStarmap = async () => {
  const set = `starmap/star-system?code=STANTON`
  const data = await useApi(set)
  const filteredData = data.filter((item: any) => {
    return (
      item.type !== "JUMPPOINT" &&
      item.type !== "STAR" &&
      item.type !== "ASTEROIDBELT"
    );
  });
  return filteredData;
}

export const getPlanets = async () => {
  const data = await fetchStarmap()
  const planets = data.filter((item: any) => {
    return item.type === "PLANET";
    });
  return planets;
}

export const getMoons = async () => {
  const data = await fetchStarmap()
  const moons = data.filter((item: any) => {
    return item.type === "SATELLITE";
    });
  return moons;
}