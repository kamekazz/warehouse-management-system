import grey from '@material-ui/core/colors/grey';

export default {
    palette: {
        type: 'dark',
        types: {
            dark: {
                background: {
                    paper: '#2d353c',
                    default: '#2d353c',
                    appBar: '#2d353c',
                    contentFrame: '#2d353c',
                    chip: '#2d353c',
                    avatar: '#2d353c'
                }
            }
        },
        primary: {
            light: grey[400],
            main: grey[700],
            dark: grey[900],
            contrastText: '#fff'
        },
        secondary: {
            light: grey[200],
            main: grey[500],
            dark: grey[700],
            contrastText: '#fff'
        },
        background: {
            paper: '#2d353c',
            default: '#2d353c',
            appBar: '#2d353c',
            contentFrame: '#2d353c',
            chip: '#2d353c',
            avatar: '#2d353c'
        }
    },
    status: {
        danger: 'orange',
    },

    typography: {
        button: {
            fontWeight: 400,
            textAlign:
                'capitalize'
        },
    },
};
