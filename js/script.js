let page = 1;
let bounties = 0;
let count = 2;
const bountiesS = []; 
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
                check.onclick = () => bount(bounty);
                bountyLi.append(check);
                
            }
            imgLi.onclick = () => {
                
                const ageLi = document.createElement("li");
                const status = document.createElement("li");

                ageLi.textContent = data[index].age;
                status.textContent = data[index].status;

                ul.append(ageLi, status);

            };
            imgLi.append(img);
            nameLi.append("Name: "+nameOf);
            bountyLi.append("Bounty: "+bounty);
            ul.append(imgLi, " " ,nameLi, " "  ,bountyLi);
            li.append(ul);
            list.append(li);
        }
    } catch (error) {
        console.log(error);
        alert("Something goes wrong")
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
                check.onclick = () => bount(bounty);
                bountyLi.append(check);
                
            }
            imgLi.onclick = () => {
                
                const ageLi = document.createElement("li");
                const status = document.createElement("li");

                ageLi.textContent = data[index].age;
                status.textContent = data[index].status;

                ul.append(ageLi, status);

            };
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
        alert("Something goes wrong")
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

function bount(bounty){

    if (count%2 == 0) {
        bounties += bounty;
        document.getElementById("bounty").textContent = `Bounty ${bounties}`;
        count = 1;
    }else{
        bounties -= bounty;
        document.getElementById("bounty").textContent = `Bounty ${bounties}`;
        count = 2;
    }
}

let o = 2;

function one(){

    if (o%2 == 0) {
        const body = document.getElementById("body");
        body.style.backgroundColor = "#371901"

        o = 1;
    }else{
        const body = document.getElementById("body");
        body.style.backgroundColor = "white"
        o = 2;
    }
}

let t = 2;

function two(){

    if (t%2 == 0) {
        const body = document.getElementById("body");
        body.style.backgroundColor = "silver"

        t = 1;
    }else{
        const body = document.getElementById("body");
        body.style.backgroundColor = "white"
        t = 2;
    }
}

let th = 2;

function three(){

    if (th%2 == 0) {
        const body = document.getElementById("body");
        body.style.backgroundColor = "silver"
        th = 1;
    }else{
        const body = document.getElementById("body");
        body.style.backgroundColor = "white"
        th = 2;
    }
}