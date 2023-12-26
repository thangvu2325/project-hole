import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import { FunctionComponent } from "react";
import { useAppSelector } from "../../redux/hook";
import { projectsSelector } from "../../redux/selector";
import { useNavigate } from "react-router-dom";

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
const Home: FunctionComponent<HomeProps> = () => {
  const tableData = useAppSelector(projectsSelector)?.data.map(
    (project, index) => {
      return {
        ...project,
        key: (index + 1).toString(),
      };
    }
  );
  const navigate = useNavigate();
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
        Project Manager
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
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/${record.projectId}/pileplan`);
              },
            };
          }}
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 3 }}
        />
      </div>
    </div>
  );
};

export default Home;
