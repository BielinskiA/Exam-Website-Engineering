let page = 1;
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
        list.innerHTML ="";
        for (let index = 0; index < data.length; index++) {
            const li = document.createElement("li");
            const ul = document.createElement("ul");
            const imgLi = document.createElement("li");
            const nameLi = document.createElement("li");
            const bountyLi = document.createElement("li");
            const img = document.createElement("img");
            img.src = data[index].image_url;

            const nameOf = data[index].name.en;
            let bounty = data[index].bounties[0];

            if (data[index].bounties.length == 0) {
                bounty = 0;
            }else{
                bounty = bounty.amount;
                const check = document.createElement("input");
                check.type = "checkbox";
                check.
                bountyLi.append(check);
                
            }
            imgLi.append(img);
            nameLi.append("Name: "+nameOf);
            bountyLi.append("Bounty: "+bounty);
            ul.append(imgLi, " " ,nameLi, " "  ,bountyLi);
            li.append(ul);
            list.append(li);
        }
    } catch (error) {
        console.log(error);
    }
}

async function getChar() {
    try {
        const name = document.getElementById("search").value;
        const response = await fetch(`http://localhost:3000/api/onepiece/characters?q=${name}`);

        if (!response.ok) {
            throw new Error(error);
        }

        const data = await response.json();
        console.log(data);
        const list = document.getElementById("allChar");
        list.innerHTML ="";
        for (let index = 0; index < data.length; index++) {
            
            const li = document.createElement("li");
            const ul = document.createElement("ul");
            const imgLi = document.createElement("li");
            const nameLi = document.createElement("li");
            const bountyLi = document.createElement("li");
            const img = document.createElement("img");
            img.src = data[index].image_url;

            const nameOf = data[index].name.en;
            let bounty = data[index].bounties[0];

            if (data[index].bounties.length == 0) {
                bounty = 0;
            }else{
                bounty = bounty.amount;
                const check = document.createElement("input");
                check.type = "checkbox";

                bountyLi.append(check);
                
            }
            imgLi.append(img);
            nameLi.append("Name: "+nameOf);
            bountyLi.append("Bounty: "+bounty);
            ul.append(imgLi, " " ,nameLi, " "  ,bountyLi);
            li.append(ul);
            list.append(li);
        }
        console.log(data);
    } catch (error) {
        console.log(error);
    }  
}
function clearR(){
    page = 1;
    getAll();
}

function prev(){
    if(page > 1){
        page--;
        getAll();
    }
}

function next(){
    page++;
    getAll();
}




