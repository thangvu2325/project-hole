import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  notification,
} from "antd";
import { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { projectsRemainingSelector } from "../../redux/selector";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addProject, editFilter } from "../../redux/projectsSlice";
import { IconChevronDown, IconPlus } from "@tabler/icons-react";
import ModalAdd from "../../components/ModalAdd";
import "./index.css"
interface ProjectPageProps {}
interface DataType {
  key?: string;
  projectId?: string;
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
    filters: [
      { text: "Process", value: "Process" },
      { text: "Done", value: "Done" },
    ],
    onFilter: (value: string | boolean | React.Key, record) =>
      typeof value === "string"
        ? record.project_status.indexOf(value) === 0
        : true,
  },

  {
    title: "Date",
    dataIndex: "project_date",
  },
  {
    title: "Pile Plan",
    dataIndex: "detail",
  },
];
type FieldType = {
  projectId?: string;
  project_name?: string;
  project_status?: string;
};
const ProjectPage: FunctionComponent<ProjectPageProps> = () => {
  const tableData = useAppSelector(projectsRemainingSelector)?.map(
    (project, index) => {
      return {
        ...project,
        key: (index + 1).toString(),
        detail: (
          <Title
            level={3}
            className="cursor-pointer"
            style={{ fontWeight: "400" }}
            onClick={() => {
              navigate(
                location.pathname + "/" + project.projectId + "/pileplan"
              );
            }}
          >
            Detail
          </Title>
        ),
      };
    }
  );
  const [open, setOpen] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [api, contextHolder] = notification.useNotification();
  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleToggleShowSearchBox = () => {
    if (refDiv.current) {
      refDiv.current.classList.toggle("h-42");
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = useCallback(async (values: any) => {
    console.log(values);
    try {
      dispatch(
        addProject({
          ...values,
          project_date: values.project_date.format("DD-MM-YYYY").toString(),
        })
      );
      api["success"]({
        message: "Thêm Project Thành Công!",
      });
    } catch (error) {
      api["error"]({
        message: "Thêm Project Thất Bại",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinishFailed = useCallback((errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  }, []);

  const onFinishSearch = (values: FieldType) => {
    setSearchParams(values);
    console.log(values);
    dispatch(editFilter(values));
  };
  const onFinishSearchFailed = (errorInfo: unknown) => {
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
    className="container"
      style={{
        padding: "24px 36px",
        borderRadius: "6px",
        paddingBottom: "48px",
        width: "100%",
      }}
    >
      {contextHolder}
      <div className="bg-[#fff] border-[0.8px] border-solid border-[#ccc] rounded-md">
        <Flex justify="space-between">
          <Title level={1} className="ml-4 mt-4">
            Quản Lý Projects
          </Title>
          <Button
            style={{ background: "#6366f1", color: "#fff" }}
            className="flex items-center mr-4 mt-4"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Title
              level={3}
              style={{
                fontWeight: "600",
                color: "#fff",
                marginBottom: "0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconPlus width={18} height={18} className="mr-2"></IconPlus> New
            </Title>
          </Button>
        </Flex>
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
              onFinish={onFinishSearch}
              onFinishFailed={onFinishSearchFailed}
              autoComplete="off"
              className="scroll"
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
                  <p style={{fontWeight: "600",}}>
                    Clear
                  </p>
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
                   <p style={{fontWeight: "600",}}></p>
                    Tìm Kiếm
                  
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
            className="table1"
            columns={columns}
            dataSource={tableData}
            pagination={{ pageSize: 10 }}
            scroll={{ x: true }}
          />
        </div>
      </div>
      <ModalAdd
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        setOpen={setOpen}
        open={open}
        title="Thêm Project"
      >
        <Space direction="vertical">
          <Form.Item<DataType>
            label={
              <Title
                level={3}
                style={{
                  marginBottom: "0px",
                  width: "90px",
                  textAlign: "left",
                }}
              >
                Project Name
              </Title>
            }
            style={{ marginBottom: "6px" }}
            name="project_name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên Project!",
              },
            ]}
          >
            <Input
              placeholder="Nhập Project Name"
              style={{ width: "190px" }}
            ></Input>
          </Form.Item>
          <Form.Item<DataType>
            label={
              <Title
                level={3}
                style={{
                  marginBottom: "0px",
                  width: "90px",
                  textAlign: "left",
                }}
              >
                Status
              </Title>
            }
            style={{ marginBottom: "6px" }}
            name="project_status"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn status!",
              },
            ]}
          >
            <Select
              placeholder="Select a status"
              allowClear
              style={{ width: "190px" }}
            >
              <Select.Option value="Process">Process</Select.Option>
              <Select.Option value="Done">Done</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item<DataType>
            label={
              <Title
                level={3}
                style={{
                  marginBottom: "0px",
                  width: "90px",
                  textAlign: "left",
                }}
              >
                Date
              </Title>
            }
            rules={[
              {
                required: true,
                message: "Vui lòng chọn ngày!",
              },
            ]}
            name="project_date"
            style={{ marginBottom: "0" }}
          >
            <DatePicker placeholder="Chọn ngày" style={{ width: "190px" }} />
          </Form.Item>
        </Space>
      </ModalAdd>
    </div>
  );
};

export default ProjectPage;
