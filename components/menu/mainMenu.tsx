import { Affix, Menu } from "antd";
import { FormatPainterOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Header } from "antd/lib/layout/layout";

export const menu = () => {
  let menuSelectKeys: string[] = [];

  return (
    <Affix style={{ marginBottom: "-3rem", zIndex: 3 }}>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          onClick={() => {
            menuSelectKeys = [];
          }}
          mode="horizontal"
          defaultSelectedKeys={["name"]}
          selectedKeys={menuSelectKeys}
          className="menu"
        >
          <Menu.Item key="name" id="nameBtn">
            <Link href="/about#name">Aka Lu</Link>
          </Menu.Item>
          <Menu.Item key="skill" id="skillBtn">
            <Link href="/about#skill">技能</Link>
          </Menu.Item>
          <Menu.Item key="experience" id="experienceBtn">
            <Link href="/about#experience">工作經歷</Link>
          </Menu.Item>
          <Menu.Item key="portfolio" id="portfolioBtn">
            <Link href="/about#portfolio">作品集</Link>
          </Menu.Item>
          <Menu.Item key="graffitiWall" id="graffitiWall">
            <FormatPainterOutlined /> <Link href="/graffitiWall">塗鴉牆</Link>
          </Menu.Item>
        </Menu>{" "}
      </Header>
    </Affix>
  );
};
