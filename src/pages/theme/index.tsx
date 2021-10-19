import { List, Row } from "antd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LocationModel, TemplateModel } from "../../common/models";
import { setSelectedTemplate } from "./actions";
import ThemeList from "../../themeList.json";
import ThemeCard from "../../components/ThemeCard";
import Toastifys from "../../components/Toastify";
import { updateLocationInfo } from "../layout/actions";
import { useHistory } from "react-router-dom";

interface IProps {
  setSelectedTemplate: typeof setSelectedTemplate;
  updateLocationInfo: typeof updateLocationInfo;
}

function readTextFile(path: string) {
  let allText = "";
  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", path, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return allText;
}

const Theme = (props: IProps) => {
  let history = useHistory();

  const onSelectedInvoice = (path: string) => {
    const htmlPath = path + "default.html";
    const textHtml = readTextFile(htmlPath);

    const xsltEinvoicePath = path + "einvoice.xslt";
    const textXsltEinvoice = readTextFile(xsltEinvoicePath);

    const xsltEarchivePath = path + "earchive.xslt";
    const textXsltEarchive = readTextFile(xsltEarchivePath);

    props.setSelectedTemplate({
      HtmlTemplate: textHtml,
      EinvoiceTemplate: textXsltEinvoice,
      EarchiveTemplate: textXsltEarchive,
    });

    props.updateLocationInfo({
      selectedKeys: "2",
      disabledPage: {
        theme: true,
        companyinfo: false,
        logo: true,
        signature: true,
        bankinfo: true,
        notes: true,
      },
    });
    history.push("/companyinfo");

    Toastifys({
      title: `Tema Başarı İle Seçildi.`,
      type: "info",
      position: "top-right",
    });
  };

  return (
    <div className="gutter-example">
      <Row gutter={16} style={{ marginBottom: 20, marginTop: 20 }}>
        <List
          grid={{ gutter: 5, column: 3 }}
          dataSource={ThemeList}
          renderItem={(item) => (
            <List.Item>
              <ThemeCard
                type={item.type}
                image={item.path + "default.jpg"}
                title={item.title}
                onClick={() => onSelectedInvoice(item.path)}
              />
            </List.Item>
          )}
        />
      </Row>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedTemplate: (params: TemplateModel) =>
    dispatch(setSelectedTemplate(params)),
  updateLocationInfo: (params: LocationModel) =>
    dispatch(updateLocationInfo(params)),
});

export default connect(null, mapDispatchToProps)(Theme);
