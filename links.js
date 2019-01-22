



var blink1 = Matter.Bodies.rectangle(window.innerWidth/1.5, 75, 75, 75, {
    label: "squarelink1",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#8181ff',
      lineWidth: 2,
      // sprite:{
      //   texture:'images/Ayla.jpg' 
      // },
    }, 
  });

var blink2 = Matter.Bodies.rectangle(window.innerWidth/2, 75, 75, 75, {
  label: "squarelink2",
  density: 0.04,
  friction: 1,
  frictionAir: 0.00001,
  restitution: 0.6,
  url:'bio.html',
  isStatic:false,
  render: {
    fillStyle: '#8181ff',
    strokeStyle: '#8181ff',
    lineWidth: 2,
    // sprite:{
    //   texture:'images/Ayla.jpg'
    // },
  }, 
});

var blink3 = Matter.Bodies.rectangle(window.innerWidth/3, 75, 75, 75, {
  label: "squarelink3",
  density: 0.04,
  friction: 1,
  frictionAir: 0.00001,
  restitution: 0.6,
  url:'bio.html',
  isStatic:false,
  render: {
    fillStyle: '#8181ff',
    strokeStyle: '#8181ff',
    lineWidth: 2,
    // sprite:{
    // texture:'images/Ayla.jpg'
    // },
  }, 
});

var blink4 = Matter.Bodies.rectangle(window.innerWidth - 75, 75, 75, 75, {
    label: "squarelink4",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#8181ff',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

  var blink5 = Matter.Bodies.rectangle(window.innerWidth/75, 75, 75, 75, {
    label: "squarelink5",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#8181ff',
      lineWidth: 2,
    // sprite:{
    //    texture:'images/Ayla.jpg'
    //  },
    }, 
  });

  var blink6 = Matter.Bodies.rectangle(window.innerWidth/ 75, 75, 75, 75, {
    label: "squarelink6",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#8181ff',
      lineWidth: 2,
      // sprite:{
      // texture:'images/Ayla.jpg'
      // },
    }, 
  });
 
  var blink7 = Matter.Bodies.rectangle( 75, 75, 75, 75, {
    label: "squarelink7",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#8181ff',
      lineWidth: 2,
      // sprite:{
      // texture:'images/Dogs/7.png'
      // },
    }, 
  });

  var blink8 = Matter.Bodies.rectangle(75, 75, 75, 75, {
    label: "squarelink8",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#8181ff',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

//sm circles

var linkBodies = [blink1,blink2,blink3,blink4,blink5,blink6,blink7,blink8];
var googlesprite = {xScale: 1, yScale: 1, xOffset: 0.5000000000000001, yOffset: 0.5,texture:'Ayla.jpg'}
console.log(linkBodies.length)