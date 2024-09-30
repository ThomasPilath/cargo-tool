export const useApi = async (set: string) => {
  try {
    const res = await fetch(`https://api.starcitizen-api.com/${process.env.API_KEY}/v1/live/${set}`, {
      headers: {
      "Content-Type": "application/json",
      "Access-control-Allow-Origin": "*"
      },
    });
    const updatedRes = await res.json();
    const data = updatedRes.data.celestial_objects;
    return data;
  } catch (error) {
    console.error(error);
  }
};