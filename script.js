document.addEventListener("DOMContentLoaded", function () {
    const charityListContainer = document.querySelector('.charity-container');
    const filterContainer = document.querySelector('.filters');
    const searchBar = document.querySelector('.search-bar');

    // Realistic charity data
    const charitiesData = [
        {
            id: 1,
            name: "Feeding America",
            email: "info@feedingamerica.org",
            phone: "800-771-2303",
            website: "https://www.feedingamerica.org",
            category: "Hunger Relief",
            description: "Nation's largest domestic hunger-relief organization, working to connect people with food and end hunger."
        },
        {
            id: 2,
            name: "Habitat for Humanity",
            email: "publicinfo@habitat.org",
            phone: "800-422-4828",
            website: "https://www.habitat.org",
            category: "Housing",
            description: "Helps families build and improve places to call home, believing affordable housing plays a critical role in strong communities."
        },
        {
            id: 3,
            name: "American Red Cross",
            email: "info@redcross.org",
            phone: "800-733-2767",
            website: "https://www.redcross.org",
            category: "Disaster Relief",
            description: "Provides emergency assistance, disaster relief, and education in the United States."
        },
        {
            id: 4,
            name: "Doctors Without Borders",
            email: "info@newyork.msf.org",
            phone: "212-679-6800",
            website: "https://www.doctorswithoutborders.org",
            category: "Medical Relief",
            description: "Delivers emergency medical aid to people affected by conflict, epidemics, disasters, or exclusion from healthcare."
        },
        {
            id: 5,
            name: "Save the Children",
            email: "supportercare@savethechildren.org",
            phone: "800-728-3843",
            website: "https://www.savethechildren.org",
            category: "Child Welfare",
            description: "Works to improve the lives of children through better education, health care, and economic opportunities."
        },
        {
            id: 6,
            name: "World Wildlife Fund",
            email: "info@wwfus.org",
            phone: "202-293-4800",
            website: "https://www.worldwildlife.org",
            category: "Environmental Conservation",
            description: "Works to conserve nature and reduce the most pressing threats to the diversity of life on Earth."
        },
        {
            id: 7,
            name: "The Nature Conservancy",
            email: "member@tnc.org",
            phone: "800-628-6860",
            website: "https://www.nature.org",
            category: "Environmental Conservation",
            description: "Conserves the lands and waters on which all life depends."
        },
        {
            id: 8,
            name: "St. Jude Children's Research Hospital",
            email: "info@stjude.org",
            phone: "800-822-6344",
            website: "https://www.stjude.org",
            category: "Medical Research",
            description: "Leads the way the world understands, treats, and defeats childhood cancer and other life-threatening diseases."
        },
        {
            id: 9,
            name: "UNICEF USA",
            email: "info@unicefusa.org",
            phone: "800-367-5437",
            website: "https://www.unicefusa.org",
            category: "Child Welfare",
            description: "Works for the survival, protection, and development of children worldwide through fundraising, advocacy, and education."
        },
        {
            id: 10,
            name: "American Cancer Society",
            email: "info@cancer.org",
            phone: "800-227-2345",
            website: "https://www.cancer.org",
            category: "Medical Research",
            description: "Dedicated to eliminating cancer as a major health problem through research, education, advocacy, and service."
        }
    ];

    function displayCharities(charities) {
        charityListContainer.innerHTML = '';
        if (charities.length === 0) {
            charityListContainer.innerHTML = "<p>No charities match the selected filters.</p>";
            return;
        }
        charities.forEach(charity => {
            const card = document.createElement('div');
            card.className = 'charity-card';
            card.innerHTML = `
                <h3>${charity.name}</h3>
                <p>${charity.description}</p>
                <p><strong>Category:</strong> ${charity.category}</p>
                <a href="charity-profile.html?id=${charity.id}" class="btn">View Profile</a>
            `;
            charityListContainer.appendChild(card);
        });
    }

    function displayFilters() {
        const categories = [...new Set(charitiesData.map(charity => charity.category))];
        filterContainer.innerHTML = categories
            .map(category => `
                <label>
                    <input type="checkbox" value="${category}" class="filter-checkbox"> ${category}
                </label>
            `)
            .join("");
        
        document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', applyFilters);
        });
    }

    function applyFilters() {
        const selectedCategories = Array.from(
            document.querySelectorAll('.filter-checkbox:checked')
        ).map(cb => cb.value);

        const searchTerm = searchBar.value.toLowerCase();

        let filteredCharities = charitiesData;

        if (selectedCategories.length > 0) {
            filteredCharities = filteredCharities.filter(charity =>
                selectedCategories.includes(charity.category)
            );
        }

        if (searchTerm) {
            filteredCharities = filteredCharities.filter(charity =>
                charity.name.toLowerCase().includes(searchTerm) ||
                charity.description.toLowerCase().includes(searchTerm)
            );
        }

        displayCharities(filteredCharities);
    }

    // Listen for search input changes
    searchBar.addEventListener('input', applyFilters);

    // Initial display
    displayCharities(charitiesData);
    displayFilters();
});