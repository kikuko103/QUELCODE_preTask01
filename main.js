'use strict';

const qaToggle = () => {
    const arrow = document.getElementById('qa_icon');
    const qa = document.getElementById('qaBox_addText');
    arrow.addEventListener('click', function () {
        arrow.classList.toggle('qa_rotate');
        qa.classList.toggle('qa_open');

    });
}

qaToggle();
//toggle( className ) : クラスがあれば削除・無ければ追加
// visible が設定されていれば除去し、なければ追加
// div.classList.toggle("visible");
// i が 10 未満であるかどうかの条件によって visible を追加または除去
// div.classList.toggle("visible", i < 10 );
