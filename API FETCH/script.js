const name = document.getElementById("name");
const vision = document.getElementById("vision");
const weapon = document.getElementById("weapon");
const nation = document.getElementById("nation");
const affiliation = document.getElementById("affiliation");
const bday = document.getElementById("bday");
const constellation = document.getElementById("constellation");
const passive = document.getElementById("passive");
const charName = document.getElementById("charName");
const rarity = document.getElementById("rarity");
const picture = document.getElementById("picture");
const skill = document.getElementById("skill");
const constellations = document.getElementById("constellations");
const title = document.getElementById("title");
const openImg = document.getElementById("picture");

const select = document.getElementById("selectChara");
const options = [
  "albedo",
  "aloy",
  "amber",
  "ayaka",
  "ayato",
  "barbara",
  "beidou",
  "bennett",
  "chongyun",
  "diluc",
  "diona",
  "eula",
  "fischl",
  "ganyu",
  "gorou",
  "hu tao",
  "itto",
  "jean",
  "kaeya",
  "kazuha",
  "keqing",
  "klee",
  "kokomi",
  "kuki",
  "lisa",
  "mona",
  "ningguang",
  "noelle",
  "qiqi",
  "raiden Shogun",
  "razor",
  "rosaria",
  "sara",
  "sayu",
  "shenhe",
  "sucrose",
  "tartaglia",
  "thoma",
  "traveller (male)",
  "traveller (female)",
  "venti",
  "xiangling",
  "xiao",
  "xingqiu",
  "xinyan",
  "yae",
  "yanfei",
  "yelan",
  "yoimiya",
  "yun jin",
  "zhongli",
];

for (var i = 0; i < options.length; i++) {
  var opt = options[i].charAt(0).toUpperCase() + options[i].substr(1);
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

// run script when a name is selected
function selectName(e) {
  document.getElementById("charName").value = e.target.value;
  loadChar(e);
}

// Event listener for manual input

charName.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    loadChar(e);
  }
});

let charData;
loadInfo();

async function loadInfo() {
  const response = await fetch(`https://gsi.fly.dev/characters?limit=1000`);
  const data = await response.json();
  charData = data;
  return data;
}

function loadChar(e) {
  let charId;
  (async function () {
    let cName = charName.value;
    console.log(cName, charData.results);
    charId = charData.results.find((name) => name.name === cName);
    console.log(charId);
  })();

  e.preventDefault();
  loadingText();
  getInfo();

  function getInfo() {
    const star = "★";
    const imgLink = `https://genshin.jmp.blue/characters/${charId.name.charAt(0).toLowerCase() + charId.name.substr(1)}/card`;
    console.log(charId.name);
    fetch(`https://gsi.fly.dev/characters/${charId.id}`)
      .then((res) => res.json())
      .then((character) => {
        data = character.result;
        name.innerHTML = data.name;
        validNameChecker();
        vision.innerHTML = data.vision;
        weapon.innerHTML = data.weapon;
        rarity.innerHTML = star.repeat(data.rarity.charAt(0));
        nation.innerHTML = data.region;
        affiliation.innerHTML = data.affiliation;
        bday.innerHTML = data.birthday;
        constellation.innerHTML = data.constellation;
        title.innerHTML = data.title;
        skill.innerHTML = data.category;
        passive.innerHTML = data.model_type;

        changeTitle();
        document.getElementById("picture").src = imgLink;
      });
  }
}

openImg.addEventListener("click", () =>
  window.open(document.getElementById("picture").src)
);

function validNameChecker() {
  if (name.innerHTML === "undefined") {
    // alert("Please enter a valid character name");
    name.innerHTML = "<em>...</em>";
    vision.innerHTML = "<em>...</em>";
    weapon.innerHTML = "<em>...</em>";
    nation.innerHTML = "<em>...</em>";
    affiliation.innerHTML = "<em>...</em>";
    bday.innerHTML = "<em>...</em>";
    constellation.innerHTML = "<em>...</em>";
    passive.innerHTML = "<em>...</em>";
    rarity.innerHTML = "<em>...</em>";
    picture.innerHTML = "";
    skill.innerHTML = "<em>...</em>";
    title.innerHTML = "<em>...</em>";
    console.log("failed to retrieve data");
  }
}

function changeTitle() {
  if (title.innerHTML === "undefined") {
    title.innerHTML = "None";
  }
}

function loadingText() {
  name.innerHTML = "<em>Loading...</em>";
  vision.innerHTML = "<em>Loading...</em>";
  weapon.innerHTML = "<em>Loading...</em>";
  nation.innerHTML = "<em>Loading...</em>";
  affiliation.innerHTML = "<em>Loading...</em>";
  bday.innerHTML = "<em>Loading...</em>";
  constellation.innerHTML = "<em>Loading...</em>";
  passive.innerHTML = "<em>Loading...</em>";
  rarity.innerHTML = "<em>Loading...</em>";
  picture.innerHTML = "<em>Loading...</em>";
  skill.innerHTML = "<em>Loading...</em>";
  title.innerHTML = "<em>Loading...</em>";
}
