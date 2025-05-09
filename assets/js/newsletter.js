  document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.querySelector(".form-subscribe");
    const popup = document.getElementById("thankYouPopup");

    if (subscribeForm) {
      subscribeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(subscribeForm);

        fetch(subscribeForm.action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            subscribeForm.reset();
            if (popup) {
              popup.style.display = "flex";
            }
          } else {
            alert("Subscription failed. Please try again.");
          }
        }).catch(error => {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        });
      });
    }
  });

  function closePopup() {
    const popup = document.getElementById("thankYouPopup");
    if (popup) {
      popup.style.display = "none";
    }
  }
