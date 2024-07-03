let countDownElem = document.getElementById("countDown");
      let resetValueEle = document.querySelector(".resetValue")
      let count = 0;  
      let time;

    //Function to star the timer
    const startTimer = () => {
        time = setInterval(()=>{
            countDownElem.innerText = count++
        },1000);
    }

    const stopTimer = () => {
        clearInterval(time);
    }

    const resetTimer = () => {
        clearInterval(time);
        count = 0;
        countDownElem.innerText = count;
    }

    const showStopValue = () => {

        const newPara = document.createElement("p");
        newPara.innerText = `The lapsed time is ${count-1}s`;
        resetValueEle.append(newPara);

    }

    const clearStopValue = () =>{
        resetValueEle.innerText = "";
    }
    
    // //To start the timer
    document.querySelector('.start_btn').addEventListener("click", startTimer);

    // //To stop the timer
    document.querySelector('.stop_btn').addEventListener("click", stopTimer)

    // // To reset the timer
    document.querySelector('.reset_btn').addEventListener("click", resetTimer)

    // //To get time
    document.querySelector('.time_btn').addEventListener("click", showStopValue)

    // //To clear the time
    document.querySelector('.clear_btn').addEventListener("click", clearStopValue)
