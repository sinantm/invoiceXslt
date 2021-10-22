import { Button, Col, Row } from "antd";

interface IProps {
  next: () => void;
  back: () => void;
}

const NextOrBack = (props: IProps) => {
  return (
    <Row>
      <Col span={24} style={{ marginBottom: 10, marginTop: 10 }}>
        <Button type="primary" danger onClick={props.back}>
          Geri Dön
        </Button>{" "}
        <Button type="primary" onClick={props.next}>
          Devam Et
        </Button>
      </Col>
    </Row>
  );
};

export default NextOrBack;
