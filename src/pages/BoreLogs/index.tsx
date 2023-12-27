import { Button, Col, Flex, Image, Row } from "antd";
import Title from "antd/es/typography/Title";
import { FunctionComponent, useEffect } from "react";
import { jsPDF } from "jspdf";

interface BoreLogProps {}

const BoreLog: FunctionComponent<BoreLogProps> = () => {
  const generatePDF = () => {
    const report = new jsPDF("portrait", "pt", "a4");
    report
      .html(document.querySelector("#pdf")!, {
        printOptions: {
          pageSize: "A4",
          printBackground: true,
          width: 1000,
        },
      })
      .then(() => {
        report.save("report.pdf");
      });
  };

  return (
    <div style={{ background: "#fff" }}>
      <Button
        type="primary"
        onClick={generatePDF}
        style={{ margin: "8px 16px" }}
      >
        Export
      </Button>
      <div style={{ padding: "24px" }} id="pdf">
        <Flex justify="space-between" align="end">
          <Image
            src="https://lh3.googleusercontent.com/YTlEF8ieGq-1pj1cVtPQ_27sLYinnXMNY0ju1A2YxIp1WuA3-rkYtSxm7KCfNFTll_xrkzrMP2ZhQhv99hh2L08Q1CcSr8QQBDU=s0"
            preview={false}
            width={160}
            height={70}
          ></Image>
          <Flex vertical>
            <Title level={3} style={{ textAlign: "center" }}>
              SHINEI GEOTECHNIQUE (M)SDN. BHD
            </Title>
            <Title level={3} style={{ textAlign: "center" }}>
              MICROPILE BORELOG
            </Title>
          </Flex>
          <Flex style={{ marginBottom: "-6px" }}>
            <span style={{ border: "1px solid #ccc", padding: "4px 6px" }}>
              Log No.
            </span>
            <span style={{ border: "1px solid #ccc", padding: "4px 6px" }}>
              17
            </span>
          </Flex>
        </Flex>
        <div style={{ border: "1px solid #ccc", marginTop: "10px" }}>
          <Row align={"middle"}>
            <Col
              span={2}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Project
            </Col>
            <Col
              span={16}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Proposed Slope Remediation for Monoluxury Sdn Bhd Cameron
            </Col>
            <Col
              span={3}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Date
            </Col>
            <Col
              span={3}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              26/05/22
            </Col>
          </Row>
          <Row>
            <Col
              span={2}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Pile No.
            </Col>
            <Col
              span={8}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            ></Col>
            <Col
              span={3}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Pile Dia.
            </Col>
            <Col
              span={5}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              200 mm
            </Col>
            <Col
              span={3}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Rake
            </Col>
            <Col
              span={3}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Vertical
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BoreLog;
