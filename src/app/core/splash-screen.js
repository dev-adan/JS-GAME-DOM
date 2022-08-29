class SplashScreeen {
  #splashElement = document.createElement("div");
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
  }

  #animation() {
    let frame = 1;
    setInterval(() => {
      this.#splashElement.classList.remove(`splash-screen-${frame}`);
      if (frame >= 2){
        frame = 0;
      }
      frame++;
      this.#splashElement.classList.add(`splash-screen-${frame}`);
      
    },500);
  }
}

const splashscreen = new SplashScreeen();
splashscreen.render();
