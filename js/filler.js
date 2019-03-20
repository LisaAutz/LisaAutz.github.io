// var bouncing = 0.2; //restitution - between 0 and 1; higher is more bouncing 
// var movingSpeed = 0.06; //  frictionAir objects falling down speed between 0 and 1; less is faster
// var force = 0; //  friction
// var weightOfTheObject = 0.04;//density


var lgball1 = Matter.Bodies.circle(window.innerWidth/2, -455, 55, {
  label: "music",
  density: weightOfTheObject,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:"https://www.google.com",
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 3,
    myText: {
      title: 'What I’m listening to',
      fontSize: 15,
      color: 'white',
      fontFamily:'Open Sans, sans-serif',
      fontWeight: 700,
      isSplit: true,
      offsetTop: 10,
      lineHeight: 18,
    }
  }, 
});

var lgball2 = Matter.Bodies.circle(window.innerWidth/2, -435, 35, {
  label: "ball2",
  density: weightOfTheObject,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:"https://www.google.com",
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 3,
  }, 
});

  // fillStyle: 'transparent',
  //   strokeStyle: '#424248',

var lgball3 = Matter.Bodies.circle(window.innerWidth/2, -435, 35, {
  label: "ball3",
  density: weightOfTheObject,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:"https://www.google.com",
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 3,
  }, 
});

var lgball4 = Matter.Bodies.circle(window.innerWidth/2, -435, 35, {
  label: "ball4",
  density: weightOfTheObject,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:"https://www.google.com",
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 3,
  }, 
});

//squares

var lgbox1 = Matter.Bodies.rectangle(window.innerWidth/3, -455, 35, 35, {
  label: "block1",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }, 
});

var lgbox2 = Matter.Bodies.rectangle(window.innerWidth/1.8, -465, 35, 35, {
  label: "block2",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }, 
});

var lgbox3 = Matter.Bodies.rectangle(window.innerWidth/4, -420, 35, 35, {
  label: "block3",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }, 
});

var lgbox4 = Matter.Bodies.rectangle(window.innerWidth/5, -405, 35, 35, {
  label: "block4",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }, 
});

var mdbox1 = Matter.Bodies.rectangle(window.innerWidth/6, -385, 35, 35, {
  label: "block5",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }, 
});

var mdbox2 = Matter.Bodies.rectangle(window.innerWidth/1, -445, 35, 35, {
  label: "block6",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }, 
});

var mdbox3 = Matter.Bodies.rectangle(window.innerWidth/2, -435, 35, 35, {
  label: "block7",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }, 
});

var mdbox4 = Matter.Bodies.rectangle(window.innerWidth/2, -535, 35, 35, {
  label: "block8",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }
});

var smbox1 = Matter.Bodies.rectangle(window.innerWidth/2, -435, 35, 35, {
  label: "block9",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
  }
});

var smbox2 = Matter.Bodies.rectangle(window.innerWidth/2, -335, 35, 35, {
  label: "block10",
  density: weightHeavy,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:null,
  isStatic:false,
  render: {
    fillStyle: '#3435ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
    // sprite: {
    //   texture: '/images/text/demo.png'
    // }
  }, 
});
// mdball1,mdball2,mdball3,mdball4,mdball5,mdball6,
// smball1,smball2,smball3,smball4,smball5,smball6,
var fillers = [lgball1,lgball2,lgball3,lgball4,mdbox1,mdbox2,mdbox3,mdbox4,lgbox1,lgbox2,lgbox3,lgbox4,smbox1,smbox2];