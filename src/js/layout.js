import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Main } from "./views/main";
import { CharacterSingleCard } from "./views/characterSingleCard";
import { PlanetsSingleCard } from './views/planetsSingleCard';
import { VehiclesSingleCard } from './views/vehiclesSingleCard';

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Main />
						</Route>
						<Route exact path="/main">
							<Main />
						</Route>
						<Route exact path="/characters">
							<CharacterSingleCard />
						</Route>
						<Route exact path="/planets">
							<PlanetsSingleCard />
						</Route>
						<Route exact path="/vehicles">
							<VehiclesSingleCard />
						</Route>
						<Route>
							<Main />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);