    function showToast(text) {
      Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right",
        style: {
          borderRadius: "20px",
          padding: "10px 16px",
        }
      }).showToast();
    }