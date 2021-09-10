const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = true;

const intervalId = setInterval(() => {
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        console.log('Останавлливаем интервал');
        clearInterval(intervalId);
        return;
    }
    console.log('Подпишись на рассылку! - ' + Date.now());
    promptCounter += 1;
}, PROMPT_DELAY);


