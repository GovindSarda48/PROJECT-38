class Ninja {
    constructor(x,y,width,height) {
      var options = {
          restitution : 0.1,
          isStatic :false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("nin1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     imageMode(CENTER);
      
      image(this.image,pos.x, pos.y, this.width, this.height);
    }

    key(){

        if(keyCode === RIGHT_ARROW){
   
          this.image = loadImage("nin5.png");
    
        }

        if(keyCode === UP_ARROW){
   
            this.image = loadImage("nin5.png");
       
          }

          if(keyCode === DOWN_ARROW){
   
            this.image = loadImage("nin6.png");
     
           
          }

          if(keyCode === LEFT_ARROW){
   
            this.image = loadImage("nin5.png");
            
          }
      }
      
  };