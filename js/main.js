
var myCanvas = document.getElementById('c');
var ctx = myCanvas.getContext("2d");
var flip = document.getElementById('flip');
var flipCount = 0
var cycle = 0

var Bodies = Matter.Bodies
var engine = Matter.Engine.create();
var world = engine.world;

var render = Matter.Render.create({
  canvas: myCanvas,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    background: '#36394f',
    wireframes: false,
    showAngleIndicator: false
  }
});

// 0.35
engine.world.gravity.y = .3;
engine.world.gravity.x = 0


var Mouse = Matter.Mouse
var MouseConstraint = Matter.MouseConstraint;
var mConstraint;

function flipMe() {
  if (flipCount == 0) {
    flip.setAttribute('style', 'transform:rotate(90deg); transition-duration: 1s;');
    flipCount += 90
  }
  else {
    flip.setAttribute('style', 'transform:rotate(' + flipCount + 'deg); transition-duration: 1s;');
  }
  flipCount += 90
};

var walls = [
  Matter.Bodies.rectangle(window.innerWidth / 2, 0, 4000, 50, {
    isStatic: true, render: {
      fillStyle: 'transparent',
    }
  }),
  Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, 4000, 50, {
    isStatic: true, render: {
      fillStyle: 'transparent',
    }
  }),
  Matter.Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, 4000, {
    isStatic: true, render: {
      fillStyle: 'transparent',
    }
  }),
  Matter.Bodies.rectangle(0, window.innerHeight / 2, 50, 4000, {
    isStatic: true, render: {
      fillStyle: 'transparent',
    }
  })
]


window.addEventListener("resize", testFunc);
  Matter.World.add(world, linkBodies);
  Matter.World.add(world, fillers);
  Matter.World.add(world, [walls[1], walls[2], walls[3]
]);


setTimeout(function () { Matter.World.add(world, walls[0]); }, 4000);
Matter.Engine.run(engine);
Matter.Render.run(render);

function testFunc() {
  Matter.Body.setPosition(walls[2], { x: window.innerWidth, y: window.innerHeight / 2 });
  Matter.Body.setPosition(walls[1], { x: window.innerWidth / 2, y: window.innerHeight });


};
var canvasmouse = Mouse.create(myCanvas);
var options = {
  body: null,
  mouse: canvasmouse,
  constraint: {
    stiffness: 0,
    render: {
      visible: false
    }
  },

};

function invertGrav() {
  if (cycle == 0) {
    engine.world.gravity.y = 0
    engine.world.gravity.x = -0.5;
    cycle += 1
  } else if (cycle == 1) {
    engine.world.gravity.x = 0
    engine.world.gravity.y = -0.5;
    cycle += 1 // cycle = cycle + 1;
  } else if (cycle == 2) {
    engine.world.gravity.y = -0.3;
    engine.world.gravity.x = 0.5
    cycle += 1
  } else if (cycle == 3) {
    engine.world.gravity.x = 0;
    engine.world.gravity.y = 0.35;
    cycle = 0
  }
}



mConstraint = MouseConstraint.create(engine, options);
console.log(mConstraint)
Matter.World.add(world, mConstraint);



Matter.Events.on(mConstraint, 'mousedown', function (event) {
  if (mConstraint.body == null) {
    console.log('Body is null',mConstraint);

  } else {
    if (mConstraint.body.label != null) {
      a = mConstraint.body;
      a.force = { x: 0, y: -17.5 };
      console.log(a)
      // For popup content
      if(a.label === 'me') {
        document.getElementById('me').style.display = 'block';
        document.getElementById('me').className += ' animated bounceInUp';
        mConstraint.body = null;
      }
      if(a.label === 'recent1') {
        document.getElementById('recent1').style.display = 'block';
        document.getElementById('recent1').className += ' animated bounceInUp';
        mConstraint.body = null;
      }
      if(a.label === 'recent2') {
        document.getElementById('recent2').style.display = 'block';
        document.getElementById('recent2').className += ' animated bounceInUp';
        mConstraint.body = null;
      }
      if(a.label === 'recent3') {
        document.getElementById('recent3').style.display = 'block';
        document.getElementById('recent3').className += ' animated bounceInUp';
        mConstraint.body = null;
      }
      if(a.label === 'listen') {
        document.getElementById('listen').style.display = 'block';
        document.getElementById('listen').className += ' animated bounceInUp';
        mConstraint.body = null;
      }
      if(a.label === 'testimonials') {
        document.getElementById('testimonials').style.display = 'block';
        document.getElementById('testimonials').className += ' animated bounceInUp';
        mConstraint.body = null;
      }
    }
  }
});

