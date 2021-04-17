import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';
import NewPaletteForm from './NewPaletteForm';
class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = {
			palettes : savedPalettes || seedColors
		};
		this.savePalette = this.savePalette.bind(this);
		this.removePalette = this.removePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		// this.syncLocalStorage = this.syncLocalStorage.bind(this);
	}
	findPalette(id) {
		return this.state.palettes.find(function(palette) {
			return palette.id === id;
		});
	}
	removePalette(id) {
		this.setState(
			(st) => ({ palettes: st.palettes.filter((palette) => palette.id !== id) }),
			this.syncLocalStorage
		);
	}
	savePalette(newPalette) {
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] }, this.syncLocalStorage);
	}
	syncLocalStorage() {
		// save palettes to local storage
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	}
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/palette/new"
					render={(routeProps) => (
						<NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} />
					)}
				/>
				<Route
					exact
					path="/"
					render={(routeProps) => (
						<PaletteList
							{...routeProps}
							removePalette={this.removePalette}
							palettes={this.state.palettes}
						/>
					)}
				/>
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
				<Route
					exact
					path="/palette/:paletteId/:colorId"
					render={(routeProps) => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
						/>
					)}
				/>
			</Switch>
			// <div>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div>
		);
	}
}

export default App;
