import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Table,
} from "antd";
import "antd/lib/timeline/style/index.css";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { BankInfoModel } from "../../common/models";
import { deleteBankInfo, updateBankInfo } from "./actions";
import Arabia from "./CountryLogo/arabia.png";
import Canada from "./CountryLogo/canada.png";
import China from "./CountryLogo/china.png";
import England from "./CountryLogo/england.png";
import Euro from "./CountryLogo/euro.png";
import India from "./CountryLogo/india.png";
import Japan from "./CountryLogo/japan.png";
import Russia from "./CountryLogo/russia.png";
import Switzerland from "./CountryLogo/switzerland.jpg";
import Turkey from "./CountryLogo/turkey.png";
import Uae from "./CountryLogo/uae.jpg";
import UnitedStates from "./CountryLogo/unitedStates.png";
import { BankInfoStateType } from "./types";

interface IProps {
  list: Array<BankInfoModel>;
}

interface IPropsFromDispatch {
  updateBankInfo: typeof updateBankInfo;
  deleteBankInfo: typeof deleteBankInfo;
}

type AllProps = IProps & IPropsFromDispatch;

const { Option } = Select;

const BankInfo = (props: AllProps) => {
  const [form] = Form.useForm();

  const dataList = [
    {
      key: "operasyon",
      render: (text: any, record: BankInfoModel) => (
        <Popconfirm
          title="Seçili Kayıt Silinecek?"
          onConfirm={() => props.deleteBankInfo(record)}
        >
          {" "}
          <span style={{ cursor: "pointer" }}>Sil</span>
        </Popconfirm>
      ),
    },
    {
      key: "bankName",
      title: "Banka Adı",
      dataIndex: "bankName",
    },
    {
      title: "Şube",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "Şube Kodu",
      dataIndex: "branchCode",
      key: "branchCode",
    },
    {
      title: "Hesap No",
      dataIndex: "accountCode",
      key: "accountCode",
    },
    {
      title: "Hesap Türü",
      dataIndex: "accountType",
      key: "accountType",
      width: 30,
    },
    {
      title: "Iban",
      dataIndex: "iban",
      key: "iban",
    },
    {
      title: "Hesap Adı",
      dataIndex: "accountName",
      key: "accountName",
      width: 200,
    },
  ];

  const addBankInfo = () => {
    form.validateFields().then((x) => {
      const values: BankInfoModel = form.getFieldsValue();

      console.log(`values`, values);
      props.updateBankInfo(values);
    });
  };

  return (
    <React.Fragment>
      <Form form={form} className="login-form">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="bankName"
              initialValue=""
              rules={[
                { required: true, message: "Banka Adı Zorunlu Alandır!" },
              ]}
              hasFeedback
            >
              <Input prefix={"icon"} placeholder="Banka Adı" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="branch"
              initialValue=""
              rules={[{ required: false }]}
              hasFeedback
            >
              <Input prefix={"icon"} placeholder="Şube" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="branchCode"
              initialValue=""
              rules={[{ required: false }]}
              hasFeedback
            >
              <Input prefix={"icon"} placeholder="Şube Kodu" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="accountCode"
              initialValue=""
              rules={[{ required: false }]}
              hasFeedback
            >
              <Input prefix={"icon"} placeholder="Hesap No" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="accountType"
              initialValue="TL"
              rules={[{ required: false }]}
              hasFeedback
            >
              <Select
                showSearch
                placeholder="Hesap Türü"
                optionFilterProp="children"
              >
                <Option value="TL">
                  <Avatar shape="square" size={20} src={Turkey} /> TL - Türk
                  Lirası
                </Option>
                <Option value="USD">
                  <Avatar shape="square" size={20} src={UnitedStates} /> USD -
                  Amerikan Doları
                </Option>
                <Option value="EUR">
                  <Avatar shape="square" size={20} src={Euro} /> EUR - Euro
                </Option>
                <Option value="GBP">
                  <Avatar shape="square" size={20} src={England} /> GBP -
                  İngiliz Sterlini
                </Option>
                <Option value="CHF">
                  <Avatar shape="square" size={20} src={Switzerland} /> CHF -
                  İsviçre Frangı
                </Option>
                <Option value="CAD">
                  <Avatar shape="square" size={20} src={Canada} /> CAD - Kanada
                  Doları
                </Option>
                <Option value="RUB">
                  <Avatar shape="square" size={20} src={Russia} /> RUB - Rus
                  Rublesi
                </Option>
                <Option value="JPY">
                  <Avatar shape="square" size={20} src={Japan} /> JPY - 100
                  Japon Yeni
                </Option>
                <Option value="SAR">
                  <Avatar shape="square" size={20} src={Arabia} /> SAR - S.
                  Arabistan Riyali
                </Option>
                <Option value="INR">
                  <Avatar shape="square" size={20} src={India} /> INR -
                  Hindistan Rupisi
                </Option>
                <Option value="CNY">
                  <Avatar shape="square" size={20} src={China} /> CNY - Çin
                  Yuanı
                </Option>
                <Option value="AED">
                  <Avatar shape="square" size={20} src={Uae} /> AED - B.A.E.
                  Dirhemi
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="iban"
              initialValue=""
              rules={[
                { required: true, message: "IBAN Girilmesi zorunludur!" },
              ]}
              hasFeedback
            >
              <Input prefix={"icon"} placeholder="IBAN" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="accountName"
              initialValue=""
              rules={[{ required: false }]}
              hasFeedback
            >
              <Input prefix={"icon"} placeholder="Hesap Adı" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={addBankInfo}
          >
            Ekle
          </Button>
        </Form.Item>
      </Form>
      <Table columns={dataList} pagination={false} dataSource={props.list} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ bankInfo }: BankInfoStateType) => ({
  list: bankInfo.list,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateBankInfo: (params: BankInfoModel) => dispatch(updateBankInfo(params)),
  deleteBankInfo: (params: BankInfoModel) => dispatch(deleteBankInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankInfo);
