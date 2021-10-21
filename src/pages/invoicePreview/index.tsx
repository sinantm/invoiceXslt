import { Button, Col, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { Extention, Product } from "../../common/enums";
import {
  CommonModel,
  LocationModel,
  TemplateEarchiveModel,
  TemplateEinvoiceModel,
  TemplateHtmlModel,
} from "../../common/models";
import DownloadTemplate from "../../components/Download";
import ReplaceWithParameter from "../../components/ReplaceWithParameter";
import { updateLocationInfo } from "../layout/actions";

interface IProps {
  state: CommonModel;
  updateLocationInfo: typeof updateLocationInfo;
}

const InvoicePreview = (props: IProps) => {
  let history = useHistory();
  const [replacedHtml, setReplacedHtml] = useState<TemplateHtmlModel>({
    HtmlTemplate: "",
  });
  const [replacedEinvoice, setReplacedEinvoice] =
    useState<TemplateEinvoiceModel>({ EinvoiceTemplate: "" });
  const [replacedEarchive, setReplacedEarchive] =
    useState<TemplateEarchiveModel>({ EarchiveTemplate: "" });

  useEffect(() => {
    return () => {
      const html = ReplaceWithParameter({
        text: props.state.theme.selected.HtmlTemplate,
        state: props.state,
      });
      const eInvoice = ReplaceWithParameter({
        text: props.state.theme.selected.EinvoiceTemplate,
        state: props.state,
      });
      const eArchive = ReplaceWithParameter({
        text: props.state.theme.selected.EarchiveTemplate,
        state: props.state,
      });

      setReplacedHtml({ HtmlTemplate: html });
      setReplacedEinvoice({ EinvoiceTemplate: eInvoice });
      setReplacedEarchive({ EarchiveTemplate: eArchive });
    };
  }, [props.state, props.state.theme]);

  const back = () => {
    props.updateLocationInfo({
      selectedKeys: "6",
      disabledPage: {
        theme: true,
        companyinfo: true,
        logo: true,
        signature: true,
        bankinfo: true,
        notes: false,
        invoicepreview: true,
      },
    });
    history.push("/notes");
  };

  const SelectedProduct = () => {
    return (
      <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Col style={{ textAlign: "right" }} span={11}>
          <Button type="primary" danger onClick={back}>
            Geri Dön
          </Button>{" "}
          <Button type="primary">
            <DownloadTemplate
              file={Product.EINVOICE + Extention.XSLT}
              content={replacedEinvoice.EinvoiceTemplate}
            >
              E-Fatura İndir
            </DownloadTemplate>
          </Button>
        </Col>
        <Col style={{ textAlign: "left", paddingLeft: 10 }} span={13}>
          <Button
            disabled={
              props.state.signature.signatureBase64 === undefined ? true : false
            }
            type="primary"
          >
            <DownloadTemplate
              file={Product.EARCHIVE + Extention.XSLT}
              content={replacedEarchive.EarchiveTemplate}
            >
              E-Arşiv Fatura İndir
            </DownloadTemplate>
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <Skeleton
      active
      loading={replacedHtml.HtmlTemplate !== "" ? false : true}
      paragraph={{ rows: 40 }}
    >
      {SelectedProduct()}
      <Row>
        <Col span={24} style={{ textAlign: "center", minHeight: 800 }}>
          <iframe
            title={Date.now.toString()}
            frameBorder={0}
            width="55%"
            height="100%"
            scrolling="yes"
            seamless
            srcDoc={replacedHtml.HtmlTemplate}
          />
        </Col>
      </Row>
    </Skeleton>
  );
};

const mapStateToProps = (state: any) => ({
  state: state,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateLocationInfo: (params: LocationModel) =>
    dispatch(updateLocationInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePreview);
