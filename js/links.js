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
##########################################*/



var blink1 = Matter.Bodies.rectangle(window.innerWidth/1.5, 75, 75, 75, {
    label: "squarelink1",
    density: 0.04,
    friction: 1,
    frictionAir: 0.020,
    restitution: 0.1,
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
  frictionAir: 0.020,
  restitution: 0.1,
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
  label: "recent3",
  density: 0.04,
  friction: 1,
  frictionAir: 0.020,
  restitution: 0.1,
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
    density: 0.04,
    friction: 1,
    frictionAir: 0.020,
    restitution: 0.1,
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
    frictionAir: 0.020,
    restitution: 0.1,
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
    frictionAir: 0.020,
    restitution: 0.1,
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
    frictionAir: 0.020,
    restitution: 0.1,
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
    density: 0.04,
    friction: 1,
    frictionAir: 0.020,
    restitution: 0.1,
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
    density: 0.04,
    friction: 1,
    frictionAir: 0.020,
    restitution: 0.1,
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
    density: 0.04,
    friction: 1,
    frictionAir: 0.020,
    restitution: 0.1,
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
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
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
    label: "lightball4",
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
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

  var blink13 = Matter.Bodies.circle(window.innerWidth/ 1, 50, 50, {
    label: "testimonials",
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
    restitution: 1,
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
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
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
    label: "lightball7",
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
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
    label: "lightball8",
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
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
    label: "lightball9",
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
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
    label: "lightball10",
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
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
    frictionAir: 0.025,
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

var blink19 = Matter.Bodies.circle(window.innerWidth/ 5, 55, 55, {
    label: "recent1",
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
    restitution: .5,
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
    label: "recent2",
    density: 0.04,
    friction: 1,
    frictionAir: 0.025,
    restitution: .5,
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