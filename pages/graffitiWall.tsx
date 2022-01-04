import {
  Alert,
  Col,
  Layout,
  Row,
  Typography,
  Form,
  Input,
  Card,
  Button,
  message,
} from "antd";
import { WarningOutlined, HighlightOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { NextPage } from "next";
import { menu } from "../components/menu/mainMenu";
import Marquee from "react-fast-marquee";
import style from "../styles/graffitiWall.module.css";

const { Title } = Typography;

const GraffitiWall: NextPage = () => {
  const mainMenu = menu;

  const msg = (
    <Title className="myTitle">
      <WarningOutlined /> Coming soon ...
    </Title>
  );

  const graffitiWall = () => {
    return (
      <Card>
        <Alert
          banner
          message={
            <Marquee pauseOnHover gradient={false} speed={180}>
              <Row justify="space-around" align="middle" gutter={24}>
                <Col span={8}>{msg}</Col>
                <Col span={8}>{msg}</Col>
                <Col span={8}>{msg}</Col>
              </Row>
            </Marquee>
          }
        />
      </Card>
    );
  };

  const msgForm = () => {
    const pasteClick = (values: { userName: string; content: string }) => {
      message.error(
        <div >
          <Row>目前還在施工中 &gt;&lt;</Row>
          <Row>抱歉了 {values.userName}</Row>
        </div>
      );
    };

    return (
      <Row justify="center">
        <Col span={18} lg={14}>
          <Card className="cardStyles">
            <Typography>
              <Title className="title">
                <HighlightOutlined />
                塗鴉
              </Title>
              <Form
                name="msgForm"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                onFinish={pasteClick}
              >
                <Form.Item
                  label="我想說"
                  name="content"
                  rules={[{ required: true, message: "想說的話要打上來唷><" }]}
                >
                  <Input.TextArea></Input.TextArea>
                </Form.Item>
                <Form.Item
                  label="綽號"
                  name="userName"
                  rules={[{ required: true, message: "替塗鴉簽個名吧><" }]}
                >
                  <Input></Input>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button
                    type="dashed"
                    htmlType="submit"
                    className={style.pasteBtn}
                  >
                    貼上
                  </Button>
                </Form.Item>
              </Form>
            </Typography>
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <Layout className="pageLayout">
      {mainMenu()}
      <Content className="pageContent">
        <Layout id="graffitiWall" className="pageLayout subLayout">
          {graffitiWall()}
        </Layout>
        <Layout id="form" className="pageLayout subLayout">
          {msgForm()}
        </Layout>
      </Content>
    </Layout>
  );
};

export default GraffitiWall;
