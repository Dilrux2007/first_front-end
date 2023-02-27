import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

export default function Video() {
    return (
        <>
            <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, mb: "100px" }}
            >
                <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                    <CardCover style={{ height: "800px" }}>
                        <video
                            autoPlay
                            loop
                            muted
                            poster="https://assets.codepen.io/6093409/river.jpg"
                        >
                            <source
                                src="https://assets.codepen.io/6093409/river.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </CardCover>
                    <CardContent>
                    </CardContent>
                </Card>

            </Box>
            <footer style={{display: "flex", marginTop:"800px", background: "black", color: "#FFFFFF"}}>
                <div className='footerbir' style={{ padding: "30px", width: "473px" }}>
                    <h6>© 2013-2022</h6>
                    <h6>Продажа iPhone в МСК</h6>
                    <p className='footerbirp'>*Сайт не является публичной оффертой. Вся информация, указанная на сайте носит информационный характер.</p>
                </div>

                <div className='footerikki' style={{width: "400px"}}>
                    <p className='footerikkip'>Гарантия</p>
                    <p className='footerikkip'>Политика возврата</p>
                    <p className='footerikkip'>Кредит</p>
                    <p className='footerikkip'>Доставка и оплата</p>
                    <p className='footerikkip'>Отзывы</p>
                    <p className='footerikkip'>Контакты</p>
                    <p className='footerikkip'>Политика конфеденциальности</p>
                </div>

                <div className='footeruch' style={{width: "400px"}}>
                    <p className='footerikkip'>iPhone</p>
                    <p className='footerikkip'>iPad</p>
                    <p className='footerikkip'>Macbook и iMac</p>
                    <p className='footerikkip'>Watch</p>
                    <p className='footerikkip'>Аксессуары</p>
                    <p className='footerikkip'>Акции</p>
                </div>

                <div className='footertort'>
                    <h1>+998 (90) 316-07-19</h1>
                    <p className='konsultatsiya'>Бесплатная консультация С 10:00 до 21:00, без выходных</p>
                    <p>Заказать звонок</p>
                    <p>Москва,  ул Барклая 8 </p>
                </div>
            </footer>

        </>
    );
}