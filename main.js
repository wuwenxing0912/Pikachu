! function() {
    var speed = 50
    $('.switch-speed').on('click', 'button', (e) => {
        newSpeed = $(e.currentTarget).attr('show-speed')
        console.log(newSpeed)
        $(e.currentTarget).addClass('active').siblings('.active').removeClass('active')
        switch (newSpeed) {
            case 'slow':
                speed = 100;
                break
            case 'mid-speed':
                speed = 50;
                break
            case 'fast':
                speed = 10;
                break
        }
    })

    function writeCode(precode, code, fn) {
        var DOMCode = document.querySelector('.code')
        var DOMStyle = document.querySelector('.styleTag')
        var n = 0
        var timeID = setTimeout(function write() {
            n++
            DOMCode.innerHTML = Prism.highlight(code.slice(0, n), Prism.languages.css);
            DOMStyle.innerHTML = code.slice(0, n)
            DOMCode.scrollTop = DOMCode.scrollHeight
            if (n < code.length) {
                timeID = setTimeout(write, speed)
            } else {
                fn && fn.call()
            }
        }, speed)
    }

    var code = `/* 现在开始
画一个皮卡丘 ╮(‵▽′)╭  */
/*首先给个颜色*/
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255, 230, 0);
}

/*全黑色代码看上去好无趣，
给代码上点色*/
.token.selector {
    color: green;
}

.token.property {
    color: blue;
}

.token.punctuation {
    color: black;
}

.token.function {
    color: red;
}

.wrapper {
    width: 100%;
    height: 170px;
    position: relative;
}

/*来个鼻子*/
.nose {
    width: 0;
    height: 0;
    border-width: 11px;
    border-style: solid;
    border-radius: 9px;
    border-color: black transparent 
              transparent transparent;
    position: absolute;
    left: 50%;
    margin-left: -11px;
    top: 24px;
}

/*眼睛了解一下*/
.eye {
    height: 46px;
    width: 46px;
    position: absolute;
    background-color: #2E2E2E;
    border-radius: 23px;
}

/*左眼*/
.eye.left {
    left: 50%;
    margin-left: -134px;
}

/*右眼*/
.eye.right {
    right: 50%;
    margin-right: -134px;
}

/* 温馨提示：
右侧可以调速哦 →_→ →_→  */
.eye::before {
    content: '';
    display: block;
    background-color: #FFFFFF;
    height: 20px;
    width: 20px;
    border-radius: 50%;    
    top: 3px;
    left: 6px;
    border: 2px solid black;
    position: absolute;
}

/*两个腮红加一加*/
.face {
    width: 64px;
    height: 64px;
    background-color: #FF0000;
    border-radius: 50%;
    position: absolute;
    top: 80px;
}

/*左腮红*/
.face.left {
    left: 50%;
    margin-left: -184px;
}

/*右腮红*/
.face.right {
    right: 50%;
    margin-right: -184px;
}

/*嘴唇*/
.upper-lip {
    width: 80px;
    height: 25px;
    border: 2px solid black;
    background: rgb(255, 230, 0);
    position: absolute;
    top: 49px;
}

.upper-lip.left {
    right: 50%;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 
               40px 25px;   
    transform: rotate(-20deg);
}

.upper-lip.right {
    left: 50%;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 
               40px 25px;
    transform: rotate(20deg);
}

/*还是嘴唇*/
.lower-lip-wrapper {   
    bottom: 0;
    position: absolute;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    overflow: hidden;
    height: 110px;
}

.lower-lip {
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

/*笑一个 ╮(‵▽′)╭ */
.lower-lip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}
/*皮卡丘画完了，给你 (◕ˇ∀ˇ◕) */
`

    writeCode('', code)

}.call()