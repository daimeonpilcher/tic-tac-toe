      // wait for the DOM to finish loading


      window.addEventListener("load", function ( ) {
       // all your code should go in here.
       var turns = 0;

       document.querySelector("#board").addEventListener("click", function(event){
              if(turns % 2 === 0) {
                event.target.innerHTML="X";
                  event.target.className="exes";
                  console.log("ohs")
              } else {
                event.target.innerHTML="O";
                event.target.className="ohs";
                console.log("exes");
              }
              turns +=1;
              /*function() {
                if(event.target.innerHTML == ("X" || "O")) {
                  alert("Please try again!");
                  turns -=1;
                }
              }*/
          })
      });
