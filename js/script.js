const page = 1;
const bounties = 0;


getAll();

async function getAll(){
    try {
        const response = await fetch(`http://localhost:3000/api/onepiece/characters?page=${page}&limit=10`);

        if (!response.ok) {
            throw new Error(error);
        }

        const data = await response.json();
        console.log(data);
        const list = document.getElementById("allChar");

        for (let index = 0; index < data.length; index++) {
            const li = document.createElement("li");
            const ul = document.createElement("ul");
            const imgLi = document.createElement("li");
            const nameLi = document.createElement("li");
            const bountyLi = document.createElement("li");

            const img = data[index].imagine_url;
            const nameOf = data[index].name.en;
            const bounty = data[index].bounties[0];
            
            imgLi.append(img);
            nameLi.append(nameOf);
            bountyLi.append(bounty);
            ul.append(img, nameOf, bounty);
            li.append(ul);
            list.append(li);
        }


    } catch (error) {
        console.log(error);
    }
}

