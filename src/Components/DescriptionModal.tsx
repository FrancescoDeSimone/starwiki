import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


interface IDescriptionModal {
    data: any;
    open: boolean;
    handleOpen: any;
    handleClose: any;
}

export default (props: IDescriptionModal) => {
    const { data, open, handleOpen, handleClose } = props

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {data[Object.keys(data)[0]]}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {Object.keys(data).map((key: string) => <p>{key}:{data[key]}</p>)}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );

}

