import { Button } from "antd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TemplateModel } from "../../common/models";
import { setSelectedTemplate } from "./actions";

interface IPropsFromDispatch {
  setSelectedTemplate: typeof setSelectedTemplate;
}

const Theme = (props: IPropsFromDispatch) => {
  const bas = () => {
    props.setSelectedTemplate({
      HtmlTemplate: "Template1",
      EinvoiceTemplate: "Tepmlate",
      EarchiveTemplate: "Deneme",
    });
  };

  return (
    <div>
      Theme <Button onClick={bas}>BAS</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedTemplate: (params: TemplateModel) =>
    dispatch(setSelectedTemplate(params)),
});

export default connect(null, mapDispatchToProps)(Theme);
