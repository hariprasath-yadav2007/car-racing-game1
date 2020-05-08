class Form{
    constructor(){
        this.input = createInput("ENTER YOUR NAME");
        this.button = createButton('play');
        this.greeting = createElement('h3');
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");    
        title.position(400,100);
        this.input.position(450,250);
        this.button.position(550,300);
        this.button.mousePressed(()=>{
            this.input.hide();    
            this.button.hide();
            this.greeting.html("welcome to the game");
            this.greeting.position(480,250);
        });
    }
}
