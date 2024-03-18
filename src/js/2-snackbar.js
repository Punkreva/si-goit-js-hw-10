import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayForm = document.querySelector(".form");

delayForm.addEventListener('submit', event => {
  event.preventDefault();
  const timer = event.currentTarget.elements.delay.value;
  const radio = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(timer, radio);
      if (radio === "fulfilled") {
        resolve(`Promise fulfilled in ${timer}ms`);
      } else {
        reject(`Promise rejected in ${timer}ms`);
      }
    }, timer);
  });

  promise
    .then(value => {
      iziToast.success({
        color: 'green',
        position: "topRight",
        message: `✅ ${value}`,
      });
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        position: "topRight",
        message: `❌ ${error}`,
      });
    });
});