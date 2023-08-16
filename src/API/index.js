const COHORT = '2305-FTB-ET-WEB-PT';
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
    try {
        const response = await fetch(`${baseUrl}/players`);
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.error(error);
    }
    
}

export async function fetchSinglePlayer(id) {
    try {
        const response = await fetch(`${baseUrl}/players/${id}`);
        const result = await response.json();
        // console.log(id)
        return result;
    } catch (error) {
        console.log(error);
    }
}