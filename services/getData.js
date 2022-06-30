const url = "https://bobsburgers-api.herokuapp.com/characters/?"

export const getData = async (skip, limit) => {
    const response = await fetch(`${url}limit=${limit}&skip=${skip}`);
    const data = await response.json();

    return data;
}
