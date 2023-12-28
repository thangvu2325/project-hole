/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Col,
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
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  pilePlansRemainingSelector,
  projectsSelector,
} from "../../redux/selector";
import {
  IconChevronDown,
  IconChevronLeft,
  IconPlus,
} from "@tabler/icons-react";
import { addPilePlant, editPilePlantFilter } from "../../redux/pileplansSlice";
import ModalAdd from "../../components/ModalAdd";

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
    filters: [
      { text: "Completed", value: "Completed" },
      { text: "Not started", value: "Not started" },
    ],
    onFilter: (value: string | boolean | React.Key, record) =>
      typeof value === "string"
        ? record.pile_status.indexOf(value) === 0
        : true,
  },
  {
    title: "Diameter",
    dataIndex: "pile_diameter",
  },
  {
    title: "Raked",
    dataIndex: "pile_raked",
  },
  {
    title: "BoreLog",
    dataIndex: "detail",
  },
];
const PilePlanPage: FunctionComponent<PilePlanPageProps> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const pilePlans = useAppSelector(pilePlansRemainingSelector)
    .filter((pilePlan) => pilePlan.projectId === params.projectId)
    .map((pile) => {
      return {
        ...pile,
        detail: (
          <Title
            level={3}
            className="cursor-pointer"
            style={{ fontWeight: "400" }}
            onClick={() => {
              navigate(location.pathname + "/" + pile.pileId);
            }}
          >
            Detail
          </Title>
        ),
      };
    });
  const [open, setOpen] = useState<boolean>(false);
  const projectFounded = useAppSelector(projectsSelector).data.find(
    (project) => project.projectId === params.projectId
  );
  useEffect(() => {
    if (!pilePlans) {
      navigate("/");
    }
  }, [pilePlans]);
  const [searchParams, setSearchParams] = useSearchParams();
  const refDiv = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [api, contextHolder] = notification.useNotification();
  const handleToggleShowSearchBox = () => {
    if (refDiv.current) {
      refDiv.current.classList.toggle("h-60");
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = useCallback(async (values: any) => {
    console.log(values);
    try {
      dispatch(
        addPilePlant({ ...values, projectId: projectFounded?.projectId })
      );
      api["success"]({
        message: "Thêm Pile Thành Công!",
      });
    } catch (error) {
      api["error"]({
        message: "Thêm Pile Thất Bại",
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
    dispatch(editPilePlantFilter(values));
  };
  const onFinishSearchFailed = (errorInfo: unknown) => {
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
    document.title = projectFounded?.project_name ?? "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        padding: "24px 36px",
        borderRadius: "6px",
        paddingBottom: "48px",
        width: "100%",
      }}
    >
      {contextHolder}
      <div className="bg-[#fff]">
        <Flex justify="space-between">
          <Title level={1} className="ml-4 mt-4">
            Quản Lý Piles
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
            transitionDuration: "1000ms",
            transitionTimingFunction: "ease-in-out",
            height: "40px",
            overflow: "hidden",
            marginTop: "16px",
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
                pileId: searchParams.get("pileId") ?? "",
                pile_location: searchParams.get("pile_location") ?? "",
                pile_diameter: searchParams.get("pile_diameter") ?? "",
                pile_raked: searchParams.get("pile_raked") ?? "",
              }}
              name="basic"
              onFinish={onFinishSearch}
              onFinishFailed={onFinishSearchFailed}
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
            pagination={{ pageSize: 4 }}
          />
        </div>
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
      <ModalAdd
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        setOpen={setOpen}
        open={open}
        title="Thêm Pile"
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
                Location
              </Title>
            }
            style={{ marginBottom: "6px" }}
            name="pile_location"
            rules={[
              {
                required: true,
                message: "please input location!",
              },
            ]}
          >
            <Input
              placeholder="Input Pile Location"
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
            name="pile_status"
            rules={[
              {
                required: true,
                message: "please select a status!",
              },
            ]}
          >
            <Select
              placeholder="Select a status"
              allowClear
              style={{ width: "190px" }}
            >
              <Select.Option value="Completed">Completed</Select.Option>
              <Select.Option value="Not started">Not started</Select.Option>
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
                Raked
              </Title>
            }
            style={{ marginBottom: "6px" }}
            name="pile_raked"
            rules={[
              {
                required: true,
                message: "please select pile raked!",
              },
            ]}
          >
            <Select
              placeholder="select a pile raked"
              allowClear
              style={{ width: "190px" }}
            >
              <Select.Option value="Vertical">Vertical</Select.Option>
              <Select.Option value="Horizon">Horizon</Select.Option>
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
                Diameter
              </Title>
            }
            rules={[
              {
                required: true,
                message: "please input diamerter!",
              },
            ]}
            name="pile_diameter"
            style={{ marginBottom: "0" }}
          >
            <Input
              style={{ width: "190px" }}
              placeholder="input diamerter"
            ></Input>
          </Form.Item>
        </Space>
      </ModalAdd>
    </div>
  );
};

export default PilePlanPage;
