/*#########################################
  -- TEXT for shapes(custom code)--
  render: {
    myText: {
        title: 'Anything',
        color: 'red',
        fontSize: 20,
        fontFamily: 'Lato',
        fontWeight: 700,
        isSplit: true, // if text longer than 1 word split it to line break
        offsetTop: 10 // Position text from top vertically
        lineHeight: 20, // lineheight between texts
      }
  }
 Documentation for some properties -  https://code.tutsplus.com/tutorials/getting-started-with-matterjs-body-module--cms-28835
##########################################*/
var bouncing = 0.3; //restitution - between 0 and 1; higher is more bouncing 
var movingSpeed = 0.04; //  frictionAir objects falling down speed between 0 and 1; less is faster
var force = 0.2; //  friction
var weightOfTheObject = 0.04;//density
var weightHeavy = 0.15;//density

var blink1 = Matter.Bodies.rectangle(window.innerWidth/1.5, 5, 75, 75, {
    label: "squarelink1",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    }, 
  });

var blink2 = Matter.Bodies.rectangle(window.innerWidth/2, 75, 75, 75, {
  label: "squarelink2",
  density: weightOfTheObject,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:'bio.html',
  isStatic:false,
  render: {
    fillStyle: '#8181ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
    // sprite:{
    //   texture:'images/Ayla.jpg'
    // },
  }, 
});

var blink3 = Matter.Bodies.rectangle(window.innerWidth/3, 95, 95, 95, {
  label: "iam-2018",
  density: weightOfTheObject,
  friction: force,
  frictionAir: movingSpeed,
  restitution: bouncing,
  url:'bio.html',
  isStatic:false,
  render: {
    fillStyle: '#8181ff',
    strokeStyle: '#d3d3d3',
    lineWidth: 2,
    myText: {
      title: 'Recent work: I AM 2018',
      fontSize: 15,
      color: 'white',
      fontFamily:'Open Sans, sans-serif',
      fontWeight: 700,
      isSplit: true,
      offsetTop: 15,
      lineHeight: 18,
    }
  }, 
});

var blink4 = Matter.Bodies.rectangle(window.innerWidth - 75, 75, 75, 75, {
    label: "squarelink4",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

  var blink5 = Matter.Bodies.rectangle(window.innerWidth/75, 75, 75, 75, {
    label: "squarelink5",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    // sprite:{
    //    texture:'images/Ayla.jpg'
    //  },
    }, 
  });

  var blink6 = Matter.Bodies.rectangle(window.innerWidth/ 2, 25, 75, 75, {
    label: "me",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
      myText: {
        title: 'ME',
        color: 'white',
        fontSize: 24,
        fontFamily: 'Open Sans Condensed, sans-serif',
        fontWeight: 700
      }
    }, 
  });
 
  var blink7 = Matter.Bodies.rectangle(window.innerWidth/ 2, 75, 75, 75, {
    label: "squarelink7",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#d3d3d3',
      lineWidth: 2
    }, 
  });

  var blink8 = Matter.Bodies.rectangle(window.innerWidth/ 1, 75, 75, 75, {
    label: "squarelink8",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

// circles

  var blink9 = Matter.Bodies.circle(window.innerWidth/ 5, 45, 45, {
    label: "lightball1",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });


  var blink10 = Matter.Bodies.circle(window.innerWidth/ 4, 35, 35, {
    label: "lightball2",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    }, 
  });


  var blink11 = Matter.Bodies.circle(window.innerWidth/ 1, 35, 35, {
    label: "lightball3",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

  var blink12 = Matter.Bodies.circle(window.innerWidth/ 3, 35, 35, {
    label: "lightball4",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

  var blink13 = Matter.Bodies.circle(window.innerWidth/ 1, 50, 50, {
    label: "testimonials",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
      myText: {
        title: 'Friend Testimonials',
        fontSize: 15,
        color: 'black',
        fontFamily:'Open Sans, sans-serif',
        fontWeight: 700,
        isSplit: true,
        offsetTop: 0,
        lineHeight: 18,
      }
    }, 
  });

   var blink14 = Matter.Bodies.circle(window.innerWidth/ 2, 40, 40, {
    label: "lightball6",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });


   var blink15 = Matter.Bodies.circle(window.innerWidth/ 2, 40, 40, {
    label: "lightball7",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });
var blink16 = Matter.Bodies.circle(window.innerWidth/ 1, 20, 20, {
    label: "lightball8",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

var blink16 = Matter.Bodies.circle(window.innerWidth/ 1, 20, 20, {
    label: "lightball9",
    density: weightHeavy,
    friction: 1,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });


var blink17 = Matter.Bodies.circle(window.innerWidth/ 5, 20, 20, {
    label: "lightball10",
    density: weightHeavy,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

var blink18 = Matter.Bodies.rectangle(window.innerWidth/ 5, 40, 40, 40, {
    label: "squarelink18",
    density: weightHeavy,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    //   sprite:{
    //   texture:'images/Ayla.jpg'
    // },
    }, 
  });

var blink19 = Matter.Bodies.circle(window.innerWidth/ 5, 55, 55, {
    label: "everyone-in",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url: null,
    isStatic:false,
    render: {
      fillStyle: '#d3d3d3',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
      myText: {
        title: 'Recent work: Everyone In',
        fontSize: 16,
        fontFamily:'Open Sans, sans-serif',
        fontWeight: 700,
        isSplit: true,
        offsetTop: 5,
        lineHeight: 18,
      }
    }, 
  });

  var blink20 = Matter.Bodies.circle(window.innerWidth/ 2, 55, 55, {
    label: "safe-clean-water",
    density: weightOfTheObject,
    friction: force,
    frictionAir: movingSpeed,
    restitution: bouncing,
    url: null,
    isStatic:false,
    render: {
      fillStyle: '#3435ff',
      strokeStyle: '#fff',
      lineWidth: 2,
      myText: {
        title: 'Recent work: Safe Clean Water',
        fontSize: 15,
        color: 'white',
        fontFamily:'Open Sans, sans-serif',
        fontWeight: 700,
        isSplit: true,
        offsetTop: 13,
        lineHeight: 18,
      }
    }, 
  });


var linkBodies = [blink1,blink2,blink3,blink4,blink5,blink6,blink7,blink8,blink9,blink10,blink11,blink12,blink13,blink14,blink15,blink16,blink17,blink18,blink19, blink20];
var googlesprite = {xScale: 1, yScale: 1, xOffset: 0.5000000000000001, yOffset: 0.5,}
console.log(linkBodies.length)