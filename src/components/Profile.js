import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from "@material-ui/core/TextField";
import './Profile.css'
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const genders = [
    {
        value: 'F',
        label: 'Female',
    },
    {
        value: 'M',
        label: 'Male',
    },
];

const allergies = [
    {
        value: 'Nut',
        label: 'Nut allergy'
    },
    {
        value: 'Glut',
        label: 'Gluten allergy'
    },
];

const preferences = [
    {
        value: 'Vt',
        label: 'Vegetarian'
    },
    {
        value: 'Vn',
        label: 'Vegan',
    }
];

function mapStateToProps(_) {
    return {};
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state ={ gender: 'M'};

        allergies.forEach((element) => {
            this.state[element.value] = false;
        });

        preferences.forEach((element) => {
            this.state[element.value] = false;
        });
    }

    handleChangedGender = event => {
        this.setState({gender: event.target.value});
    };

    handleChangedAge = event => {
        this.setState({age: event.target.value});
    };

    handleChangedSize = event => {
        this.setState({size: event.target.value});
    };

    handleChangedWeight = event => {
        this.setState({weight: event.target.value});
    };

    handleChangeCheckbox = name => _ => {
        this.setState({[name]: !this.state[name]});
    };

    render() {
        return (
            <React.Fragment>
                <InputLabel htmlFor="outlined-number">Profile</InputLabel>
                <FormControl>
                    <TextField
                        id="outlined-number"
                        label="Age"
                        onChange={this.handleChangedAge}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Years</InputAdornment>,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Gender"
                        value={this.state.gender}
                        onChange={this.handleChangedGender}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                            },
                        }}
                        margin="normal"
                        variant="outlined"
                    >
                        {genders.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-number"
                        label="Size"
                        type="number"
                        onChange={this.handleChangedSize}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-number"
                        label="Weight"
                        type="number"
                        onChange={this.handleChangedWeight}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                        margin="normal"
                        variant="outlined"
                    />

                    <FormLabel component="legend">Preferences</FormLabel>
                    <FormGroup>
                        {preferences.map((preference, i) => (
                            <FormControlLabel key={i}
                                control={
                                    <Checkbox checked={this.state[preference.value]}
                                              onChange={this.handleChangeCheckbox(preference.value)}/>}
                                label={preference.label}
                            />
                        ))}
                    </FormGroup>

                    <FormLabel component="legend">Allergies</FormLabel>
                    <FormGroup>
                        {allergies.map((allergy, i) => (
                            <FormControlLabel key={i}
                                control={
                                    <Checkbox checked={this.state[allergy.value]}
                                              onChange={this.handleChangeCheckbox(allergy.value)}/>}
                                label={allergy.label}
                            />
                        ))}
                    </FormGroup>

                    <FormHelperText id="my-helper-text">We'll never share your personal information</FormHelperText>
                </FormControl>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
)(Profile);