import { Col, Flex, Image, Row } from "antd";
import Title from "antd/es/typography/Title";
import { Component } from "react";
import { dataType } from ".";
type DocumentExportPDFProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.MutableRefObject<any>;
  data: dataType[];
  className?: string;
};
export default class DocumentExportPDF extends Component<DocumentExportPDFProps> {
  render() {
    console.log(this.props.data);
    return (
      <div
        style={{ padding: "24px" }}
        id="pdf"
        className={this.props.className ?? ""}
      >
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
          <Flex style={{ marginBottom: "-6px" }} align="end">
            <Title
              style={{
                border: "1px solid #ccc",
                padding: "4px 6px",
              }}
              level={3}
            >
              Log No.
            </Title>
            <Title
              style={{ border: "1px solid #ccc", padding: "4px 6px" }}
              level={3}
            >
              17
            </Title>
          </Flex>
        </Flex>
        <div style={{ border: "1px solid #ccc" }}>
          <Row align={"middle"}>
            <Col
              span={3}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Project
            </Col>
            <Col
              span={15}
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
              span={3}
              style={{ padding: "6px 12px", border: "1px solid #ccc" }}
            >
              Pile No.
            </Col>
            <Col
              span={7}
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
          <Row className="mt-[1px] w-full">
            <Col
              span={10}
              className="px-[12px] py-[6px] border-[1px] border-solid border-[#ccc]"
            ></Col>

            <Col
              span={3}
              className="px-[12px] py-[6px] border-[1px] border-solid border-[#ccc]"
            >
              Depth (m)
            </Col>
            <Col
              span={11}
              className="px-[12px] py-[6px] border-[1px] border-solid border-[#ccc] text-center"
            >
              Description
            </Col>
          </Row>
          <Row className="mt-[1px]">
            <Col
              span={10}
              className="px-[12px] py-[6px] border-[1px] border-solid border-[#ccc] h-[800px]"
            ></Col>
            <Col
              span={3}
              className="px-[12px] py-[6px] border-[1px] border-solid border-[#ccc]"
            ></Col>

            <Col span={11} className=" border-[1px] border-solid border-[#ccc]">
              {this.props.data.length
                ? this.props.data.map((item, index, array) => {
                    const deepest = array[array.length - 1].depth;
                    const deep =
                      index > 0
                        ? array[index].depth - array[index - 1].depth
                        : array[index].depth;
                    const heightPercent = (deep * 100) / deepest;
                    const isLastItem = index === array.length - 1;
                    const isFirstItem = index === 0;
                    return (
                      <div
                        key={index}
                        className={`w-full ${
                          isLastItem ? "border-b-0" : "border-b-2"
                        }  border-solid border-[#ccc] relative`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        <Title
                          level={2}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {item.description}
                        </Title>
                        <Title
                          level={3}
                          className={`absolute ${
                            isLastItem ? "bottom-0" : isFirstItem ? "top-0" : ""
                          } left-[50%] translate-x-[-50%]`}
                          style={{ margin: "0", fontWeight: "600" }}
                        >
                          {isLastItem
                            ? "End of BoreHole"
                            : isFirstItem
                            ? "Top of Borehole"
                            : ""}
                        </Title>
                        <div
                          className={`absolute left-[-40px] bottom-[-2px] w-[40px] ${
                            isLastItem ? "h-0" : "h-[2px]"
                          } bg-[#ccc]`}
                        >
                          <div className="absolute top-[-10px] right-2 text-[10px] text-nowrap ">
                            {item.depth} m
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
