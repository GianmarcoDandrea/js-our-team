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
const gridElem = document.querySelector(".grid")
let curMember = "";

for (let i = 0; i < teamList.length; i++) {
    let curMemberElem = teamList[i];

    for (let key in curMemberElem) {
    console.log(key, curMemberElem[key]);
    }

    curMember += `
                    <div class="card my-3">
                        <img src="img/${curMemberElem.photo}" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title">${curMemberElem.name}</h5>
                            <p class="card-text">${curMemberElem.role}</p>
                        </div>
                    </div>
                `
};

gridElem.innerHTML = curMember;