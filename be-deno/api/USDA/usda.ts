// https://fdc.nal.usda.gov/api-guide.html

const fetchData = async (query: string) => {
    const API_ENDPOINT = 'https://api.nal.usda.gov/fdc/v1/foods/search';
    const API_KEY = 'DEMO_KEY'; // Csere a saját kulcsodra, ha van
  
    const payload = {
      query: query,
      dataType: ["Branded"],
      sortBy: "fdcId",
      sortOrder: "desc"
    };
  
    const response = await fetch(API_ENDPOINT + `?api_key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
  };
  
  // Példa használatra
  fetchData('Cheddar cheese')
    .then(data => console.log(data))
    .catch(error => console.error(error));
  