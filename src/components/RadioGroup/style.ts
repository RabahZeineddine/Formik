import { Theme, createStyles } from '@material-ui/core';

export default (theme: Theme) => createStyles({
    formControl: {
        minWidth: 120
    },
    fullWidth: {
        width: "100%"
    },
    fullRowWidth: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})