import React from 'react';
import { FormControlLabel, Radio, FormGroup, FormHelperText, FormControl, FormLabel } from '@material-ui/core';
import { RESPOSTAS } from '../utils/respostas';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit * 3,
    }
});

class FormOptions extends React.Component {

    render() {

        const {
            classes,
            question,
            error,
            value,
            errorMessage,
            handleChange,
            name
        } = this.props;

        return (
            <React.Fragment>
                <FormLabel component="legend">{question}</FormLabel>

                <FormControlLabel
                    label='Não se aplica'
                    control={<Radio color="secondary" />}
                    checked={value === RESPOSTAS.NAO_SE_APLICA}
                    onChange={e => handleChange(e, name)}
                    value={RESPOSTAS.NAO_SE_APLICA}
                />
                <FormControlLabel
                    label='Nunca'
                    control={<Radio color="secondary" />}
                    checked={value === RESPOSTAS.NUNCA}
                    onChange={e => handleChange(e, name)}
                    value={RESPOSTAS.NUNCA}
                />
                <FormControlLabel
                    label='Quase nunca'
                    control={<Radio color="secondary" />}
                    checked={value === RESPOSTAS.QUASE_NUNCA}
                    onChange={e => handleChange(e, name)}
                    value={RESPOSTAS.QUASE_NUNCA}
                />
                <FormControlLabel
                    label='As vezes'
                    control={<Radio color="secondary" />}
                    checked={value === RESPOSTAS.AS_VEZES}
                    onChange={e => handleChange(e, name)}
                    value={RESPOSTAS.AS_VEZES}
                />
                <FormControlLabel
                    label='Quase sempre'
                    control={<Radio color="secondary" />}
                    checked={value === RESPOSTAS.QUASE_SEMPRE}
                    onChange={e => handleChange(e, name)}
                    value={RESPOSTAS.QUASE_SEMPRE}
                />
                <FormControlLabel
                    label='Sempre'
                    control={<Radio color="secondary" />}
                    checked={value === RESPOSTAS.SEMPRE}
                    onChange={e => handleChange(e, name)}
                    value={RESPOSTAS.SEMPRE}
                />
                <FormHelperText style={{ margin: '0px' }} error>{error && errorMessage}</FormHelperText>
            </React.Fragment>
        )
    }
};
export default withStyles(styles)(FormOptions);