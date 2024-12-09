document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const charityId = params.get("id");
    const charityNameElement = document.getElementById("charity-name");
    const charityProfileElement = document.getElementById("charity-profile");
    const volunteerButton = document.getElementById("volunteerNowBtn");
    const contactForm = document.getElementById("dynamicContactForm");
    const volunteerForm = document.getElementById("volunteerForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Initially hide the volunteer form and thank-you message
    contactForm.style.display = "none";
    thankYouMessage.style.display = "none";

    // Toggle form visibility on button click
    volunteerButton.addEventListener("click", () => {
        contactForm.style.display = contactForm.style.display === "none" ? "block" : "none";
    });

    // Charity data
    const charitiesData = [
        {
            id: "1",
            name: "Feeding America",
            email: "info@feedingamerica.org",
            phone: "800-771-2303",
            website: "https://www.feedingamerica.org",
            description: "Nation's largest domestic hunger-relief organization, working to connect people with food and end hunger."
        },
        {
            id: "2",
            name: "Habitat for Humanity",
            email: "publicinfo@habitat.org",
            phone: "800-422-4828",
            website: "https://www.habitat.org",
            description: "Helps families build and improve places to call home, believing affordable housing plays a critical role in strong communities."
        },
        {
            id: "3",
            name: "American Red Cross",
            email: "info@redcross.org",
            phone: "800-733-2767",
            website: "https://www.redcross.org",
            description: "Provides emergency assistance, disaster relief, and education in the United States."
        },
        {
            id: "4",
            name: "Doctors Without Borders",
            email: "info@newyork.msf.org",
            phone: "212-679-6800",
            website: "https://www.doctorswithoutborders.org",
            description: "Delivers emergency medical aid to people affected by conflict, epidemics, disasters, or exclusion from healthcare."
        },
        {
            id: "5",
            name: "Save the Children",
            email: "supportercare@savethechildren.org",
            phone: "800-728-3843",
            website: "https://www.savethechildren.org",
            description: "Works to improve the lives of children through better education, health care, and economic opportunities."
        }
    ];

    // Fetch and display charity details
    const charity = charitiesData.find((charity) => charity.id === charityId);
    if (charity) {
        charityNameElement.textContent = charity.name;
        charityProfileElement.innerHTML = `
            <h2>About Us</h2>
            <p>${charity.description}</p>
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:${charity.email}">${charity.email}</a></p>
            <p>Phone: ${charity.phone}</p>
            <p>Website: <a href="${charity.website}" target="_blank">${charity.website}</a></p>
        `;
    } else {
        charityNameElement.textContent = "Charity Not Found";
        charityProfileElement.innerHTML = "<p>The charity you are looking for does not exist.</p>";
    }

    // Handle form submission
    volunteerForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        contactForm.style.display = "none"; // Hide the form
        thankYouMessage.style.display = "block"; // Show the thank-you message
    });
});