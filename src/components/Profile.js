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
import CenteredLayout from "./CenteredLayout";

const genders = [
    {
        value: 'female',
        label: 'Female',
    },
    {
        value: 'male',
        label: 'Male',
    },
];

const allergies = [
    {
        value: 'nut',
        label: 'Nut allergy'
    },
    {
        value: 'gluten',
        label: 'Gluten allergy'
    },
];

const preferences = [
    {
        value: 'vegetarian',
        label: 'Vegetarian'
    },
    {
        value: 'vegan',
        label: 'Vegan',
    }
];

function mapStateToProps(_) {
    return {};
}

class Profile extends Component {
    constructor(props) {
        super(props);

        let reducer = (previousValue, currentValue) => {
            previousValue[currentValue.value] = false;
            return previousValue
        };

        let pref = preferences.reduce(reducer, {gender: 'M'});
        this.state  = allergies.reduce(reducer, pref);
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
            <CenteredLayout>
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
            </CenteredLayout>
        );
    }
}

export default connect(
    mapStateToProps,
)(Profile);