import { Alert, Col, Layout, Row, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { NextPage } from "next";
import { backgroundColor, mainColor } from "../shared/colors";
import { menu } from "../components/menu/mainMenu";
import Marquee from "react-fast-marquee";

const { Title } = Typography;

const GraffitiWall: NextPage = () => {
  const mainMenu = menu;
  const message = (
    <Title style={{ color: mainColor }}>
      <WarningOutlined /> Coming soon ... 
    </Title>
  );

  return (
    <Layout style={{ backgroundColor: backgroundColor }}>
      {mainMenu()}
      <Content style={{ paddingBottom: "3rem" }}>
        <Layout id="name" style={{ paddingTop: "4rem" }}>
          <Typography>
            <Alert
              banner
              message={
                <Marquee pauseOnHover gradient={false}>
                  <Row justify="space-around" align="middle" gutter={24}>
                    <Col span={8}>{message}</Col>
                    <Col span={8}>{message}</Col>
                    <Col span={8}>{message}</Col>
                  </Row>
                </Marquee>
              }
            />
          </Typography>
        </Layout>
      </Content>
    </Layout>
  );
};

export default GraffitiWall;
