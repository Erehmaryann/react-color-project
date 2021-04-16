import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default class FormDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage          : 'form',
			newPaletteName : ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.showEmojiPicker = this.showEmojiPicker.bind(this);
		this.savePalette = this.savePalette.bind(this);
	}
	// handleClickOpen = () => {
	// 	this.setState({ open: true });
	// };

	// handleClose = () => {
	// 	this.setState({ open: false });
	// };
	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
			// extract name from each color
			return this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase());
		});
	}
	savePalette(emoji) {
		console.log(emoji.native);
		const newPalette = {
			paletteName : this.state.newPaletteName,
			emoji       : emoji.native
		};
		this.props.handleSubmit(newPalette);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	showEmojiPicker() {
		this.setState({
			stage : 'emoji'
		});
	}
	render() {
		const { newPaletteName, stage } = this.state;
		const { hideForm } = this.props;
		return (
			<div>
				<Dialog open={stage === 'emoji'} onClose={hideForm}>
					<DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
					<Picker onSelect={this.savePalette} title="Pick a palette emoji…" />
				</Dialog>
				<Dialog open={stage === 'form'} onClose={hideForm} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
					<ValidatorForm onSubmit={this.showEmojiPicker}>
						<DialogContent>
							<DialogContentText>
								Please enter a name for your new beautiful palette. Make sure it's unique!
							</DialogContentText>
							<TextValidator
								name="newPaletteName"
								label="Palette-Name"
								fullWidth
								margin="normal"
								value={newPaletteName}
								onChange={this.handleChange}
								validators={[ 'required', 'isPaletteNameUnique' ]}
								errorMessages={[ 'Enter palette name', 'Name already used' ]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={hideForm} color="primary">
								Cancel
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}
