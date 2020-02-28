'use strict';

const qaToggle = (str) => {
    const arrow = document.getElementById('qa_icon' + str);
    const qa = document.getElementById('qaBox_closed' + str);

    arrow.classList.toggle('qa_rotatte');
    qa.classList.toggle('qaBox_opened');

}
