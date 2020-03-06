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
const list = document.getElementsByClassName('list_item');
const anchor = document.getElementsByClassName('anchor');

humberger.onclick = () => {
    humberger.classList.toggle('menuTrigger_opened');
    accordion.classList.toggle('header_nav_opened');
    for (let i = 0; i < list.length; i++) {
        list[i].classList.toggle('list_item_opened');
    }
    for (let i = 0; i < list.length; i++) {
        anchor[i].classList.toggle('anchor_opened');
    }
}

// 回答がでてくるときのフェードイン・アウトもやりましょうか！
// 余力あればPC版のページ切替時のフェードインも！
