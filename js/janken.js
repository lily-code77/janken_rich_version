let count = 0;
let win = 0;

$("#gu_btn").on("click", function () {
    count ++;
    if (count <= 7) {
        let num = Math.ceil(Math.random() * 3);

        if (num === 1) {
            $("#pc_hands").html('<img src="./img/gu.png" alt="グー" width="180px">');
        }
        else if (num === 2) {
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
                    $("#result").html('<img src="./img/win.png" alt="勝ち">');
                    $("#tryAgain").html("おかわり！");
                    $(".player").html("");
                    $(".you").html("");
                    $(".table").html("");
                    $(".judgment").html("");
                    $(".chef").html("");
                }, 3000);
                
            }
        }
        else {
            $("#pc_hands").html('<img src="./img/par.png" alt="パー" width="180px">');
        }
    }
    if (count > 7) {
        $("#result").html('<img src="./img/lose.png" alt="負け">');
        $("#tryAgain").html("Try Again");
        $(".player").html("");
        $(".you").html("");
        $(".table").html("");
        $(".judgment").html("");
        $(".chef").html("");
    }
})

$("#cho_btn").on("click", function () {
    count ++;
    if (count <= 7) {
        let num = Math.ceil(Math.random() * 3);

        if (num === 1) {
            $("#pc_hands").html('<img src="./img/gu.png" alt="グー" width="180px">');
        }
        else if (num === 2) {
            $("#pc_hands").html('<img src="./img/choki.png" alt="チョキ" width="180px">');
        }
        else {
            win ++;
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
                    $("#result").html('<img src="./img/win.png" alt="勝ち">');
                    $("#tryAgain").html("おかわり！");
                    $(".player").html("");
                    $(".you").html("");
                    $(".table").html("");
                    $(".judgment").html("");
                    $(".chef").html("");
                }, 3000);
            }
        }
    }
    if (count > 7) {
        $("#result").html('<img src="./img/lose.png" alt="負け">');
        $("#tryAgain").html("Try Again");
        $(".player").html("");
        $(".you").html("");
        $(".table").html("");
        $(".judgment").html("");
        $(".chef").html("");
    }
})
                
$("#par_btn").on("click", function () {
    count ++;
    if (count <= 7) {
        let num = Math.ceil(Math.random() * 3);

        if (num === 1) {
            win ++;
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
                    $("#result").html('<img src="./img/win.png" alt="勝ち">');
                    $("#tryAgain").html("おかわり！");
                    $(".player").html("");
                    $(".you").html("");
                    $(".table").html("");
                    $(".judgment").html("");
                    $(".chef").html("");
                }, 3000);
            }
        }
        else if (num === 2) {
            $("#pc_hands").html('<img src="./img/choki.png" alt="チョキ" width="180px">');
        }
        else {
            $("#pc_hands").html('<img src="./img/par.png" alt="パー" width="180px">');
        }
    }
    if (count > 7) {
        $("#result").html('<img src="./img/lose.png" alt="負け">');
        $("#tryAgain").html("Try Again");
        $(".player").html("");
        $(".you").html("");
        $(".table").html("");
        $(".judgment").html("");
        $(".chef").html("");
    }
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn").addEventListener("click", function(){
    window.location.reload();
    })
});