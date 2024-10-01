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

export const getCelestials = async () => {
  const data = await fetchStarmap()
  const filteredData = data.filter((item: CelestialObject) => {
    return (
      item.type === "PLANET" ||
      item.type === "SATELLITE"
    );
  });
  const planets = filteredData.map((item: CelestialObject) => ({
    id: item.id,
    name: item.name,
    parent_id: item.parent_id,
    type: item.type
  }));
  return planets;
}