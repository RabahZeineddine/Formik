
import { Theme, createStyles } from '@material-ui/core/styles';

export default (_theme: Theme) => createStyles({
    root: {
        margin: 0,
        "& .MuiInputAdornment-root": {
            height: 'auto'
        }
    }
})