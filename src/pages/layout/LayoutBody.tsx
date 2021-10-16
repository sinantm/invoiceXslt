import { Button, Layout, Menu } from "antd";
import { connect } from "react-redux";
import Theme from "../theme";
import BankInfo from "../bankInfo";
import CompanyInfo from "../companyInfo";
import Notes from "../notes";
import Logo from "../Logo";
import Signature from "../signature";
import "./style.css";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { LocationModel } from "../../common/models";
import { LocationInfoStateType } from "./types";
import { Dispatch } from "redux";
import { updateLocationInfo } from "./actions";

const { Header, Content, Footer } = Layout;

interface IProps {
  locationInfo: LocationModel;
  updateLocationInfo: typeof updateLocationInfo;
}

const LayoutBody = (props: IProps) => {
  let history = useHistory();

  const nextPage = (numberKeys: number) => {
    switch (numberKeys) {
      case 1:
        return history.push("/theme");
      case 2:
        return history.push("/companyinfo");
      case 3:
        return history.push("/logo");
      case 4:
        return history.push("/signature");
      case 5:
        return history.push("/bankinfo");
      case 6:
        return history.push("/notes");
      default:
        return null;
    }
  };

  const nextPatch = () => {
    let numberKeys = parseInt(props.locationInfo.selectedKeys) + 1;

    if (numberKeys === 7) {
      return;
    }

    props.updateLocationInfo({ selectedKeys: numberKeys.toString() });

    nextPage(numberKeys);
  };

  const turnBack = () => {
    let numberKeys = parseInt(props.locationInfo.selectedKeys) - 1;

    if (numberKeys === 0) {
      return;
    }

    props.updateLocationInfo({ selectedKeys: numberKeys.toString() });

    nextPage(numberKeys);
  };

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
          <Menu.Item key="1">
            <Link to="/theme">Tema Seçimi</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={{ pathname: "/bankinfo", state: { from: "root" } }}>
              Firma Bilgileri
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/logo">Logo</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/signature">İmza</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/bankinfo">Banka Bilgileri</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/notes">Notlar</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Button onClick={turnBack}>Geri Dön</Button>
        <Button onClick={nextPatch}>Devam Et</Button>
        <Switch>
          <Route exact path="/" component={Theme} />
          <Route exact path="/theme" component={Theme} />
          <Route exact path="/companyinfo" component={CompanyInfo} />
          <Route exact path="/logo" component={Logo} />
          <Route exact path="/signature" component={Signature} />
          <Route exact path="/bankinfo" component={BankInfo} />
          <Route exact path="/notes" component={Notes} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
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
