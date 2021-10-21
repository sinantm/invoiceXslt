import { Button, Layout, Menu } from "antd";
import { connect } from "react-redux";
import Theme from "../theme";
import BankInfo from "../bankInfo";
import CompanyInfo from "../companyInfo";
import Notes from "../notes";
import Logo from "../Logo";
import Signature from "../signature";
import InvoicePreview from "../invoicePreview";
import "./style.css";
import { Switch, Route, Link } from "react-router-dom";
import { LocationModel } from "../../common/models";
import { Dispatch } from "redux";
import { updateLocationInfo } from "./actions";
import { LocationInfoStateType } from "./types";

const { Header, Content, Footer } = Layout;

interface IProps {
  locationInfo: LocationModel;
  updateLocationInfo: typeof updateLocationInfo;
}

const LayoutBody = (props: IProps) => {
  const menuDisabled = props.locationInfo.disabledPage;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[props.locationInfo.selectedKeys]}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item disabled={menuDisabled.theme} key="1">
            <Link to="/theme">Tema Seçimi</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.companyinfo} key="2">
            <Link to="/companyinfo">Firma Bilgileri</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.logo} key="3">
            <Link to="/logo">Logo</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.signature} key="4">
            <Link to="/signature">İmza</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.bankinfo} key="5">
            <Link to="/bankinfo">Banka Bilgileri</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.notes} key="6">
            <Link to="/notes">Notlar</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.invoicepreview} key="7">
            <Link to="/invoicepreview">Fatura Önizle</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Switch>
          <Route exact path="/" component={Theme} />
          <Route exact path="/theme" component={Theme} />
          <Route exact path="/companyinfo" component={CompanyInfo} />
          <Route exact path="/logo" component={Logo} />
          <Route exact path="/signature" component={Signature} />
          <Route exact path="/bankinfo" component={BankInfo} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/invoicepreview" component={InvoicePreview} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Fatura Tasarım İndirme Programı
      </Footer>
    </Layout>
  );
};

const mapStateToProps = ({ locationInfo }: LocationInfoStateType) => ({
  locationInfo: locationInfo.info,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateLocationInfo: (params: LocationModel) =>
    dispatch(updateLocationInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutBody);
