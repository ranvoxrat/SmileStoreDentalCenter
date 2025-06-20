    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("#appointment-wrapper form");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // prevent actual submission

            // Get field values
            const firstName = document.getElementById("first-name").value.trim();
            const middleName = document.getElementById("middle-name").value.trim();
            const lastName = document.getElementById("last-name").value.trim();
            const email = document.getElementById("email").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const address = document.getElementById("address").value.trim();
            const preferredDate = document.getElementById("preferred-date").value.trim();
            const preferredTime = document.getElementById("preferred-time").value.trim();

            // Validate required fields
            if (!firstName || !middleName || !lastName || !email || !contact || !address || !preferredDate || !preferredTime) {
                Swal.fire({
                    icon: 'error',
                    title: 'Incomplete Form',
                    text: 'Please fill in all required fields.'
                });
                return; // stop submission
            }

            // Example: Validate email format (basic)
            if (!email.match(/^\S+@\S+\.\S+$/)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Email',
                    text: 'Please enter a valid email address.'
                });
                return;
            }

            // Example: Validate contact number (basic)
            if (contact.length < 7) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Contact',
                    text: 'Please enter a valid contact number.'
                });
                return;
            }

            // ✅ Success - You can process form or submit via AJAX here
            Swal.fire({
                icon: 'success',
                title: 'Appointment Booked!',
                text: 'Thank you for your submission.'
            }).then(() => {
                form.reset(); // Reset form after success
                // Close modal here if needed:
                toggleModal(true);
            });
        });
    });

    // Example toggleModal function (optional if not defined)
    function toggleModal(hide = false) {
        const modal = document.getElementById('appointment-wrapper');
        if (hide) {
            modal.classList.add('hidden');
        } else {
            modal.classList.remove('hidden');
        }
    }