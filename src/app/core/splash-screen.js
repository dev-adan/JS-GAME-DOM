const MAX_FRAMES = 2;


class SplashScreeen {

  #splashElement = document.createElement("div");
  #intervalId = null;

  render() {
    const styledElement = document.createElement("style");
    styledElement.innerHTML = `
        
            .splash-screen {
                background : url('../assets/splash-screen.jpg') no-repeat;
                width : 650px;
                height : 650px;

            }

            .splash-screen-1{
                background-position-x : 0;

            }

            .splash-screen-2{
                  background-position-x : -650px;
            }
        
        `;

    document.head.appendChild(styledElement);

    this.#splashElement.classList.add("splash-screen", "splash-screen-1");
    //create a DIV
    const rootElement = document.getElementById("root");

    //Add it to the index.html file!
    rootElement.appendChild(this.#splashElement);

    this.#animation();
   
  }

  destroy() {
    this.#splashElement.remove();
    window.clearInterval(this.#intervalId)
    
  }

  #animation() {

    let frame = 1;

    this.#intervalId = setInterval(() => {
      console.log('interval')
      this.#splashElement.classList.remove(`splash-screen-${frame}`);
      if (frame > MAX_FRAMES){
        frame = 1;
      }
      frame++;
      this.#splashElement.classList.add(`splash-screen-${frame}`);
      
    },500);

  }

}

// const splashscreen = new SplashScreeen();
// splashscreen.render();
