function tryIceCream(){
            let name = prompt("What is your name?");
            let flavour= prompt("What is your favorite Ice-Cream flavour?");
            let emoji=prompt("What is your favorite emoji?");

            let h1 = document.querySelector("h1");
            h1.innerHTML="Thanks," + " " + name + ",we will be in touch. Meanwhile, have a lot of " + flavour +" Ice-Cream!" + emoji;
         }
          let tryButton=document.querySelector("button");
            tryButton.addEventListener("click",tryIceCream)