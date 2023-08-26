import React from 'react'
import './header.css'
import Img from "./images/logo.jpg"
import ImgBanner from "./images/banner.jpg"
import { Avatar, Box, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import Button from '@mui/material/Button';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ background: "black" }}>
            <div>
                <div className='warrap-header'>
                    <Grid container spacing={2}>
                        <Grid item lg={2}>
                            <img className='img-fluid' style={{ width: "190px", height: "130px" }} src={Img} alt="..." />
                        </Grid>
                        <Grid item lg={2}><p className='logo'>Mercedes-Benz</p></Grid>
                        <Grid item lg={4}> <p className='copyright'>© 2022. Mercedes-Benz AG. Bảo lưu mọi quyền (Thông tin xuất bản) </p></Grid>
                        <Grid item lg={1}>
                            <button className='language'>EN</button>
                            <button className='language'>VI</button>
                        </Grid>
                        <Grid item lg={3}><input className='search' type="text" placeholder='Từ khóa tìm kiếm' /></Grid>
                    </Grid>
                </div>
                <hr />
                <div className='warrap-header'>
                    <Box className='menu-merce warrap-header' sx={{ display: 'flex', alignItems: 'center', textAlign: "center" }} >
                        <Typography sx={{ minWidth: 200 }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <DriveEtaIcon style={{ fontSize: "20px", marginBottom: "2px" }} />
                                <p style={{ paddingLeft: "6px" }}>Các dòng xe</p>
                            </Box>
                        </Typography>
                        <Typography sx={{ minWidth: 200 }}>Mua trực tuyến</Typography>
                        <Typography sx={{ minWidth: 200 }}>Tư vấn mua xe</Typography>
                        <Typography sx={{ minWidth: 200 }}>Dịch vụ</Typography>
                        <Typography sx={{ minWidth: 200 }}>Thế giới Mercedes-Benz</Typography>
                    </Box>
                    <Menu
                        // anchorEl={anchorEl}
                        id="account-menu"
                        // open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                {/* <PersonAdd fontSize="small" /> */}
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                {/* <Settings fontSize="small" /> */}
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                {/* <Logout fontSize="small" /> */}
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
                <hr />
                <h3 style={{ textAlign: 'center', fontSize: 18 }}>Khám phá những <u>ưu đãi tốt nhất</u> tại cửa hàng trực tuyến</h3>
            </div>
            <hr />

            <div className='banner'>
                <img className='img-fluid' src={ImgBanner} alt="" />
                <div className='text-banner'>
                    <h1 className='title-banner'>Lựa Chọn Là Của Bạn</h1>
                    <h3 style={{ background: "none" }}>Chỉ trong tháng 8 và 9/2023 - Ưu đãi tương ứng 50% thuế VAT
                        dành cho lựa chọn xe Mercedes-Benz của bạn [1] </h3>
                    <Button variant="contained" color="primary">
                        Tìm xe có sẵn cùng ưu đãi
                    </Button>
                    <Button variant="contained" color="primary">
                        Tìm hiểu chương trình
                    </Button>
                    <div className='note-header'>

                        <p>[1] Chương trình khuyến mại giảm giá tương ứng 50% VAT (áp dụng trên giá bán lẻ đề xuất công bố bởi MBV) khi khách hàng hoàn tất thủ tục thanh toán 100% giá trị hợp đồng, áp dụng từ ngày 03/08/2023 đến hết ngày 30/9/2023.
                            <br />
                            Giá bán lẻ thực tế, vui lòng liên hệ Nhà Phân Phối.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Header