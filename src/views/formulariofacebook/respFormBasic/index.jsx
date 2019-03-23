import React from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';
import { RESPOSTAS } from '../constantes/respostas';

export const Options = ({ value, handleChange, name }) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
};
