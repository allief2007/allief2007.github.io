document.addEventListener("DOMContentLoaded", function() {
    const registerLink = document.getElementById("register-link");
    const registerPopup = document.getElementById("register-popup");
    const registerForm = document.getElementById("register-form");
    const registerBtn = document.getElementById("register-btn");
    const forgotPasswordLink = document.getElementById("forgot-password-link");
    const forgotPasswordPopup = document.getElementById("forgot-password-popup");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        registerPopup.style.display = "block";
    });

    registerBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const usernameInput = document.getElementById("register-username");
        const emailInput = document.getElementById("register-email");
        const passwordInput = document.getElementById("register-password");
        const confirmPasswordInput = document.getElementById("register-confirm-password");

        const usernameValue = usernameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if (usernameValue === "" || emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
            alert("Silakan lengkapi semua field");
            return;
        }

        if (passwordValue !== confirmPasswordValue) {
            alert("Password dan konfirmasi password tidak sama");
            return;
        }

        // Kirim permintaan ke server untuk membuat akun baru
        // ...
        alert("Akun Anda telah dibuat");
        registerPopup.style.display = "none";
    });

    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Membuat popup untuk memasukkan alamat email
        const forgotPasswordPopup = document.createElement("div");
        forgotPasswordPopup.innerHTML = `
            <h2>Lupa Kata Sandi</h2>
            <p>Masukkan alamat email Anda untuk mendapatkan link reset kata sandi</p>
            <input type="email" id="email-input" placeholder="Alamat Email">
            <button id="send-reset-link-btn">Kirim Link Reset</button>
        `;
        forgotPasswordPopup.style.position = "fixed";
        forgotPasswordPopup.style.top = "50%";
        forgotPasswordPopup.style.left = "50%";
        forgotPasswordPopup.style.transform = "translate(-50%, -50%)";
        forgotPasswordPopup.style.backgroundColor = "lightblue";
        forgotPasswordPopup.style.padding = "20px";
        forgotPasswordPopup.style.borderRadius = "10px";
        forgotPasswordPopup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
        document.body.appendChild(forgotPasswordPopup);

        const sendResetLinkBtn = document.getElementById("send-reset-link-btn");
        sendResetLinkBtn.addEventListener("click", function() {
            const emailInput = document.getElementById("email-input");
            const emailValue = emailInput.value.trim();
            if (emailValue === "") {
                alert("Silakan masukkan alamat email Anda");
                return;
            }
            // Kirim permintaan ke server untuk mengirim link reset kata sandi
            // ...
            alert("Link reset kata sandi telah dikirim ke alamat email Anda");
            forgotPasswordPopup.remove();
        });
    });
});