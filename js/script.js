//ARRAY DI OGGETTI
const teamList = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        photo : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        photo : "angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        photo : "walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        photo : "angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        photo : "scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        photo : "barbara-ramos-graphic-designer.jpg"
    }
];

//COSTANTI
const rowElem = document.querySelector(".row")
let curMember = "";

for (let i = 0; i < teamList.length; i++) {
    let curMemberElem = teamList[i];

    for (let key in curMemberElem) {
    console.log(key, curMemberElem[key]);
    }

    curMember += `      
                    <h2>${curMemberElem.name}</h2>
                    <h3>${curMemberElem.role}</h3>
                    <h3 class="mb-3">${curMemberElem.photo}</h3>
                `
};

rowElem.innerHTML = curMember;