getAll();

async function getAll(){
    try {
        const response = await fetch(`https://onepieceapi.com/api/characters`);

        if (!response.ok) {
            throw new Error(error);
        }

        const data = await response.json();
    } catch (error) {
        console.log(error);
    }
}