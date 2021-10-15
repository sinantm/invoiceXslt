import { Layout, Menu } from "antd";
import { connect } from "react-redux";
import Theme from "../theme";
import BannInfo from "../bankInfo";
import {
  TemplateSelectorState,
  TemplateSelectorStateType,
} from "../theme/types";
import "./style.css";

const { Header, Content, Footer } = Layout;

interface IProps {
  theme: TemplateSelectorState;
}

const LayoutBody = (props: IProps) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Tema Seçimi</Menu.Item>
          <Menu.Item key="2">Firma Bilgileri</Menu.Item>
          <Menu.Item key="3">Logo</Menu.Item>
          <Menu.Item key="4">İmza</Menu.Item>
          <Menu.Item key="5">Banka Bilgileri</Menu.Item>
          <Menu.Item key="6">Notlar</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Theme />
          <hr />
          <BannInfo />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED{" "}
        {props.theme.selected.EarchiveTemplate}
      </Footer>
    </Layout>
  );
};

const mapStateToProps = ({ theme }: TemplateSelectorStateType) => ({
  theme: theme,
});

//const mapStateToProps = (state: any) => console.log(`state`, state);

export default connect(mapStateToProps)(LayoutBody);
