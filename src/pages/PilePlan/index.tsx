/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import { FunctionComponent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { pileplansSelector } from "../../redux/selector";
import { IconChevronLeft } from "@tabler/icons-react";

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
  const pilePlans = useAppSelector(pileplansSelector).data.filter(
    (pilePlan) => pilePlan.projectId === params.projectId
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!pilePlans) {
      navigate("/");
    }
  }, [pilePlans]);
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
      }}
    >
      <Title style={{ fontSize: "24px", marginBottom: "16px" }}>
        Pile Plan
      </Title>
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
            navigate(-1);
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
