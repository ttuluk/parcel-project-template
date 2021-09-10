
const NOTIFICATION_DELAY = 3000;
let timeOutId = null;
const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
    hideNotification();
    clearTimeout(timeOutId);

}

function showNotification() {
    refs.notification.classList.add('is-visible');
    timeOutId = setTimeout(() => {
        console.log('нужно закрыть алерт');
        hideNotification();
    }, NOTIFICATION_DELAY)
}

function hideNotification() {
    refs.notification.classList.remove('is-visible');
   
}