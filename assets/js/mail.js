document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);

        fetch(form.action, {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            sessionStorage.setItem("formSubmitted", "true");
            window.location.href = "thankyou.html";
          } else {
            alert("Form submission failed. Please try again.");
          }
        }).catch(error => {
          console.error("Submission error:", error);
          alert("There was a problem submitting the form.");
        });
      });
    }

    // Redirect logic on thankyou.html
    if (window.location.pathname.endsWith("thankyou.html")) {
      if (sessionStorage.getItem("formSubmitted") !== "true") {
        window.location.href = "index.html";
      } else {
        sessionStorage.removeItem("formSubmitted");
      }
    }
  });