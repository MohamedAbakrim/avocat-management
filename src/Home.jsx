import Header from "./Header";

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <main className="container">
                <div className="welcome">مرحبا بكم في برنامج المحامي</div>
                <div className="content">
                    <div className="cal"></div>
                    <div className="informattions-parent">
                        <div className="informations">
                            <div className="parent" id="one">
                                <div className="content">
                                    <p>الجلسات</p>
                                    <h5>3</h5>
                                </div>
                                <div className="icon">
                                    <img src="./images/png3.png" alt="test" width="16px"/>
                                </div>
                            </div>
                            <div className="parent" id="two">
                                <div className="content">
                                    <p>عدد القضايا</p>
                                    <h5>2</h5>
                                </div>
                                <div className="icon">
                                    <img src="./images/png2.png" alt="test" width="16px"/>
                                </div>
                            </div>
                            <div className="parent" id="three">
                                <div className="content">
                                    <p>عدد العملاء</p>
                                    <h5>2</h5>
                                </div>
                                <div className="icon">
                                    <img src="./images/png1.png" alt="test" width="16px"/>
                                </div>
                            </div>
                            <div className="parent" id="four">
                                <div className="content">
                                    <p>إجمالي المتبقي</p>
                                    <h5>1 ,600.000</h5>
                                </div>
                                <div className="icon">
                                    <img src="./images/png4.png" alt="test" width="16px"/>
                                </div>
                            </div>
                            <div className="parent" id="five">
                                <div className="content">
                                    <p>إجمالي المدفوع</p>
                                    <h5>600.000</h5>
                                </div>
                                <div className="icon">
                                    <img src="./images/png4.png" alt="test" width="16px"/>
                                </div>
                            </div>
                            <div className="parent" id="six">
                                <div className="content">
                                    <p>إجمالي العقود</p>
                                    <h5>2 ,500.000</h5>
                                </div>
                                <div className="icon">
                                    <img src="./images/png4.png" alt="test" width="16px"/>
                                </div>
                            </div>
                            <div className="parent" id="seven">
                                <div className="content">
                                    <p>المبالغ المتبقية بعد المصروفات</p>
                                    <h5>400.000</h5>
                                </div>
                                <div className="icon">
                                    <img src="./images/png4.png" alt="test" width="16px"/>
                                </div>
                            </div>
                            <div className="parent" id="eight">
                                <div className="content">
                                    <p>إجمالي المصروفات</p>
                                    <h5>200.000</h5>
                                </div>
                                <div className="icon">
                                    <img src="./images/png4.png" alt="test" width="16px"/>
                                </div>
                            </div>
                        </div>
                        <div className="links">
                            <h6>روابط سريعة :</h6>
                            <div className="links-container">
                                <div>
                                    <p>العملاء</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div>
                                <div>
                                    <p>القضايا</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div>
                                <div>
                                    <p>قضية جديدة</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div>
                                <div>
                                    <p>الجلسات</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div>
                                <div>
                                    <p>المدفوعات</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div><div>
                                    <p>المصروفات</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div>
                                <div>
                                    <p>تقارير العملاء</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div><div>
                                    <p>تقارير القضايا</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div><div>
                                    <p>تقارير الجلسات</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div><div>
                                    <p>تقارير المدفوعات</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div><div>
                                    <p>إعدادات النظام</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div><div>
                                    <p>المستخدمين</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div><div>
                                    <p>الصلاحيات</p>
                                    <img src="./images/png1.png" alt="png2" width="12px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;