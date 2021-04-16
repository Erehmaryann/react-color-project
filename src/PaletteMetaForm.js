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
			open           : true,
			newPaletteName : ''
		};

		this.handleChange = this.handleChange.bind(this);
	}
	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
			// extract name from each color
			return this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase());
		});
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	render() {
		const { newPaletteName } = this.state;
		const { hideForm, handleSubmit } = this.props;
		return (
			<Dialog open={this.state.open} onClose={hideForm} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
				<ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your new beautiful palette. Make sure it's unique!
						</DialogContentText>
						<Picker />
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
		);
	}
}
