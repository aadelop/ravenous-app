const apiKey = 'QlZk6_1-XjyxbllyiNQ_pAewtxGvLcXx-hCk_5Fdl-_Y-QdQ2YExR1fyZieb51ljBUt5FbrD3-o5cwn5u2lF7_pnpuB_KDtam03LF2dElFPSSKB3iyl9vRvXHgfWXnYx'; // Insert API key here.
const Bearer= "Bearer " + apiKey;

const Yelp = {
  search(term, location, sortBy) {
    const url =`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
    console.log(url)
    return fetch(url, {
      headers: {
        Authorization:  Bearer
      }
    }).then(response => {
    	console.log('first then');
      	return response.json();

    }).then(jsonResponse => {
    	console.log('second then');
      if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }});
      }
    });
  }
};

export default Yelp;
