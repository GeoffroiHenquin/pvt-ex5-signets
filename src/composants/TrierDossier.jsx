import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 360,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export default function TrierDossier({triSelec}) {

    const classes = useStyles();
    const [tri, setTri] = triSelec;

    const handleChange = (event) => {
        setTri(event.target.value);
    };

  return (
    <div className="TrierDossier">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Trier les dossiers</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          onChange={handleChange}
        >
          <MenuItem value={['datemodif','desc']}>Date de modification</MenuItem>
          <MenuItem value={['nom','asc']}>Nom en ordre croissant</MenuItem>
          <MenuItem value={['nom','desc']}>Nom en ordre decroissant</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}