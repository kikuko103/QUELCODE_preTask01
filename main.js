'use strict';
// QAページ回転アニメーション
const qaToggle = (str) => {
    const arrow = document.getElementById('qa_icon' + str);
    const qa = document.getElementById('qaBox_closed' + str);

    arrow.classList.toggle('qa_rotatte');
    qa.classList.toggle('qaBox_opened');
}

// SP版のヘッダーアニメーション(ハンバーガー　＋　アコーディオン)
const humberger = document.getElementById('menuTrigger');
const accordion = document.getElementById('headerNav');

humberger.onclick = () => {
    humberger.classList.toggle('menuTrigger_opened');
    accordion.classList.toggle('header_nav_opened');
};
