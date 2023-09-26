let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];

function chauchat (){
    let interruptor = true;
    while(interruptor == true){
      console.log("```");
      for (let i = 1; i<=3; i++) {
        let ramita = Math.floor(Math.random() * 5)
        if (ramita !== 0 && ramita !== 1){
          console.log("_Illo, me he quedao pillá!")
          interruptor = false;
          break
          } else {
              console.log(cargador[i]);
            };
        }
      console.log(" ");
    }     
  };
