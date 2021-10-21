import { faCrop, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Upload, Row, Col } from "antd";
import Slider from "antd/lib/slider";
import "cropperjs/dist/cropper.css";
import React, { useState } from "react";
import ReactCropper from "react-cropper";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { LocationModel, LogoModel } from "../../common/models";
import Toastifys from "../../components/Toastify";
import { updateLocationInfo } from "../layout/actions";
import { logoOnCrop } from "./actions";
import "./style.css";
import { LogoStateType } from "./types";

interface IProps {
  logoOnCrop: typeof logoOnCrop;
  updateLocationInfo: typeof updateLocationInfo;
  croped: LogoModel;
}

const LogoCropper = (props: IProps) => {
  const [stateSrc, setStateSrc] = useState<any>(undefined);
  const [stateCrop, setStateCrop] = useState<any>("");
  const [stateRefresh, setStateRefresf] = useState<any>(false);

  let history = useHistory();

  const cropper = React.useRef<any>();
  const preview = React.useRef<HTMLDivElement>(null);

  const cropImage = () => {
    setStateCrop(
      cropper
        .current!.getCroppedCanvas({
          width: preview.current!.offsetWidth,
          height: preview.current!.offsetHeight,
        })
        .toDataURL()
    );

    if (cropper.current !== null) {
      props.logoOnCrop(
        cropper
          .current!.getCroppedCanvas({
            width: preview.current!.offsetWidth,
            height: preview.current!.offsetHeight,
          })
          .toDataURL()
      );
    }
  };

  const next = () => {
    props.updateLocationInfo({
      selectedKeys: "4",
      disabledPage: {
        theme: true,
        companyinfo: true,
        logo: true,
        signature: false,
        bankinfo: true,
        notes: true,
        invoicepreview: true,
      },
    });

    history.push("/signature");

    Toastifys({
      title: `Logo Başarı İle Eklendi.`,
      type: "info",
      position: "top-right",
    });
  };

  const back = () => {
    props.updateLocationInfo({
      selectedKeys: "2",
      disabledPage: {
        theme: true,
        companyinfo: false,
        logo: true,
        signature: true,
        bankinfo: true,
        notes: true,
        invoicepreview: true,
      },
    });
    history.push("/companyinfo");
  };

  return (
    <div style={{ marginTop: 10 }}>
      {props.croped.logoBase64 && (
        <Row>
          <Col span={24} style={{ marginBottom: 10 }}>
            <Button type="primary" danger onClick={back}>
              Geri Dön
            </Button>{" "}
            <Button type="primary" onClick={next}>
              Devam Et
            </Button>
          </Col>
          <Col span={24}>
            <Alert
              style={{ marginBottom: "10px" }}
              message="Logonuzu Kırparak Seçtiniz. Yeniden Seçmek İsterseniz 'Dosya Seç' Butonuna Tıklayarak Seçebilirsiniz."
              type="warning"
              showIcon
            />
          </Col>
        </Row>
      )}
      {(stateRefresh === true ||
        (stateSrc !== undefined && props.croped.logoBase64 === undefined)) && (
        <div>
          <Row>
            <Col span={18}>
              <ReactCropper
                ref={cropper}
                style={{
                  height: 250,
                  width: "100%",
                  marginBottom: "10px",
                }}
                aspectRatio={NaN}
                background={false}
                preview=".img-preview"
                guides={false}
                src={stateSrc}
              />
              <span>Döndürme</span>
              <Slider
                className={"no-track"}
                onChange={(value: any) => cropper.current.rotate(value)}
                defaultValue={0}
                tooltipPlacement="bottom"
                min={-180}
                max={180}
              />
            </Col>
            <Col span={6} style={{ paddingLeft: 20 }}>
              <div style={{ textAlign: "left", marginBottom: 10 }}>
                <Button onClick={cropImage} block type="primary">
                  <FontAwesomeIcon style={{ color: "#ced4da" }} icon={faCrop} />{" "}
                  Kırp
                </Button>
              </div>
              <div style={{ textAlign: "center", marginBottom: 10 }}>
                <strong>Önizleme</strong>
              </div>
              <div
                ref={preview}
                className="img-preview"
                style={{ width: 215, height: 150 }}
              />
            </Col>
          </Row>

          {stateCrop !== "" && (
            <Row>
              <Col span={24}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <h2>Kırpılmış olan logo</h2>

                  <img width="200" src={stateCrop} alt="Logo" />
                </div>
              </Col>
            </Row>
          )}

          <Alert
            style={{ marginBottom: "10px" }}
            message="Yukarıdaki döndürme alanını kullanarak resimi çevirebilirsiniz."
            type="info"
            showIcon
          />

          <Alert
            style={{ marginBottom: "10px" }}
            message="Mouse sürükle bırak yöntemi ile logo kapsayacak şekilde seçim yapabilirsiniz."
            type="info"
            showIcon
          />
          <Alert
            style={{ marginBottom: "10px" }}
            message="Mouse tekerleği ile resim üzerinden yakılaştırma/uzaklaştırma yapabilirsiniz. "
            type="info"
            showIcon
          />

          <Alert
            style={{ marginBottom: "10px" }}
            message="Mavi kutunun resmi tam olarak kapladığından emin olunuz. Kenarlarda boşluk kalması evrak üzerinde logonun daha uzak görünmesine sebep olacaktır."
            type="warning"
            showIcon
          />

          <Alert
            style={{ marginBottom: "10px" }}
            message="Lütfen beyaz renkli bir logo yüklemeyiniz. "
            type="error"
            showIcon
          />
        </div>
      )}

      {stateSrc === undefined && props.croped.logoBase64 === undefined && (
        <React.Fragment>
          <Alert
            style={{ marginBottom: "10px" }}
            message="Logo seçiniz"
            description="Fatura tasarımlarınızda görünmesini istediğiniz logoyu seçebilirsiniz."
            type="info"
            showIcon
          />
        </React.Fragment>
      )}

      <Upload
        onChange={(info) => {
          const reader = new FileReader();
          reader.onload = () => {
            setStateSrc(reader.result);
            setStateRefresf(true);
          };
          reader.readAsDataURL(
            info.fileList.filter((x) => x.uid === info.file.uid)[0]
              .originFileObj!
          );
        }}
        showUploadList={false}
        defaultFileList={stateSrc}
      >
        <Button type="primary" style={{ width: "100%" }}>
          <FontAwesomeIcon style={{ color: "#ced4da" }} icon={faUpload} /> Dosya
          Seç
        </Button>
      </Upload>
    </div>
  );
};

const mapStateToProps = ({ logo }: LogoStateType) => ({
  croped: logo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logoOnCrop: (params: string) => dispatch(logoOnCrop(params)),
  updateLocationInfo: (params: LocationModel) =>
    dispatch(updateLocationInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoCropper);
