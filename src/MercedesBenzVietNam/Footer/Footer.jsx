import React from 'react'
import './footer.css'
import { Box, Grid } from '@mui/material'
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
    return (
        <div className='footer' style={{ background: "black", width: "100%" }}>
            <div className='container'>
                <div style={{ textAlign: 'center' }}>
                    <KeyboardArrowUpIcon style={{ fontSize: 60, marginTop: 20 }} />
                    <p style={{ marginTop: 'none' }}>Lên trên</p>
                    <br />
                </div>
                <div className='footer-top'>
                    <Grid container spacing={1} className='keepinfo'>
                        <Grid item xs={12} lg={6}>
                            <h3>Giữ liên lạc với chúng tôi.</h3>
                            <p>Các thông tin hiện tại được điều chỉnh theo sở thích của bạn.</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Button variant="contained" color="primary">
                                Đăng ký nhận bản tin
                            </Button>
                            {/* <button variant="contained">Đăng ký nhận bản tin</button> */}
                        </Grid>
                    </Grid>
                </div>

                <div className='footer-bottom'>

                    <div className="footer-item">
                        <h3>Mua xe</h3>
                        <ul>
                            <li>
                                <a>Xe đã qua sử dụng</a>
                            </li>
                            <li>
                                <a>Xe mới</a>
                            </li>
                            <li>
                                <a>Chọn cấu hình xe</a>
                            </li>
                            <li>
                                <a>Bảng giá và Brochure</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Tư vấn mua xe</h3>
                        <ul>
                            <li>
                                <a>Yêu cầu tư vấn</a>
                            </li>
                            <li>
                                <a>Đăng ký lái thử</a>
                            </li>
                            <li>
                                <a>Tìm Nhà Phân Phối gần nhất</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Dịch vụ</h3>
                        <ul>
                            <li>
                                <a>Đặt hẹn dịch vụ</a>
                            </li>
                            <li>
                                <a>Ưu đãi đặc biệt</a>
                            </li>
                            <li>
                                <a>Phụ kiện chính hãng</a>
                            </li>
                            <li>
                                <a>Hướng dẫn sử dụng dành cho chủ sở hữu xe</a>
                            </li>
                            <li>
                                <a>Triệu hồi xe</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Các dòng xe</h3>
                        <ul>
                            <li>
                                <a>SUV</a>
                            </li>
                            <li>
                                <a>Sedan</a>
                            </li>
                            <li>
                                <a>Mercedes-AMG</a>
                            </li>
                            <li>
                                <a>Mercedes-Maybach</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Giới thiệu</h3>
                        <ul>
                            <li>
                                <a>Liên hệ</a>
                            </li>
                            <li>
                                <a>Câu chuyện của chúng tôi</a>
                            </li>
                            <li>
                                <a>Phát triển bền vững và tương lai</a>
                            </li>
                            <li>
                                <a>Tin tức và sự kiện</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <hr />
                {/* <Box display='flex' flexWrap="wrap" gridColumn={8}>
                    <Box display='flex' flexWrap="wrap">
                        <p>Bản quyền nội dung</p>

                        <p>Cài đặt</p>

                        <p>Quyền riêng tư và bảo vệ dữ liệu</p>

                        <p>Thông tin pháp lý</p>
                    </Box>

                    <Box display="flex" flexWrap="wrap">
                        <FacebookIcon />
                        <YouTubeIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </Box>
                </Box> */}
                <Grid container spacing={2}>
                    <Grid item lg={2}>
                        <p>Bản quyền nội dung</p>
                    </Grid>
                    <Grid item lg={1}>
                        <p>Cài đặt</p>
                    </Grid>
                    <Grid item lg={3}>
                        <p>Quyền riêng tư và bảo vệ dữ liệu</p>
                    </Grid>
                    <Grid item lg={2}>
                        <p>Thông tin pháp lý</p>
                    </Grid>
                    <Grid item lg={1}></Grid>
                    <Grid item lg={3} className='icon-footer'>
                        <FacebookIcon style={{ fontSize: 30, marginRight: 20, marginTop: 10 }} />
                        <YouTubeIcon style={{ fontSize: 30, marginRight: 20, marginTop: 10 }} />
                        <InstagramIcon style={{ fontSize: 30, marginRight: 20, marginTop: 10 }} />
                        <LinkedInIcon style={{ fontSize: 30, marginRight: 20, marginTop: 10 }} />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer