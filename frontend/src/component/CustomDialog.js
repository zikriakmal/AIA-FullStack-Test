import { Dialog, DialogContent, DialogTitle } from "@mui/material"

const CustomDialog = ({ onClose, isOpen, data }) =>
{
    return (
        <>
            {
                data.title === undefined ? "" :
                    <Dialog onClose={onClose} open={isOpen} style={{ textAlign: 'center' }}>
                        <div style={{ padding: '20px' }}>
                            <DialogTitle className="dialog-title">
                                <div>
                                    <img src={data.media.m ?? ""} width={400} height={420} alt={data.media.m ?? " "} />
                                </div>
                                <div>
                                    {data.title === "" ? 'No Title' : data.title}
                                </div>
                            </DialogTitle>
                            <DialogContent className="dialog-content">
                                <p>{new Date(data.date_taken).toLocaleString()}</p>
                                <p>{data.author}</p>
                                <a variant={'contained'} href={data.link} target={'_blank'} rel={'noreferrer'}>Details</a>
                            </DialogContent>
                        </div>
                    </Dialog>

            }
        </>
    )
}

export default CustomDialog;