const useStarCitizenApi = async (set: string) => {
  try {
    const res = await fetch(
    `https://api.starcitizen-api.com/${process.env.SC_KEY}/v1/live/${set}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-control-Allow-Origin": "*"
      },
    });
    const data = await res.json();
    if (data.message === "ok" && data.success === 1) {
      return data.data;
    } else {
      return {status: 404, message: "API Response not success"};
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCelestials = async () => {
  const res = await useStarCitizenApi(`starmap/star-system?code=STANTON`)
  const data = res.celestial_objects;
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