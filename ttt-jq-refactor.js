      // wait for the DOM to finish loading

      $(window).load(function() {
       // all your code should go in here.
       var turns = 0;
        var checkWin = function () {
          var symbol = turns % 2 === 0 ? "exes" : "ohs";
          var boxes = $(".box");
          var winningCombos = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6]
            ];
          var combo, win;
          for (var i = 0; i < winningCombos.length; i++) {
            combo = winningCombos[i];
            win = boxes[combo[0]].classList.contains(symbol) &&
                  boxes[combo[1]].classList.contains(symbol) &&
                  boxes[combo[2]].classList.contains(symbol);
            if (win) {
              return true;
            }
          };  
        }


       $("#board").click(function(event){
              
              if ($(".box")) {
               var player = turns % 2 === 0 ? "X" : "O"
                var box = event.target;
                if (box.classList.contains("exes") || box.classList.contains("ohs")) {
                  alert("try again!")
                  return null;
                }
                if (turns % 2 === 0) {
                  box.innerHTML = "x";
                  box.classList.add("exes");
                } else {
                  box.innerHTML = "o";
                  box.classList.add("ohs");
                }
                if (checkWin()) {
                  box.classList.add("toe")
                  alert("You win! " + player);

                }
                turns +=1;
              }

          })
      });
