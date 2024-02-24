let count = 0;
let win = 0;

$("#gu_btn").on("click", function () {
    if (count < 7) {
        let num = Math.ceil(Math.random() * 3);
        
        if (num === 1) {
            count ++;
            console.log(`あいこ：${count}`);
            $("#pc_hands").html('<img src="./img/gu.png" alt="グー" width="180px">');
        }
        else if (num === 2) {
            count ++;
            console.log(`勝ち：${count}`);
            win ++;
            $("#pc_hands").html('<img src="./img/choki.png" alt="チョキ" width="180px">');
            if (win === 1) {
                $("#judgment1").html('<img src="./img/salad.png" alt="サラダ" width="150px">')
            }
            else if (win === 2) {
                $("#judgment2").html('<img src="./img/curry.png" alt="カレーライス" width="150px">')
            }
            else {
                $("#judgment3").html('<img src="./img/icecream.png" alt="アイスクリーム" width="150px">')
                setTimeout(() => {
                    $("#result").html('<img src="./img/win.png" alt="勝ち" width="500px">');
                    $("#tryAgain").html("おかわり！");
                    $(".player").html("");
                    $(".you").html("");
                    $(".table").html("");
                    $(".judgment").html("");
                    $(".chef").html("");
                }, 1000);
                
            }
        }
        else {
            count ++;
            console.log(`負け：${count}`);
            $("#pc_hands").html('<img src="./img/par.png" alt="パー" width="180px">');
        }
        if (count === 7 && !(win >= 3)){
            $("#result").html('<img src="./img/lose.png" alt="負け" width="500px">');
            $("#tryAgain").html("Try Again");
            $(".player").html("");
            $(".you").html("");
            $(".table").html("");
            $(".judgment").html("");
            $(".chef").html("");
        }
    }
    if (count >= 8) {
        alert("じゃんけんボタンの押しすぎです。Resetボタンを押してください。")
    }
})

$("#cho_btn").on("click", function () {
    if (count < 7) {
        let num = Math.ceil(Math.random() * 3);

        if (num === 1) {
            count ++;
            console.log(`負け：${count}`);
            $("#pc_hands").html('<img src="./img/gu.png" alt="グー" width="180px">');
        }
        else if (num === 2) {
            count ++;
            console.log(`あいこ：${count}`);
            $("#pc_hands").html('<img src="./img/choki.png" alt="チョキ" width="180px">');
        }
        else {
            count ++;
            win ++;
            console.log(`勝ち：${count}`);
            $("#pc_hands").html('<img src="./img/par.png" alt="パー" width="180px">');
            if (win === 1) {
                $("#judgment1").html('<img src="./img/salad.png" alt="サラダ" width="150px">')
            }
            else if (win === 2) {
                $("#judgment2").html('<img src="./img/curry.png" alt="カレーライス" width="150px">')
            }
            else {
                $("#judgment3").html('<img class="dish" src="./img/icecream.png" alt="アイスクリーム" width="150px">')
                setTimeout(() => {
                    $("#result").html('<img src="./img/win.png" alt="勝ち" width="500px">');
                    $("#tryAgain").html("おかわり！");
                    $(".player").html("");
                    $(".you").html("");
                    $(".table").html("");
                    $(".judgment").html("");
                    $(".chef").html("");
                }, 1000);
            }
        }
        if ((count === 7 && !(win >= 3))){
            $("#result").html('<img src="./img/lose.png" alt="負け" width="500px">');
            $("#tryAgain").html("Try Again");
            $(".player").html("");
            $(".you").html("");
            $(".table").html("");
            $(".judgment").html("");
            $(".chef").html("");
        }
    }
    if (count >= 8) {
        alert("じゃんけんボタンの押しすぎです。Resetボタンを押してください。")
    }
})
                
$("#par_btn").on("click", function () {
    if (count < 7) {
        let num = Math.ceil(Math.random() * 3);

        if (num === 1) {
            count ++;
            win ++;
            console.log(`勝ち：${count}`);
            $("#pc_hands").html('<img src="./img/gu.png" alt="グー" width="180px">');
            if (win === 1) {
                $("#judgment1").html('<img src="./img/salad.png" alt="サラダ" width="150px">');
            }
            else if (win === 2) {
                $("#judgment2").html('<img src="./img/curry.png" alt="カレーライス" width="150px">');
            }
            else {
                $("#judgment3").html('<img src="./img/icecream.png" alt="アイスクリーム" width="150px">');
                setTimeout(() => {
                    $("#result").html('<img src="./img/win.png" alt="勝ち" width="500px">');
                    $("#tryAgain").html("おかわり！");
                    $(".player").html("");
                    $(".you").html("");
                    $(".table").html("");
                    $(".judgment").html("");
                    $(".chef").html("");
                }, 1000);
            }
        }
        else if (num === 2) {
            count ++;
            console.log(`負け：${count}`);
            $("#pc_hands").html('<img src="./img/choki.png" alt="チョキ" width="180px">');
        }
        else {
            count ++;
            console.log(`あいこ：${count}`);
            $("#pc_hands").html('<img src="./img/par.png" alt="パー" width="180px">');
        }
        if ((count === 7 && !(win >= 3))){
            $("#result").html('<img src="./img/lose.png" alt="負け" width="500px">');
            $("#tryAgain").html("Try Again");
            $(".player").html("");
            $(".you").html("");
            $(".table").html("");
            $(".judgment").html("");
            $(".chef").html("");
        }
    }
    if (count >= 8) {
        alert("じゃんけんボタンの押しすぎです。Resetボタンを押してください。")
    }
})

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("btn").addEventListener("click", function(){
//     window.location.reload();
//     })
// });