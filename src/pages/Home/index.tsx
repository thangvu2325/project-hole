import { Button, Col, Flex, Form, Input, Row, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import { FunctionComponent, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { projectsRemainingSelector } from "../../redux/selector";
import { useNavigate, useSearchParams } from "react-router-dom";
import { editFilter } from "../../redux/projectsSlice";
import {
  IconChevronDown,
  IconDeviceTabletExclamation,
} from "@tabler/icons-react";

interface HomeProps {}
interface DataType {
  key: string;
  projectId: string;
  project_name: string;
  project_status: string;
  project_date: string;
}

const columns: ColumnsType<DataType> | null = [
  {
    title: "No.",
    dataIndex: "key",
    sortDirections: ["descend"],
  },
  {
    title: "Project Name",
    dataIndex: "project_name",
  },
  {
    title: "Status",
    dataIndex: "project_status",
  },
  {
    title: "Date",
    dataIndex: "project_date",
  },
];
type FieldType = {
  projectId?: string;
  project_name?: string;
  project_status?: string;
};
const Home: FunctionComponent<HomeProps> = () => {
  const tableData = useAppSelector(projectsRemainingSelector)?.map(
    (project, index) => {
      return {
        ...project,
        key: (index + 1).toString(),
      };
    }
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleToggleShowSearchBox = () => {
    if (refDiv.current) {
      refDiv.current.classList.toggle("h-42");
    }
  };
  const onFinish = async (values: FieldType) => {
    setSearchParams(values);
    console.log(values);
    dispatch(editFilter(values));
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    dispatch(
      editFilter({
        projectId: searchParams.get("projectId") ?? "",
        project_status: searchParams.get("project_status") ?? "",
        project_date: searchParams.get("project_date") ?? "",
      })
    );
    document.title = "Quản Lý Project";
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
        paddingBottom: "36px",
      }}
    >
      <Title level={1}>Quản Lý Project</Title>
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
            <span style={{ fontWeight: "600", fontSize: "16px" }}>
              Thông tin tìm kiếm
            </span>
          </Flex>
        </Title>
        <div className={`w-3/4 mx-auto mb-4`}>
          <Form
            initialValues={{
              projectId: searchParams.get("projectId") ?? "",
              project_status: searchParams.get("project_status") ?? "",
              project_date: searchParams.get("project_date") ?? "",
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
                        ProjectId
                      </Title>
                    }
                    name="projectId"
                  >
                    <Input placeholder="Nhập ProjectId"></Input>
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
                        Project Name
                      </Title>
                    }
                    name="project_name"
                  >
                    <Input placeholder="Nhập Project Name"></Input>
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
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/${record.projectId}/pileplan`);
              },
            };
          }}
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default Home;
