import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import './NavBar.css';
export class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format : 'hex',
			open   : false
		};
		this.handleChange = this.handleChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	handleChange(e) {
		this.setState({
			format : e.target.value,
			open   : true
		});
		this.props.handleChange(e.target.value);
	}
	closeSnackbar() {
		this.setState({
			open : false
		});
	}
	render() {
		const { level, changeLevel, showingAllShades } = this.props;
		const { format, open } = this.state;
		return (
			<header className="Navbar">
				<div className="logo">
					<Link to="/" key>
						reactcolorpicker
					</Link>
				</div>
				{showingAllShades && (
					<div className="slider-conainer">
						<span>Level: {level}</span>
						<div className="slider">
							<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
						</div>
					</div>
				)}

				<div className="select-container">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={open}
					autoHideDuration={3000}
					message={<span id="msg-id">Format Changed To {format.toUpperCase()}</span>}
					// contentProps is for screen-readers
					ContentProps={{
						'aria-describedby' : 'msg-id'
					}}
					onClose={this.closeSnackbar}
					action={[
						<IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
							<CloseIcon />
						</IconButton>
					]}
				/>
			</header>
		);
	}
}

export default NavBar;
