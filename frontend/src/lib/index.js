export const getData = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Data fetching error" + response?.statusText);
    }
    const data = await responce.json();
  } catch (error) {
    console.log("Error while fetching", error);
    throw error;
  }
};
