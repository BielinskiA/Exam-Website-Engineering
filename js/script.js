const page = 1;
const bounties = 0;


getAll();

async function getAll(){
    try {
        const response = await fetch("http://localhost:3000/api/onepiece/characters");

        if (!response.ok) {
            throw new Error(error);
        }

        const data = await response.json();
        console.log(data);
        const list = document.getElementById("allChar");

        for (let index = 0; index < array.length; index++) {
            const imgLi = document.createElement("li");
            const nameLi = document.createElement("li");
            const bountyLi = document.createElement("li");

            const img = data.imagine_url;
            const name = data.name.en;
            const bounty = data.bounties[0];
            
            
        }
        


    } catch (error) {
        console.log(error);
    }
}

