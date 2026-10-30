const page = 1;
const bounties = 0;


getAll();

async function getAll(){
    try {
        const response = await fetch("json/allchar.json");

        if (!response.ok) {
            throw new Error(error);
        }

        const data = await response.json();

        const list = document.getElementById("allChar");

        const imgLi = document.createElement("li");
        const nameLi = document.createElement("li");
        const bountyLi = document.createElement("li");

        const img = data.imagine_url;
        const name

    } catch (error) {
        console.log(error);
    }
}

