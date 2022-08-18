

class SplashScreeen {
    
    render(){

        const styledElement = document.createElement('style');

        styledElement.innerHTML = `
        
            .splash-screen {
                background : url('../assets/splash-screen.jpg');
                width : 650px;
                height : 650px;

            }
        
        `

        document.head.appendChild(styledElement);


        //create a DIV
        const rootElement = document.getElementById('root');
        const splashElement = document.createElement('div');
        
        //Add it to the index.html file!
        rootElement.appendChild(splashElement);
        //set the background to render the asset
         //imagee that we chosed for this screen
         splashElement.classList.add('splash-screen');

    }
    
    
    destroy(){
        console.log('destroyed')

    }
}

const splashscreen = new SplashScreeen();
splashscreen.render(); 
