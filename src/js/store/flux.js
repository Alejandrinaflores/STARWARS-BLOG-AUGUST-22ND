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

			},
			addFavorite:(element) => {

				const store = getStore();

				const response = store.favorites.filter((favoriteName) => {
					return favoriteName.name === element.name;
				});

				if(response.length <= 0 ){
					const newState = store;
					newState.favorites.push(element);
					
					setStore(
						newState
					);
	
					localStorage.setItem('store', JSON.stringify(store));
				}

			},
			deleteFavorite:(element) => {
				
				const store = getStore();

				const elementIndex = store.favorites.indexOf(element.name);
				store.favorites.splice(elementIndex, 1);

				setStore(
					store
				);

				localStorage.setItem('store', JSON.stringify(store));
			}
		}
	};
};

export default getState;
