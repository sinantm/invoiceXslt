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
import { LocationModel, TemplateModel } from "../../common/models";
import { LocationInfoStateType } from "./types";
import { Dispatch } from "redux";
import { updateLocationInfo } from "./actions";
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;

interface IProps {
  locationInfo: LocationModel;
  theme: TemplateModel;
  updateLocationInfo: typeof updateLocationInfo;
}

const LayoutBody = (props: IProps) => {
  let history = useHistory();

  const [menuDisabled, setMenuDisabled] = useState({
    m1: false,
    m2: true,
    m3: true,
    m4: true,
    m5: true,
    m6: true,
  });

  const next = (numberKeys: number, keyValue: number) => {
    if (numberKeys === keyValue) {
      return;
    }

    props.updateLocationInfo({ selectedKeys: numberKeys.toString() });

    function pathAndDisabled(
      path: string,
      disabled: {
        m1: boolean;
        m2: boolean;
        m3: boolean;
        m4: boolean;
        m5: boolean;
        m6: boolean;
      }
    ) {
      history.push(path);
      setMenuDisabled({
        m1: disabled.m1,
        m2: disabled.m2,
        m3: disabled.m3,
        m4: disabled.m4,
        m5: disabled.m5,
        m6: disabled.m6,
      });
    }

    switch (numberKeys) {
      case 1:
        return pathAndDisabled("/theme", {
          m1: false,
          m2: true,
          m3: true,
          m4: true,
          m5: true,
          m6: true,
        });
      case 2:
        return pathAndDisabled("/companyinfo", {
          m1: true,
          m2: false,
          m3: true,
          m4: true,
          m5: true,
          m6: true,
        });
      case 3:
        return pathAndDisabled("/logo", {
          m1: true,
          m2: true,
          m3: false,
          m4: true,
          m5: true,
          m6: true,
        });
      case 4:
        return pathAndDisabled("/signature", {
          m1: true,
          m2: true,
          m3: true,
          m4: false,
          m5: true,
          m6: true,
        });
      case 5:
        return pathAndDisabled("/bankinfo", {
          m1: true,
          m2: true,
          m3: true,
          m4: true,
          m5: false,
          m6: true,
        });
      case 6:
        return pathAndDisabled("/notes", {
          m1: true,
          m2: true,
          m3: true,
          m4: true,
          m5: true,
          m6: false,
        });
      default:
        return console.log(`404`);
    }
  };

  const nextPage = () => {
    let numberKeys = parseInt(props.locationInfo.selectedKeys) + 1;
    next(numberKeys, 7);
  };

  const turnBackPage = () => {
    let numberKeys = parseInt(props.locationInfo.selectedKeys) - 1;
    next(numberKeys, 0);
  };

  useEffect(() => {
    return () => {
      nextPage();
    };
  }, [props.theme.HtmlTemplate]);

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
          <Menu.Item disabled={menuDisabled.m1} key="1">
            <Link to="/theme">Tema Seçimi</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.m2} key="2">
            <Link to="/bankinfo">Firma Bilgileri</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.m3} key="3">
            <Link to="/logo">Logo</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.m4} key="4">
            <Link to="/signature">İmza</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.m5} key="5">
            <Link to="/bankinfo">Banka Bilgileri</Link>
          </Menu.Item>
          <Menu.Item disabled={menuDisabled.m6} key="6">
            <Link to="/notes">Notlar</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {props.theme.HtmlTemplate !== "" ? (
          <>
            <Button onClick={turnBackPage}>Geri Dön</Button>{" "}
            <Button onClick={nextPage}>Devam Et</Button>
          </>
        ) : null}
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
        Fatura Tasarım İndirme Programı
      </Footer>
    </Layout>
  );
};

const mapStateToProps = ({ locationInfo, theme }: any) => ({
  locationInfo: locationInfo.info,
  theme: theme.selected,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateLocationInfo: (params: LocationModel) =>
    dispatch(updateLocationInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutBody);
