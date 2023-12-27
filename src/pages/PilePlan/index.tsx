/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Flex, Form, Input, Row, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import { FunctionComponent, useEffect, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { pilePlansRemainingSelector } from "../../redux/selector";
import { IconChevronDown, IconChevronLeft } from "@tabler/icons-react";
import { editPilePlantFilter } from "../../redux/pileplansSlice";

interface PilePlanPageProps {}
interface DataType {
  key: string;
  projectId: string;
  pileId: string;
  pile_location: string;
  pile_status: string;
  pile_diameter: string;
  pile_raked: string;
}
type FieldType = {
  pileId: string;
  pile_location: string;
  pile_status: string;
  pile_diameter: string;
  pile_raked: string;
};
const columns: ColumnsType<DataType> | null = [
  {
    title: "Project No.",
    dataIndex: "projectId",
    sortDirections: ["descend"],
  },
  {
    title: "Pile No.",
    dataIndex: "pileId",
  },
  {
    title: "Pile Location",
    dataIndex: "pile_location",
  },
  {
    title: "Status",
    dataIndex: "pile_status",
  },
  {
    title: "Diameter",
    dataIndex: "pile_diameter",
  },
  {
    title: "Raked",
    dataIndex: "pile_raked",
  },
];
const PilePlanPage: FunctionComponent<PilePlanPageProps> = () => {
  const params = useParams();
  const pilePlans = useAppSelector(pilePlansRemainingSelector).filter(
    (pilePlan) => pilePlan.projectId === params.projectId
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!pilePlans) {
      navigate("/");
    }
  }, [pilePlans]);
  const [searchParams, setSearchParams] = useSearchParams();
  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleToggleShowSearchBox = () => {
    if (refDiv.current) {
      refDiv.current.classList.toggle("h-60");
    }
  };
  const onFinish = async (values: FieldType) => {
    setSearchParams(values);
    console.log(values);
    dispatch(editPilePlantFilter(values));
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    dispatch(
      editPilePlantFilter({
        pileId: searchParams.get("pileId") ?? "",
        pile_location: searchParams.get("pile_location") ?? "",
        pile_diameter: searchParams.get("pile_diameter") ?? "",
        pile_raked: searchParams.get("pile_raked") ?? "",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        overflow: "auto",
        width: "100%",
        background: "#fff",
        padding: "24px 36px",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        borderRadius: "6px",
        paddingBottom: "48px",
      }}
    >
      <div
        style={{
          transition: "height",
          transitionDuration: "500ms",
          transitionTimingFunction: "ease-in-out",
          height: "40px",
          overflow: "hidden",
        }}
        ref={refDiv}
      >
        <Title
          level={3}
          onClick={handleToggleShowSearchBox}
          style={{
            padding: "16px",
            outline: "none",
            fontWeight: "600",
            cursor: "pointer",
            userSelect: "none",
            margin: "0",
          }}
        >
          <Flex align="center">
            <IconChevronDown
              width={20}
              height={20}
              className="mr-2"
            ></IconChevronDown>
            Thông tin tìm kiếm
          </Flex>
        </Title>
        <div className={`w-3/4 mx-auto mb-4`}>
          <Form
            initialValues={{
              pileId: searchParams.get("pileId") ?? "",
              pile_location: searchParams.get("pile_location") ?? "",
              pile_diameter: searchParams.get("pile_diameter") ?? "",
              pile_raked: searchParams.get("pile_raked") ?? "",
            }}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Space>
                  <Form.Item<FieldType>
                    label={
                      <Title
                        level={3}
                        style={{
                          width: "112px",
                          margin: "0",
                        }}
                      >
                        Pile Id
                      </Title>
                    }
                    name="pileId"
                  >
                    <Input placeholder="Nhập PileId"></Input>
                  </Form.Item>
                </Space>
              </Col>
              <Col span={12}>
                <Space>
                  <Form.Item<FieldType>
                    label={
                      <Title
                        level={3}
                        style={{
                          width: "112px",
                          margin: "0",
                        }}
                      >
                        Pile Location
                      </Title>
                    }
                    name="pile_location"
                  >
                    <Input placeholder="Nhập Pile Location"></Input>
                  </Form.Item>
                </Space>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Space>
                  <Form.Item<FieldType>
                    label={
                      <Title
                        level={3}
                        style={{
                          width: "112px",
                          margin: "0",
                        }}
                      >
                        Pile Diameter
                      </Title>
                    }
                    name="pile_diameter"
                  >
                    <Input placeholder="Nhập Pile Diameter"></Input>
                  </Form.Item>
                </Space>
              </Col>
              <Col span={12}>
                <Space>
                  <Form.Item<FieldType>
                    label={
                      <Title
                        level={3}
                        style={{
                          width: "112px",
                          margin: "0",
                        }}
                      >
                        Pike Raked
                      </Title>
                    }
                    name="pile_raked"
                  >
                    <Input placeholder="Nhập Pike Raked"></Input>
                  </Form.Item>
                </Space>
              </Col>
            </Row>

            <Flex
              justify="end"
              style={{ marginTop: "12px", marginRight: "32px" }}
            >
              <Button
                style={{
                  background: "#ccc",
                  color: "#fff",
                  marginRight: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
                htmlType="reset"
                onClick={() => {
                  setSearchParams({});
                }}
              >
                <Title
                  level={3}
                  style={{
                    fontWeight: "600",
                    color: "#fff",
                    padding: "8px 16px",
                    height: "fit-content",
                    margin: "0",
                  }}
                >
                  Clear
                </Title>
              </Button>
              <Button
                style={{
                  background: "#6366f1",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                }}
                htmlType="submit"
              >
                <Title
                  level={3}
                  style={{
                    fontWeight: "600",
                    color: "#fff",
                    padding: "8px 16px",
                    height: "fit-content",
                    margin: "0",
                  }}
                >
                  Tìm Kiếm
                </Title>
              </Button>
            </Flex>
          </Form>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          borderRadius: "6px",
        }}
      >
        <Table
          columns={columns}
          dataSource={pilePlans.map((pilePlan) => {
            return {
              ...pilePlan,
              key: pilePlan.pileId,
            };
          })}
          pagination={{ pageSize: 3 }}
        />
      </div>
      <Flex justify="end" style={{ marginTop: "24px", marginRight: "24px" }}>
        <Button
          style={{ width: "80px", height: "40px" }}
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          <Flex align="center" justify="center">
            <IconChevronLeft width={20} height={20}></IconChevronLeft>
          </Flex>
        </Button>
      </Flex>
    </div>
  );
};

export default PilePlanPage;
