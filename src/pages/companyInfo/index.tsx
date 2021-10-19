import {
  faArchway,
  faBuilding,
  faCity,
  faDoorOpen,
  faEnvelope,
  faFax,
  faGlobeEurope,
  faListOl,
  faMailBulk,
  faMapMarkerAlt,
  faPhoneVolume,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Alert, Button, Col, Form, Input, Row, Select } from "antd";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { countryOption } from "../../common/countryOption";
import { CompanyInfoModel, LocationModel } from "../../common/models";
import { updateCompanyInfo } from "./actions";
import { updateLocationInfo } from "../layout/actions";
import { useHistory } from "react-router-dom";
import { CompanyInfoStateType } from "./types";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IPropsFromDispatch {
  updateCompanyInfo: typeof updateCompanyInfo;
  updateLocationInfo: typeof updateLocationInfo;
  companyInfo: CompanyInfoModel;
}

const CompanyInfo = (props: IPropsFromDispatch) => {
  const [form] = Form.useForm();
  let history = useHistory();

  const initialValues = () => {
    return {
      name: props.companyInfo?.name,
      registerNumber: props.companyInfo?.registerNumber,
      taxOffice: props.companyInfo?.taxOffice,
      tradeRegistryNumber: props.companyInfo?.tradeRegistryNumber,
      mersisNumber: props.companyInfo?.mersisNumber,
      phone: props.companyInfo?.phone,
      fax: props.companyInfo?.fax,
      address: props.companyInfo?.address,
      district: props.companyInfo?.district,
      city: props.companyInfo?.city,
      country: props.companyInfo?.country,
      postalCode: props.companyInfo?.postalCode,
      buildingNumber: props.companyInfo?.buildingNumber,
      doorNumber: props.companyInfo?.doorNumber,
      mail: props.companyInfo?.mail,
      webSite: props.companyInfo?.webSite,
    };
  };

  useEffect(() => {
    props.companyInfo !== undefined && form.setFieldsValue(initialValues());
  }, []);

  const next = () => {
    form.validateFields().then((x) => {
      const values: CompanyInfoModel = form.getFieldsValue();

      console.log(`values`, values);
      props.updateCompanyInfo(values);
      props.updateLocationInfo({
        selectedKeys: "3",
        disabledPage: {
          theme: true,
          companyinfo: true,
          logo: false,
          signature: true,
          bankinfo: true,
          notes: true,
        },
      });
      history.push("/logo");
    });
  };

  const back = () => {
    props.updateLocationInfo({
      selectedKeys: "1",
      disabledPage: {
        theme: false,
        companyinfo: true,
        logo: true,
        signature: true,
        bankinfo: true,
        notes: true,
      },
    });
    history.push("/theme");
  };

  return (
    <div>
      <div style={{ marginTop: 10 }}>
        <Button type="primary" danger onClick={back}>
          Geri
        </Button>{" "}
        <Button type="primary" onClick={next}>
          İleri
        </Button>
      </div>
      <Form form={form} style={{ marginTop: 10 }}>
        <Row>
          <Col style={{ marginBottom: 10, textAlign: "center" }}>
            <Alert
              message="Bilgilendirme"
              description="Buradan gireceğiniz firma bilgileri görselde görmeniz için temsilidir. Asıl firma bilgileriniz hesap açılışınız yapıldığında girilen firma bilgileriniz tasarımınızda görünecektir."
              type="warning"
              showIcon
            />
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ paddingRight: 10 }}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Burası Girilmesi Zorunlu Alandır!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={
                  <FontAwesomeIcon
                    style={{ color: "#ced4da" }}
                    icon={faUserPlus}
                  />
                }
                placeholder="Firma Ünvan"
              />
            </Form.Item>
            <Row>
              <Col style={{ paddingRight: 5 }} span={12}>
                <Form.Item
                  name="registerNumber"
                  rules={[
                    {
                      min: 10,
                      max: 11,
                      required: true,
                      message:
                        "TCKN / VKN Alanı En Az 10 En Çok 11 Haneli olmalıdır!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faListOl}
                      />
                    }
                    placeholder="Firma VKN"
                  />
                </Form.Item>
              </Col>
              <Col style={{ paddingLeft: 5 }} span={12}>
                <Form.Item
                  name="taxOffice"
                  rules={[{ required: false }]}
                  hasFeedback
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faBuilding}
                      />
                    }
                    placeholder="Vergi Dairesi"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingRight: 5 }} span={12}>
                <Form.Item
                  name="tradeRegistryNumber"
                  rules={[{ required: false }]}
                  hasFeedback
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faListOl}
                      />
                    }
                    placeholder="Ticaret Sicil No"
                  />
                </Form.Item>
              </Col>
              <Col style={{ paddingLeft: 5 }} span={12}>
                <Form.Item
                  name="mersisNumber"
                  rules={[{ required: false }]}
                  hasFeedback
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faListOl}
                      />
                    }
                    placeholder="Mersis No"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingRight: 5 }} span={12}>
                <Form.Item
                  name="phone"
                  rules={[{ required: false }]}
                  hasFeedback
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faPhoneVolume}
                      />
                    }
                    placeholder="Telefon"
                  />
                </Form.Item>
              </Col>
              <Col style={{ paddingLeft: 5 }} span={12}>
                <Form.Item name="fax" rules={[{ required: false }]} hasFeedback>
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faFax}
                      />
                    }
                    placeholder="Fax"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={12} style={{ paddingLeft: 10 }}>
            <Form.Item name="address" rules={[{ required: false }]} hasFeedback>
              <Input
                prefix={
                  <FontAwesomeIcon
                    style={{ color: "#ced4da" }}
                    icon={faMapMarkerAlt}
                  />
                }
                placeholder="Adres"
              />
            </Form.Item>
            <Row>
              <Col style={{ paddingRight: 5 }} span={8}>
                <Form.Item
                  name="district"
                  rules={[
                    {
                      required: true,
                      message: "Burası Girilmesi Zorunlu Alandır!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faArchway}
                      />
                    }
                    placeholder="Mahalle/Semt/İlçe"
                  />
                </Form.Item>
              </Col>
              <Col style={{ paddingRight: 5, paddingLeft: 5 }} span={8}>
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Burası Girilmesi Zorunlu Alandır!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faCity}
                      />
                    }
                    placeholder="Şehir"
                  />
                </Form.Item>
              </Col>
              <Col style={{ paddingLeft: 5 }} span={8}>
                <Form.Item
                  name="country"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Ülke Girilmesi Zorunludur!",
                    },
                  ]}
                >
                  <Select
                    suffixIcon={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faGlobeEurope}
                      />
                    }
                    placeholder="Ülke"
                    style={{ width: "100%" }}
                  >
                    {countryOption.map((option) => (
                      <Select.Option key={option.key} value={option.value}>
                        {option.value}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingRight: 5 }} span={8}>
                <Form.Item
                  name="postalCode"
                  hasFeedback
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faMailBulk}
                      />
                    }
                    placeholder="Posta Kodu"
                  />
                </Form.Item>
              </Col>
              <Col style={{ paddingLeft: 5, paddingRight: 5 }} span={8}>
                <Form.Item
                  name="buildingNumber"
                  hasFeedback
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faBuilding}
                      />
                    }
                    placeholder="Bina No"
                  />
                </Form.Item>
              </Col>
              <Col style={{ paddingLeft: 5 }} span={8}>
                <Form.Item
                  name="doorNumber"
                  hasFeedback
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faDoorOpen}
                      />
                    }
                    placeholder="Kapı No"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  hasFeedback
                  name="mail"
                  rules={[
                    {
                      required: false,
                      type: "email",
                      message: "E-Mail adresi '@' İşareti içermelidir!",
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <FontAwesomeIcon
                        style={{ color: "#ced4da" }}
                        icon={faEnvelope}
                      />
                    }
                    placeholder="Mail Adresi"
                  />
                </Form.Item>
              </Col>
              <Col style={{ paddingLeft: 5 }} span={12}>
                <Form.Item
                  hasFeedback
                  name="webSite"
                  initialValue=""
                  rules={[{ required: false }]}
                >
                  <Input placeholder="İnternet Sitesi" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ companyInfo }: CompanyInfoStateType) => ({
  companyInfo: companyInfo.info,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCompanyInfo: (params: CompanyInfoModel) =>
    dispatch(updateCompanyInfo(params)),
  updateLocationInfo: (params: LocationModel) =>
    dispatch(updateLocationInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);
