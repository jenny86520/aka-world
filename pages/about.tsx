import {
  Layout,
  Row,
  Col,
  Card,
  Tooltip,
  List,
  Typography,
  Collapse,
  Descriptions,
  Carousel,
  Image,
  Tabs,
} from "antd";
import {
  UserOutlined,
  GithubOutlined,
  MailOutlined,
  WalletOutlined,
  YoutubeOutlined,
  MonitorOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { NextPage } from "next";
import PropTypes from "prop-types";
import { menu } from "../components/menu/mainMenu";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;

const YoutubeEmbed = (embedId: string) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

const About: NextPage = () => {
  const infoMenu = menu;

  const nameBlock = () => {
    return (
      <Card>
        <Typography>
          <Row align="middle" justify="center">
            <Col md="24" lg="8">
              <Avatar size={300} icon={<UserOutlined />} src="/myPhoto.jpg" />
            </Col>
            <Col md="24" lg="10" offset={1} style={{ paddingTop: 20 }}>
              <Row align="middle">
                <Col md="12" lg="5">
                  <Title className="myTitle"> 呂芯萍</Title>
                </Col>
                <Col md="12" lg="5" offset={1}>
                  <Title level={2} className="myTitle">
                    Aka Lu
                  </Title>
                </Col>
              </Row>
              <Row>
                <Paragraph>
                  遊走於網頁前後端的軟體工程師。
                  <br />
                  前端著手過 Angular 及 React 專案，後端則為 ASP.Net Core 及
                  Node.JS 等。
                  <br />
                  <br />
                  學歷 : 臺灣科技大學 資訊工程系學士（2015 - 2019）
                </Paragraph>
              </Row>

              <List>
                <a href="mailto:jenny50626000@gmail.com" target="_block">
                  <List.Item>
                    <Tooltip title="E-mail 聯絡我" placement="topLeft">
                      <List.Item.Meta
                        avatar={
                          <MailOutlined
                            className="iconSize"
                            style={{ color: "blue" }}
                          />
                        }
                        title={"E-mail"}
                        description={"jenny50626000@gmail.com"}
                      ></List.Item.Meta>
                    </Tooltip>
                  </List.Item>
                </a>
                <a href="https://github.com/jenny86520" target="_block">
                  <List.Item>
                    <Tooltip title="Github 瀏覽我的作品" placement="topLeft">
                      <List.Item.Meta
                        avatar={<GithubOutlined className="iconSize" />}
                        title={"Github"}
                        description={"https://github.com/jenny86520"}
                      ></List.Item.Meta>
                    </Tooltip>
                  </List.Item>
                </a>
                <a href="https://akaschool-f4936.web.app/" target="_block">
                  <List.Item>
                    <Tooltip title="Angular 個人教學網頁" placement="topLeft">
                      <List.Item.Meta
                        avatar={
                          <WalletOutlined
                            className="iconSize"
                            style={{ color: "#DE3163" }}
                          />
                        }
                        title={"akaSchool"}
                        description={"https://akaschool-f4936.web.app/"}
                      ></List.Item.Meta>
                    </Tooltip>
                  </List.Item>
                </a>
                <a href="https://www.youtube.com/@dragonfly_r" target="_block">
                  <List.Item>
                    <Tooltip
                      title="Youtube 訂閱我的遊戲實況頻道"
                      placement="topLeft"
                    >
                      <List.Item.Meta
                        avatar={
                          <YoutubeOutlined
                            className="iconSize"
                            style={{ color: "red" }}
                          />
                        }
                        title={"赤蜻."}
                        description={"https://www.youtube.com/@dragonfly_r"}
                      ></List.Item.Meta>
                    </Tooltip>
                  </List.Item>
                </a>
              </List>
            </Col>
          </Row>
        </Typography>
      </Card>
    );
  };

  const skillBlock = () => {
    return (
      <Row justify="center">
        <Col span={22} lg={18}>
          <Card className="cardStyles">
            <Typography>
              <Title className="title">
                <MonitorOutlined /> 技能
              </Title>
              <Row>
                <Card.Grid className="ant-col-24 ant-col-lg-8">
                  <Title level={2}>Front-End</Title>
                  <List style={{ fontSize: 20 }}>
                    <List.Item>Angular</List.Item>
                    <List.Item>React</List.Item>
                    <List.Item>HTML / CSS / JavaScript (TypeScript)</List.Item>
                    <List.Item>jQuery</List.Item>
                    <List.Item>RxJS</List.Item>
                    <List.Item>Next.JS</List.Item>
                    <List.Item>Single SPA</List.Item>
                    <List.Item>Module Federation</List.Item>
                  </List>
                </Card.Grid>
                <Card.Grid className="ant-col-24 ant-col-lg-8">
                  <Title level={2}>CSS</Title>
                  <List style={{ fontSize: 20 }}>
                    <List.Item>Bootstrap</List.Item>
                    <List.Item>Ant Design</List.Item>
                    <List.Item>PrimeNG</List.Item>
                  </List>
                </Card.Grid>
                <Card.Grid className="ant-col-24 ant-col-lg-8">
                  <Title level={2}>Back-End</Title>
                  <List style={{ fontSize: 20 }}>
                    <List.Item>ASP.Net Core</List.Item>
                    <List.Item>ASP.Net Framework</List.Item>
                    <List.Item>Node.JS、Nest.JS</List.Item>
                    <List.Item>Java</List.Item>
                  </List>
                </Card.Grid>
              </Row>
              <Row>
                <Card.Grid className="ant-col-24 ant-col-lg-8">
                  <Title level={2}>Database</Title>
                  <List style={{ fontSize: 20 }}>
                    <List.Item>Microsoft SQL Server</List.Item>
                    <List.Item>Firebase、MongoDB (Mongoose)</List.Item>
                    <List.Item>Entity Framework</List.Item>
                    <List.Item>MySQL</List.Item>
                    <List.Item>SQLite</List.Item>
                  </List>
                </Card.Grid>
                <Card.Grid className="ant-col-24 ant-col-lg-8">
                  <Title level={2}>Other Languages</Title>
                  <List style={{ fontSize: 20 }}>
                    <List.Item>C、C++</List.Item>
                    <List.Item>Python</List.Item>
                    <List.Item>Android Studio (Java)</List.Item>
                  </List>
                </Card.Grid>
                <Card.Grid className="ant-col-24 ant-col-lg-8">
                  <Title level={2}>Version Control</Title>
                  <List style={{ fontSize: 20 }}>
                    <List.Item>Git</List.Item>
                    <List.Item>Github</List.Item>
                    <List.Item>Gitlab</List.Item>
                    <List.Item>TFS (Team Foundation Service)</List.Item>
                  </List>
                </Card.Grid>
              </Row>
            </Typography>
          </Card>
        </Col>
      </Row>
    );
  };

  const experienceBlock = () => {
    return (
      <Row justify="center">
        <Col span={22} lg={18}>
          <Card className="cardStyles">
            <Typography>
              <Title className="title">
                <MonitorOutlined /> 工作經歷
              </Title>
              <Title level={2}>
                銀行內外部系統的前後端（Angular、ASP.net core）
              </Title>
              <Collapse defaultActiveKey={["1", "2"]}>
                <Panel header="工作資訊" key="1">
                  <List>
                    <List.Item>
                      <Descriptions>
                        <Descriptions.Item label="公司名稱">
                          金財通商務科技服務股份有限公司
                        </Descriptions.Item>
                        <Descriptions.Item label="工作資歷">
                          2019/04 - 2021/11（約2年半）
                        </Descriptions.Item>
                        <Descriptions.Item label="職稱">
                          軟體工程師
                        </Descriptions.Item>
                      </Descriptions>
                    </List.Item>
                  </List>
                </Panel>
                <Panel header="工作內容" key="2">
                  <List>
                    <List.Item>
                      接銀行外包案，負責線上申請的內外部系統的前後端。外部系統為貸款、信用卡、行動帳單等線上申請作業，包含表單製作、圖片上傳下載、XML
                      電文串接身分驗證（金片金融卡、自然人憑證、本行信用卡戶、他行帳戶等）、申請書與契約的PDF下載、將資料儲存至資料庫等，也包含申請案件的查詢、補件、線上對保的功能；內部系統為行員針對線上申請案件的操作，包含發送
                      XML
                      起案、中止案件、契約填單、審核、放行、客戶客製化設定頁面及案件歷程等，亦有FTP上傳下載的批次排程。
                    </List.Item>
                    <List.Item>
                      前端使用 Angular，後端使用 .Net Core，批次排程使用 .Net
                      Framework 框架。
                    </List.Item>
                    <List.Item>使用 bootstrap 框架進行頁面編排。</List.Item>
                    <List.Item>
                      使用 IIS 伺服器管理站台，並使用反向代理連結內外部站台。
                    </List.Item>
                    <List.Item>
                      使用 Microsoft SQL Server 管理資料庫。
                    </List.Item>
                    <List.Item>
                      使用 Git 進行版本控制，使用 VSCode、Visual Studio
                      2017、Visual Studio 2019 開發。
                    </List.Item>
                    <List.Item>
                      接觸過 Ionic、Java、Firebase、Android
                      Studio，幫助其餘專案及自我提升。
                    </List.Item>
                    <List.Item>
                      與 PM
                      討論架構、資料表結構及解釋程式碼邏輯，並協助製作測試報告。
                    </List.Item>
                    <List.Item>
                      專案編制為四位 RD 與一位 PM，僅 PM 為對客戶之窗口。
                    </List.Item>
                  </List>
                </Panel>
              </Collapse>
              <Title level={2}>
                車牌辨識、課程、去背網站內部系統的前後端（React、Node.JS、Ant
                Design）
              </Title>
              <Collapse defaultActiveKey={["1", "2"]}>
                <Panel header="工作資訊" key="1">
                  <List>
                    <List.Item>
                      <Descriptions>
                        <Descriptions.Item label="公司名稱">
                          海姆達爾智慧科技股份有限公司
                        </Descriptions.Item>
                        <Descriptions.Item label="工作資歷">
                          2021/12 - 2023/05（約1年半）
                        </Descriptions.Item>
                        <Descriptions.Item label="職稱">
                          全端軟體工程師
                        </Descriptions.Item>
                      </Descriptions>
                    </List.Item>
                  </List>
                </Panel>
                <Panel header="工作內容" key="2">
                  <List>
                    <List.Item>
                      負責車牌辨識、課程、去背後台管理系統的資料處理，負責內部系統的前後端，以及外部系統的後端。內部系統為人員、單位、角色、會員管理，及客戶回饋、訂單、罰單、系統參數設定、角色權限管理、人員新刪修、違規罰單檢視、違規開單、訂單管理、統計圖表、憑證設定、通知設定（Web、Email、Telegram、Line）、客製化頁面、表單製作、圖片上傳下載、Excel表單下載及操作歷程等，亦有撰寫大量測資及處理資料的批次排程；外部系統為課程及去背後台管理系統的前端所需API，包含課程資訊、統計資料等。
                    </List.Item>
                    <List.Item>
                      前端使用 React 及 Next.JS 框架，後端使用 Node.JS 及
                      Nest.JS 框架。
                    </List.Item>
                    <List.Item>使用 Ant Design 框架進行頁面編排。</List.Item>
                    <List.Item>
                      使用 MongoDB(Mongoose)、Robo 3T 管理資料庫。
                    </List.Item>
                    <List.Item>
                      使用 Git 進行版本控制，使用 VSCode 開發。
                    </List.Item>
                    <List.Item>
                      接觸過 Vercel 幫助其餘專案及自我提升。
                    </List.Item>
                    <List.Item>
                      與 PM
                      討論架構、資料表結構及解釋程式碼邏輯，並協助製作操作報告。
                    </List.Item>
                    <List.Item>
                      負責維護現有專案、開發擴充功能及解決套件版本衝突。
                    </List.Item>
                    <List.Item>
                      專案編制為兩位 RD 與一位 PM，僅 PM 為對客戶之窗口。
                    </List.Item>
                  </List>
                </Panel>
              </Collapse>
              <Title level={2}>
                銀行內部系統的前端（Angular、Single SPA、Module
                Federation、PrimeNG）
              </Title>
              <Collapse defaultActiveKey={["1", "2"]}>
                <Panel header="工作資訊" key="1">
                  <List>
                    <List.Item>
                      <Descriptions>
                        <Descriptions.Item label="公司名稱">
                          國泰世華商業銀行股份有限公司
                        </Descriptions.Item>
                        <Descriptions.Item label="工作資歷">
                          2023/08 - 現職中
                        </Descriptions.Item>
                        <Descriptions.Item label="職稱">
                          高級專員
                        </Descriptions.Item>
                      </Descriptions>
                    </List.Item>
                  </List>
                </Panel>
                <Panel header="工作內容" key="2">
                  <List>
                    <List.Item>
                      接銀行前台與後台需求之內部系統（為中間資料處理的站台，簡稱中台），負責信用卡權益管理、批次管理、規則引擎、中台內部整合管理系統的前端。內部系統為行員針對不同系統的設定與管理，包含表單填寫、跨欄位或跨頁面的檢核、審核、放行、退回、批次歷程等。
                    </List.Item>
                    <List.Item>
                      使用 Angular 及微前端框架 Single SPA 與 Module
                      Federation。
                    </List.Item>
                    <List.Item>使用 PrimeNG 框架進行頁面編排。</List.Item>
                    <List.Item>
                      使用 Git、Gitlab、TFS（Team Foundation
                      Service）進行版本控制，使用 VSCode 開發。
                    </List.Item>
                    <List.Item>
                      接觸過單元測試（Unit Test）Jest、Jasmine
                      及整合測試（End-to-end
                      Test）Playwright，幫助其餘專案及自我提升。
                    </List.Item>
                    <List.Item>
                      與 PM、SA、Back-end、QA
                      討論架構及解釋程式碼邏輯，並協助製作測試報告。
                    </List.Item>
                    <List.Item>
                      負責行內委外廠商管理，包含進駐、退場、防火牆開通、遠端資安檢測等。
                    </List.Item>
                  </List>
                </Panel>
              </Collapse>
            </Typography>
          </Card>
        </Col>
      </Row>
    );
  };

  const portfolio = () => {
    return (
      <Row justify="center">
        <Col span={22} lg={18}>
          <Card className="cardStyles">
            <Typography>
              <Title className="title">
                <MonitorOutlined /> 作品集
              </Title>
              <Collapse accordion defaultActiveKey="1">
                <Panel
                  header="銀行內外部系統的前後端（Angular、ASP.net core）"
                  key="1"
                >
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="身分驗證" key={1}>
                      <Carousel autoplay>
                        <div>
                          <Image
                            src="/portfolio_client_1_1.png"
                            alt="portfolio_client_1_1"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_1_2.png"
                            alt="portfolio_client_1_2"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_1_3.png"
                            alt="portfolio_client_1_3"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_1_4.png"
                            alt="portfolio_client_1_4"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_1_5.png"
                            alt="portfolio_client_1_5"
                          ></Image>
                        </div>
                      </Carousel>
                    </TabPane>
                    <TabPane tab="檔案上傳" key={2}>
                      <Carousel autoplay>
                        <div>
                          <Image
                            src="/portfolio_client_2_1.png"
                            alt="portfolio_client_2_1"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_2_2.png"
                            alt="portfolio_client_2_2"
                          ></Image>
                        </div>
                      </Carousel>
                    </TabPane>
                    <TabPane tab="表單填寫" key={3}>
                      <Carousel autoplay>
                        <div>
                          <Image
                            src="/portfolio_client_3_1.png"
                            alt="portfolio_client_3_1"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_3_2.png"
                            alt="portfolio_client_3_2"
                          ></Image>
                        </div>
                      </Carousel>
                    </TabPane>
                    <TabPane tab="表單呈現 & 列印" key={4}>
                      <Carousel autoplay>
                        <div>
                          <Image
                            src="/portfolio_client_4_1.png"
                            alt="portfolio_client_4_1"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_4_2.png"
                            alt="portfolio_client_4_2"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_4_3.png"
                            alt="portfolio_client_4_3"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_4_4.png"
                            alt="portfolio_client_4_4"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_client_4_5.png"
                            alt="portfolio_client_4_5"
                          ></Image>
                        </div>
                      </Carousel>
                    </TabPane>
                    <TabPane disabled tab="內部系統不宜呈現" key={5}></TabPane>
                  </Tabs>
                </Panel>
                <Panel header="書寶寶好棒 Bookie（Android App）" key="2">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="介紹影片" key={1}>
                      {YoutubeEmbed("P4qIcgL_r2c")}
                    </TabPane>
                    <TabPane tab="畫面呈現" key={2}>
                      <Carousel autoplay>
                        <div>
                          <Image
                            src="/portfolio_app_1_1.png"
                            alt="portfolio_app_1_1"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_app_1_2.png"
                            alt="portfolio_app_1_2"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src="/portfolio_app_1_3.png"
                            alt="portfolio_app_1_3"
                          ></Image>
                        </div>
                      </Carousel>
                    </TabPane>
                  </Tabs>
                </Panel>
              </Collapse>
            </Typography>
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <Layout className="pageLayout">
      {infoMenu()}
      <Content className="pageContent">
        <Layout id="name" className="pageLayout subLayout">
          {nameBlock()}
        </Layout>
        <Layout id="skill" className="pageLayout subLayout">
          {skillBlock()}
        </Layout>
        <Layout id="experience" className="pageLayout subLayout">
          {experienceBlock()}
        </Layout>
        <Layout id="portfolio" className="pageLayout subLayout">
          {portfolio()}
        </Layout>
      </Content>
    </Layout>
  );
};

export default About;
