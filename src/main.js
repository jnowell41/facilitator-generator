var nologysts = [
  {
    name: "Andy",
    image: "pics/andy.jpg"
  },
  {
    name: "Lauren",
    image: "pics/lauren.jpg"
  },
  {
    name: "Lee",
    image: "pics/lee.jpg"
  },
  {
    name: "Cameron",
    image: "pics/cameron.jpg"
  },
  {
    name: "Chloe",
    image: "pics/chloe.jpg"
  },
  {
    name: "Myles",
    image: "pics/myles.jpg"
  },
  {
    name: "Mo",
    image: "pics/mo.jpg"
  },
  {
    name: "James",
    image: "pics/james.png"
  },
  {
    name: "Rhys",
    image: "pics/rhys.jpg"
  },
  {
    name: "Tom",
    image: "pics/tom.jpg"
  },
  {
    name: "Sian",
    image: "pics/sian.jpg"
  },
  {
    name: "Siobahn",
    image: "pics/siobhan.png"
  },
  {
    name: "Ben",
    image: "pics/ben.jpg"
  }
];

var facilitators = [];
var imageList = [];
var labelNames = document.getElementsByTagName("LABEL");
var inputTypes = document.getElementsByTagName("INPUT");

nologysts.forEach(element => {
  facilitators.push(element.name);
  imageList.push(element.image);
});

for (i = 0; i < labelNames.length; i++) {
  var newImage = document.createElement("IMG");
  labelNames[i].appendChild(newImage);
  var finalImage = document.getElementsByTagName("IMG");
  finalImage[i].src = imageList[i];
}

for (i = 0; i < labelNames.length; i++) {
  labelNames[i].innerHTML = facilitators[i];
  inputTypes[i].value = facilitators[i];
}

const chooseCharacter = () => {
  var shortList = [];
  for (i = 0; i < inputTypes.length; i++) {
    if (inputTypes[i].checked) {
      shortList.push(inputTypes[i].value);
    }
  }

  numberGenerator = Math.floor(Math.random() * shortList.length);
  var winner = shortList[numberGenerator];
  //   document.getElementById("result").innerHTML =
  //     "Today our Almight Leader is " + winner + ".";
  return winner;
};

const finalChange = (param = chooseCharacter()) => {
  nologysts.forEach(element => {
    if (param === element.name) {
      document.getElementById("result").innerHTML = `<img src =
      ${element.image}><p>Today's Almighty Leader is ${element.name}!</p>`;
    }
  });
};
