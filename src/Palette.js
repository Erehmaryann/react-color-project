import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
export class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level  : 500,
			format : 'hex'
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeFormat(val) {
		// alert(val);
		this.setState({ format: val });
	}

	render() {
		const { colors, paletteName, id, emoji } = this.props.palette;
		const { level, format } = this.state;

		const colorBoxes = colors[level].map((color) => {
			return (
				<ColorBox
					background={color[format]}
					name={color.name}
					key={color.id}
					// paletteId={id}
					// id={color.id}
					showLink={true}
					moreUrl={`/palette/${id}/${color.id}`}
				/>
			);
		});
		return (
			<div className="Palette">
				<NavBar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showingAllShades
				/>
				<div className="Palette-colors">{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default Palette;
