'use strict';
// QAページ回転アニメーション
const qaToggle = (str) => {
    const arrow = document.getElementById('qa_icon' + str);
    const qa = document.getElementById('qaBox_closed' + str);

    arrow.classList.toggle('qa_rotatte');
    qa.classList.toggle('qaBox_opened');
}

// SP版のヘッダーアニメーション
//menuTriggerというdivがクリックされたら、表示させたい
const humberger = document.getElementById('menuTrigger');

humberger.onclick = () => {
    humberger.classList.toggle('menuTrigger_opened');


};


{/* <div class="menuTrigger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <!-- ハンバーガー実装中 --> */}


        // const toggleNav = () => {
        //     const line = document.getElementById('line');
        //     const nav = document.getElementById('sp-nav');

        //     line.addEventListener('click', function () {
        //       line.classList.toggle('active');
        //       nav.classList.toggle('open');
        //     });
        //   }
        //   toggleNav();