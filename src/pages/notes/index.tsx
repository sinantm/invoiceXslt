import { Alert, Button, Col, Form, Input, Row } from "antd";
import "antd/lib/timeline/style/index.css";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { DocumentNotesModel, LocationModel } from "../../common/models";
import NextOrBack from "../../components/NextOrBack";
import { updateLocationInfo } from "../layout/actions";
import { addDocumentNotes } from "./actions";
import { NotesStateType } from "./types";

interface IProps {
  addDocumentNotes: typeof addDocumentNotes;
  updateLocationInfo: typeof updateLocationInfo;
  notes: DocumentNotesModel;
}

const { TextArea } = Input;

const Notes = (props: IProps) => {
  const [form] = Form.useForm();
  let history = useHistory();

  const next = () => {
    form.validateFields().then((x) => {
      const values: DocumentNotesModel = form.getFieldsValue();

      props.addDocumentNotes(values);
    });

    props.updateLocationInfo({
      selectedKeys: "7",
      disabledPage: {
        theme: true,
        companyinfo: true,
        logo: true,
        signature: true,
        bankinfo: true,
        notes: true,
        invoicepreview: false,
      },
    });

    history.push("/invoicepreview");
  };

  const back = () => {
    props.updateLocationInfo({
      selectedKeys: "5",
      disabledPage: {
        theme: true,
        companyinfo: true,
        logo: true,
        signature: true,
        bankinfo: false,
        notes: true,
        invoicepreview: true,
      },
    });
    history.push("/bankinfo");
  };

  return (
    <React.Fragment>
      <NextOrBack next={next} back={back} />
      <Row>
        <Col span={24} style={{ marginBottom: 10, marginTop: 10 }}>
          <Alert
            message="Bilgilendirme"
            description="Not alanlarına gireceğiniz bilgiler Tasarımınıza sabitlenir. Tüm fatura ve makbuzlarınızda görünür."
            type="warning"
            showIcon
            style={{ marginBottom: 10 }}
          />
          <Form form={form}>
            <Form.Item
              name={"firstNote"}
              rules={[{ required: false }]}
              hasFeedback
              label="1.Not Alanı"
            >
              <TextArea
                placeholder="İlk Notunuzu Buraya Yazabilirsiniz"
                style={{ height: 50 }}
              />
            </Form.Item>
            <Form.Item
              name={"secondNote"}
              rules={[{ required: false }]}
              hasFeedback
              label="2.Not Alanı"
            >
              <TextArea
                placeholder="İkinci Notunuzu Buraya Yazabilirsiniz"
                className="custom"
                style={{ height: 50 }}
              />
            </Form.Item>
            <Form.Item
              name={"thirdNote"}
              rules={[{ required: false }]}
              hasFeedback
              label="3.Not Alanı"
            >
              <TextArea
                placeholder="Üçüncü Notunuzu Buraya Yazabilirsiniz"
                className="custom"
                style={{ height: 50 }}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

const mapStateToProps = ({ documentNotes }: NotesStateType) => ({
  notes: documentNotes.notes,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addDocumentNotes: (params: DocumentNotesModel) =>
    dispatch(addDocumentNotes(params)),
  updateLocationInfo: (params: LocationModel) =>
    dispatch(updateLocationInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
