const getState = ({ getStore, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			fetchData:() => {

				const store = getStore();

				if(!localStorage.getItem('store')) {

					fetch('https://swapi.dev/api/planets/')
					.then(response => response.json())
					.then(data => {
						setStore({planets: data.results})
						localStorage.setItem('store', JSON.stringify(store))
					});
	
					fetch('https://swapi.dev/api/people/')
					.then(response => response.json())
					.then(data => {
						setStore({characters: data.results})
						localStorage.setItem('store', JSON.stringify(store))
					});
	
					fetch('https://swapi.dev/api/vehicles/')
					.then(response => response.json())
					.then(data => {
						setStore({vehicles: data.results})
						localStorage.setItem('store', JSON.stringify(store))
					});

				} else {
					setStore(JSON.parse(localStorage.getItem('store')));
				}

			}
		}
	};
};

export default getState;
