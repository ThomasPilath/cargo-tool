import { useApi } from "@/hook/useApi";

export const getCelestials = async () => {
  const set = `starmap/star-system?code=STANTON`
  const data = await useApi(set)
  const filteredData = await data.filter((item: any) => {
    return (
      item.type === "PLANET" ||
      item.type === "SATELLITE"
    );
  });
  return await filteredData.map((item: CelestialObject) => ({
    id: item.id,
    name: item.name,
    parent_id: item.parent_id,
    type: item.type
  }));
}