import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from "@material-ui/core/TextField";
import './Profile.css'
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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

const checkboxes = [

]

function mapStateToProps(state) {
    return {};
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state ={gender: 'M'};
    }

    setGender = value => {
        this.setState({gender: value});
    }

    handleChangedGender = event => {
        this.setGender(event.target.value);
    };

    render() {
        return (
            <React.Fragment>
                <FormControl>
                    <InputLabel htmlFor="outlined-number">Profile</InputLabel>
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-number"
                        label="Age"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
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
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-number"
                        label="Weight"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <FormHelperText id="my-helper-text">We'll never share your personal information</FormHelperText>
                </FormControl>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
)(Profile);