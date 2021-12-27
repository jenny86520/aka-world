import { Layout, Menu, Row, Col, Card, Tooltip, List, Affix } from "antd";
import { UserOutlined, GithubOutlined, MailOutlined, WalletOutlined, YoutubeOutlined, MonitorOutlined } from '@ant-design/icons';
import Avatar from "antd/lib/avatar/avatar";
import { NextPage } from "next";
import Link from "next/link";
import { Typography, Divider } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;


const About: NextPage = () => {
    const infoMenu = () => {
        return (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["name"]} >
                <Menu.Item key="name">
                    <Link href="#name">Aka Lu</Link>
                </Menu.Item>
                <Menu.Item key="skill">
                    <Link href="#skill">技能</Link>
                </Menu.Item>
                <Menu.Item key="experience">
                    <Link href="#experience">工作經歷</Link>
                </Menu.Item>
                <Menu.Item key="portfolio">
                    <Link href="#portfolio">作品集</Link>
                </Menu.Item>
            </Menu>
        )
    }

    const nameBlock = () => {
        return (
            <Card>
                <Row align="middle">
                    <Col span={6} offset={3}>
                        <Avatar
                            size={{ xs: 120, sm: 120, md: 180, lg: 200, xl: 250, xxl: 300 }}
                            icon={<UserOutlined />} />
                    </Col>
                    <Col span={12}>
                        <Typography>
                            <Row align="middle">
                                <Col span={5}>
                                    <Title>呂芯萍</Title>
                                </Col>
                                <Col span={5}>
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
                                <List.Item>
                                    <Tooltip title="E-mail 聯絡我" placement="topLeft">
                                        <List.Item.Meta
                                            avatar={<MailOutlined className="MyIcon" style={{ color: "blue" }} />}
                                            title={"E-mail"}
                                            description={<a href="mailto:jenny50626000@gmail.com" target="_block">jenny50626000@gmail.com</a>}>
                                        </List.Item.Meta>
                                    </Tooltip>
                                </List.Item>
                                <List.Item>
                                    <Tooltip title="Github 瀏覽我的作品" placement="topLeft">
                                        <List.Item.Meta
                                            avatar={<GithubOutlined className="MyIcon" />}
                                            title={"Github"}
                                            description={<a href="https://github.com/jenny86520" target="_block">https://github.com/jenny86520</a>}>
                                        </List.Item.Meta>
                                    </Tooltip>
                                </List.Item>
                                <List.Item>
                                    <Tooltip title="Angular 個人教學網頁" placement="topLeft">
                                        <List.Item.Meta
                                            avatar={<WalletOutlined className="MyIcon" style={{ color: "#DE3163" }} />}
                                            title={"akaSchool"}
                                            description={<a href="https://akaschool-f4936.web.app/" target="_block">https://akaschool-f4936.web.app/</a>}>
                                        </List.Item.Meta>
                                    </Tooltip>
                                </List.Item>
                                <List.Item>
                                    <Tooltip title="Youtube 訂閱我的遊戲實況頻道" placement="topLeft">
                                        <List.Item.Meta
                                            avatar={<YoutubeOutlined className="MyIcon" style={{ color: "red" }} />}
                                            title={"赤蜻."}
                                            description={<a href="https://www.youtube.com/channel/UC9mNWhvvEgAPA2Je1wi-HYQ" target="_block">https://www.youtube.com/channel/UC9mNWhvvEgAPA2Je1wi-HYQ</a>}>
                                        </List.Item.Meta>
                                    </Tooltip>
                                </List.Item>
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
                                <Card.Grid>
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
                                <Card.Grid>
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
                                <Card.Grid>
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
                                <Card.Grid>
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
                                <Card.Grid>
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

    return (<Layout id="name">
        <Affix>
            <Header>
                {infoMenu()}
            </Header>
        </Affix>
        <Content>
            <Layout id="name" style={{ marginTop: '5em' }}>
                {nameBlock()}
            </Layout>
            <Layout id="skill" style={{ marginTop: '5em' }}>
                {skillBlock()}
            </Layout>
        </Content>
        <Footer>Footer</Footer>
    </Layout>)
}

export default About;