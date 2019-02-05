/*#########################################
  -- TEXT for shapes(custom code)--
  render: {
    myText: {
        title: 'Anything',
        color: 'red',
        fontSize: 20,
        fontFamily: 'Lato',
        fontWeight: 700
      }
  }
##########################################*/



var blink1 = Matter.Bodies.rectangle(window.innerWidth/1.5, 75, 75, 75, {
    label: "squarelink1",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
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
    strokeStyle: '#d3d3d3',
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
    strokeStyle: '#d3d3d3',
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
      strokeStyle: '#d3d3d3',
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
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
    // sprite:{
    //    texture:'images/Ayla.jpg'
    //  },
    }, 
  });

  var blink6 = Matter.Bodies.rectangle(window.innerWidth/ 2, 75, 75, 75, {
    label: "me",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
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
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
    url:'bio.html',
    isStatic:false,
    render: {
      fillStyle: '#8181ff',
      strokeStyle: '#d3d3d3',
      lineWidth: 2,
      // sprite:{
      // texture:'images/Dogs/7.png'
      // },
    }, 
  });

  var blink8 = Matter.Bodies.rectangle(window.innerWidth/ 1, 75, 75, 75, {
    label: "squarelink8",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
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
    label: "squarelink9",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
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
    label: "squarelink10",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 0.6,
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


  var blink11 = Matter.Bodies.circle(window.innerWidth/ 1, 35, 35, {
    label: "squarelink11",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 1,
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
    label: "squarelink12",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 1,
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

  var blink13 = Matter.Bodies.circle(window.innerWidth/ 1, 20, 20, {
    label: "squarelink13",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 1,
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

   var blink14 = Matter.Bodies.circle(window.innerWidth/ 2, 40, 40, {
    label: "squarelink14",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 1,
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
    label: "squarelink15",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 1,
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
    label: "squarelink16",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 1,
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
    label: "squarelink16",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: 1,
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
    label: "squarelink17",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: .5,
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
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: .5,
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

var blink19 = Matter.Bodies.circle(window.innerWidth/ 1, 35, 35, {
    label: "squarelink19",
    density: 0.04,
    friction: 1,
    frictionAir: 0.00001,
    restitution: .5,
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

// var blink20 = Matter.Bodies.circle(window.innerWidth/ 1, 30, 30, 30, {
//     label: "squarelink20",
//     density: 0.04,
//     friction: 1,
//     frictionAir: 0.00001,
//     restitution: .5,
//     url:'bio.html',
//     isStatic:false,
//     render: {
//       fillStyle: '#d3d3d3',
//       strokeStyle: '#d3d3d3',
//       lineWidth: 2,
//     //   sprite:{
//     //   texture:'images/Ayla.jpg'
//     // },
//     }, 
//   });

var linkBodies = [blink1,blink2,blink3,blink4,blink5,blink6,blink7,blink8,blink9,blink10,blink11,blink12,blink13,blink14,blink15,blink16,blink17,blink18,blink19];
var googlesprite = {xScale: 1, yScale: 1, xOffset: 0.5000000000000001, yOffset: 0.5,}
console.log(linkBodies.length)