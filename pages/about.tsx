import { Layout, Menu, Row, Col, Card, Tooltip, List, Affix, Collapse, Descriptions } from "antd";
import { UserOutlined, GithubOutlined, MailOutlined, WalletOutlined, YoutubeOutlined, MonitorOutlined } from '@ant-design/icons';
import Avatar from "antd/lib/avatar/avatar";
import { NextPage } from "next";
import Link from "next/link";
import { Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;


const About: NextPage = () => {
    let menuSelectKeys: string[] = [];

    const infoMenu = () => {
        return (
            <Menu
                theme="dark"
                onClick={() => {
                    menuSelectKeys = [];
                }}
                mode="horizontal"
                defaultSelectedKeys={["name"]}
                selectedKeys={menuSelectKeys}>
                <Menu.Item key="name" id="nameBtn">
                    <Link href="#name">Aka Lu</Link>
                </Menu.Item>
                <Menu.Item key="skill" id="skillBtn">
                    <Link href="#skill">技能</Link>
                </Menu.Item>
                <Menu.Item key="experience" id="experienceBtn">
                    <Link href="#experience">工作經歷</Link>
                </Menu.Item>
                <Menu.Item key="portfolio" id="portfolioBtn">
                    <Link href="#portfolio">作品集</Link>
                </Menu.Item>
            </Menu>
        )
    }

    const nameBlock = () => {
        return (
            <Card>
                <Row align="middle" justify="center">
                    <Col md="24" lg="8" style={{paddingRight: 50}}>
                        <Avatar
                            size={300}
                            icon={<UserOutlined />} />
                    </Col>
                    <Col md="24" lg="10" style={{paddingTop: 20}}>
                        <Typography>
                            <Row align="middle">
                                <Col md="12" lg="5" >
                                    <Title>呂芯萍</Title>
                                </Col>
                                <Col md="12" lg="5" offset={1}>
                                    <Title level={2}>Aka Lu</Title>
                                </Col>
                            </Row>
                            <Row>
                                <Paragraph style={{ fontSize: 20 }}>
                                    遊走於網頁前後端的軟體工程師。<br />
                                    前端著手過 Angular 及 React 專案，後端則為 ASP.Net Core 及 Node.JS 等。<br />
                                    <br />
                                    學歷 : 臺灣科技大學 資訊工程系學士（2015 - 2019）
                                </Paragraph>
                            </Row>

                            <List>
                                <a href="mailto:jenny50626000@gmail.com" target="_block">
                                    <List.Item>
                                        <Tooltip title="E-mail 聯絡我" placement="topLeft">
                                            <List.Item.Meta
                                                avatar={<MailOutlined className="MyIcon" style={{ color: "blue" }} />}
                                                title={"E-mail"}
                                                description={"jenny50626000@gmail.com"}>
                                            </List.Item.Meta>
                                        </Tooltip>
                                    </List.Item>
                                </a>
                                <a href="https://github.com/jenny86520" target="_block">
                                    <List.Item>
                                        <Tooltip title="Github 瀏覽我的作品" placement="topLeft">
                                            <List.Item.Meta
                                                avatar={<GithubOutlined className="MyIcon" />}
                                                title={"Github"}
                                                description={"https://github.com/jenny86520"}>
                                            </List.Item.Meta>
                                        </Tooltip>
                                    </List.Item>
                                </a>
                                <a href="https://akaschool-f4936.web.app/" target="_block">
                                    <List.Item>
                                        <Tooltip title="Angular 個人教學網頁" placement="topLeft">
                                            <List.Item.Meta
                                                avatar={<WalletOutlined className="MyIcon" style={{ color: "#DE3163" }} />}
                                                title={"akaSchool"}
                                                description={"https://akaschool-f4936.web.app/"}>
                                            </List.Item.Meta>
                                        </Tooltip>
                                    </List.Item>
                                </a>
                                <a href="https://www.youtube.com/channel/UC9mNWhvvEgAPA2Je1wi-HYQ" target="_block">
                                    <List.Item>
                                        <Tooltip title="Youtube 訂閱我的遊戲實況頻道" placement="topLeft">
                                            <List.Item.Meta
                                                avatar={<YoutubeOutlined className="MyIcon" style={{ color: "red" }} />}
                                                title={"赤蜻."}
                                                description={"https://www.youtube.com/channel/UC9mNWhvvEgAPA2Je1wi-HYQ"}>
                                            </List.Item.Meta>
                                        </Tooltip>
                                    </List.Item>
                                </a>
                            </List>

                        </Typography>


                    </Col>
                </Row>
            </Card>
        )
    }

    const skillBlock = () => {
        return (
            <Row>
                <Col span={18} offset={3}>
                    <Card>
                        <Typography>
                            <Title style={{ color: "brown" }}><MonitorOutlined /> 技能</Title>
                            <Row>
                                <Card.Grid className="ant-col-24 ant-col-lg-8">
                                    <Title level={2}>Front-End</Title>
                                    <List>
                                        <List.Item>
                                            Angular
                                        </List.Item>
                                        <List.Item>
                                            React
                                        </List.Item>
                                        <List.Item>
                                            HTML / CSS / JavaScript (TypeScript)
                                        </List.Item>
                                        <List.Item>
                                            jQuery
                                        </List.Item>
                                        <List.Item>
                                            Bootstrap、Ant Design
                                        </List.Item>
                                    </List>
                                </Card.Grid>
                                <Card.Grid className="ant-col-24 ant-col-lg-8">
                                    <Title level={2}>Back-End</Title>
                                    <List>
                                        <List.Item>
                                            ASP.Net Core
                                        </List.Item>
                                        <List.Item>
                                            ASP.Net Framework
                                        </List.Item>
                                        <List.Item>
                                            Java
                                        </List.Item>
                                    </List>
                                </Card.Grid>
                                <Card.Grid className="ant-col-24 ant-col-lg-8">
                                    <Title level={2}>Other Languages</Title>
                                    <List>
                                        <List.Item>
                                            C、C++
                                        </List.Item>
                                        <List.Item>
                                            Python
                                        </List.Item>
                                        <List.Item>
                                            Android Studio (Java)
                                        </List.Item>
                                    </List>
                                </Card.Grid>
                            </Row>
                            <Row>
                                <Card.Grid className="ant-col-24 ant-col-lg-8">
                                    <Title level={2}>Database</Title>
                                    <List>
                                        <List.Item>
                                            Microsoft SQL Server
                                        </List.Item>
                                        <List.Item>
                                            Firebase
                                        </List.Item>
                                        <List.Item>
                                            MySQL
                                        </List.Item>
                                        <List.Item>
                                            SQLite
                                        </List.Item>

                                    </List>
                                </Card.Grid>
                                <Card.Grid className="ant-col-24 ant-col-lg-8">
                                    <Title level={2}>Version Control</Title>
                                    <List>
                                        <List.Item>
                                            Git
                                        </List.Item>
                                        <List.Item>
                                            Github
                                        </List.Item>
                                        <List.Item>
                                            Gitlab
                                        </List.Item>
                                    </List>
                                </Card.Grid>

                            </Row>
                        </Typography>
                    </Card >
                </Col>
            </Row>
        )
    }

    const experienceBlock = () => {
        return (
            <Row>
                <Col span={18} offset={3}>
                    <Card>
                        <Typography>
                            <Title style={{ color: "brown" }}><MonitorOutlined /> 工作經歷</Title>
                            <Title level={2}>銀行內外部系統的前後端（Angular、ASP.net core）</Title>
                            <Collapse defaultActiveKey={['1', '2']}>
                                <Panel header="工作資訊" key="1">
                                    <List>
                                        <List.Item>
                                            <Descriptions>
                                                <Descriptions.Item label="公司名稱">金財通商務科技服務股份有限公司</Descriptions.Item>
                                                <Descriptions.Item label="工作資歷">2019/04 - 2021/11（約2年半）</Descriptions.Item>
                                                <Descriptions.Item label="職稱">軟體工程師</Descriptions.Item>
                                            </Descriptions>
                                        </List.Item>
                                    </List>
                                </Panel>
                                <Panel header="工作內容" key="2">
                                    <List>
                                        <List.Item>
                                            接銀行外包案，負責線上申請的內外部系統的前後端。外部系統為貸款、信用卡、行動帳單等線上申請作業，包含表單製作、圖片上傳下載、XML 電文串接身分驗證（金片金融卡、自然人憑證、本行信用卡戶、他行帳戶等）、申請書與契約的PDF下載、將資料儲存至資料庫等，也包含申請案件的查詢、補件、線上對保的功能；內部系統為行員針對線上申請案件的操作，包含發送 XML 起案、中止案件、契約填單、審核、放行、客戶客製化設定頁面及案件歷程等，亦有FTP上傳下載的批次排程。
                                        </List.Item>
                                        <List.Item>
                                            前端使用 Angular，後端使用 .Net Core，批次排程使用 .Net Framework 框架。
                                        </List.Item>
                                        <List.Item>
                                            使用 bootstrap 框架進行頁面編排。
                                        </List.Item>
                                        <List.Item>
                                            使用 IIS 伺服器管理站台，並使用反向代理連結內外部站台。
                                        </List.Item>
                                        <List.Item>
                                            使用 Microsoft SQL Server 管理資料庫。
                                        </List.Item>
                                        <List.Item>
                                            使用 Git 進行版本控制，使用 VSCode、Visual Studio 2017、Visual Studio 2019 開發。
                                        </List.Item>
                                        <List.Item>
                                            接觸過 Ionic、Java、Firebase、Android Studio，幫助其餘專案及自我提升。
                                        </List.Item>
                                        <List.Item>
                                            與 PM 討論架構、資料表結構及解釋程式碼邏輯，並協助製作測試報告。
                                        </List.Item>
                                        <List.Item>
                                            目前持續維護現有專案及開發擴充功能。
                                        </List.Item>
                                        <List.Item>
                                            專案編制為四位 RD 與一位 PM，僅 PM 為對客戶之窗口。
                                        </List.Item>
                                    </List>
                                </Panel>
                            </Collapse>
                        </Typography>
                    </Card>
                </Col>
            </Row>
        )
    }

    const portfolio = () => {
        return (
            <Row>
                <Col span={18} offset={3}>
                    <Card>
                        <Typography>
                            <Title style={{ color: "brown" }}><MonitorOutlined /> 作品集</Title>
                            Coming soon ...
                        </Typography>
                    </Card>
                </Col>
            </Row>
        )
    }

    return (<Layout>
        <Affix>
            <Header>
                <div className="logo" />
                {infoMenu()}
            </Header>
        </Affix>
        <Content>
            <Layout id="name" style={{ paddingTop: '5em' }}>
                {nameBlock()}
            </Layout>
            <Layout id="skill" style={{ paddingTop: '5em' }}>
                {skillBlock()}
            </Layout>
            <Layout id="experience" style={{ paddingTop: '5em' }}>
                {experienceBlock()}
            </Layout>
            <Layout id="portfolio" style={{ paddingTop: '5em' }}>
                {portfolio()}
            </Layout>
        </Content>
        <Footer>Footer</Footer>
    </Layout>)
}

export default About;