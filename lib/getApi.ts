import noApi from "@/data/noApiData.json"

export const getApi = async () => {
  try {
    return noApi
    // console.log(process.env.API_URL)
    // let res = await fetch(process.env.API_URL)
    // let data = await res.json()
    // return data
  } catch (error) {
    console.error(error)
  }
}