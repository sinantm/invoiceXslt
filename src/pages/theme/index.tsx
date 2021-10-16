import { List, Row } from "antd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TemplateModel } from "../../common/models";
import { setSelectedTemplate } from "./actions";
import ThemeList from "../../themeList.json";
import ThemeCard from "../../components/ThemeCard";

interface IPropsFromDispatch {
  setSelectedTemplate: typeof setSelectedTemplate;
}

function readTextFile(path: string) {
  var allText = "";
  var rawFile = new XMLHttpRequest();
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

const Theme = (props: IPropsFromDispatch) => {
  const onSelectedInvoice = (path: string) => {
    var htmlPath = path + "default.html";
    var textHtml = readTextFile(htmlPath);

    var xsltEinvoicePath = path + "einvoice.xslt";
    var textXsltEinvoice = readTextFile(xsltEinvoicePath);

    var xsltEarchivePath = path + "earchive.xslt";
    var textXsltEarchive = readTextFile(xsltEarchivePath);

    props.setSelectedTemplate({
      HtmlTemplate: textHtml,
      EinvoiceTemplate: textXsltEinvoice,
      EarchiveTemplate: textXsltEarchive,
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
                onClick={onSelectedInvoice(item.path)}
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
});

export default connect(null, mapDispatchToProps)(Theme);
