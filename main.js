'use strict';

const qaToggle = (str) => {
    const arrow = document.getElementById('qa_icon' + str);
    const qa = document.getElementById('qaBox_closed' + str);

    arrow.classList.toggle('qa_rotatte');
    qa.classList.toggle('qaBox_opened');

    //最初の合致するIdで上記の処理実行されてるっぽい→引数渡して、管理

    // 要素取得して（Id）、消す、追加でaddもできるのかな？
    // いや、toggle( className ) : クラスがあれば削除・無ければ追加のが効率的
    // visible が設定されていれば除去し、なければ追加
    // div.classList.toggle("visible");
    // i が 10 未満であるかどうかの条件によって visible を追加または除去
    // div.classList.toggle("visible", i < 10 );

}
