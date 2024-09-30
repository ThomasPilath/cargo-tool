import { useApi } from "@/app/hook/useApi";

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
  const filteredData = data.filter((item: CelestialObject) => {
    return item.type === "PLANET";
  });
  const planets = filteredData.map((item: CelestialObject) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    texture: item.texture
  }));
  return planets;
}

export const getMoons = async () => {
  const data = await fetchStarmap()
  const filteredData = data.filter((item: CelestialObject) => {
    return item.type === "SATELLITE";
    });
    const moons = filteredData.map((item: CelestialObject) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      texture: item.texture
    }));
    return moons;
}