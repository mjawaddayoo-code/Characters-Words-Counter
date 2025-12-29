//   Characters & Words Counter
  function wordsAndCaractersCounter(event) {
            event.preventDefault();
            let userNote = document.getElementById("note").value;
            let totalCaracters = userNote.length;
            let totalWords = userNote.split(" ").length;
            document.getElementById("CharachersCount").innerText = totalCaracters;
            document.getElementById("WoedsCount").innerText = totalWords;
            let vowels = 0;
            let charactersArray = userNote.split("");
            for (let i = 0; i < charactersArray.length; i++){
                if (
                    charactersArray[i].toLowerCase() == "a" ||
                    charactersArray[i].toLowerCase() == "e" ||
                    charactersArray[i].toLowerCase() == "i" ||
                    charactersArray[i].toLowerCase() == "o" ||
                    charactersArray[i].toLowerCase() == "u" 

                ){
                    vowels++;
                }
            }
            document.getElementById("vowelCount").innerText = vowels;
        }
