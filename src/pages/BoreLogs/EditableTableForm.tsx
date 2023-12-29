import { Form, Input, Button, Table, Flex } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Column from "antd/es/table/Column";
import { FunctionComponent } from "react";
import { deepType } from "../../types";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { formBorelogSelector } from "../../redux/selector";

interface EditableTableFormProps {
  handleChangeTable: (value: deepType[]) => void;
}

const EditableTableForm: FunctionComponent<EditableTableFormProps> = ({
  handleChangeTable,
}) => {
  const navigate = useNavigate();
  const onFinish = (values: { data: deepType[] }) => {
    handleChangeTable(
      values.data
        .slice(1)
        .filter((item) => item.depth !== null && item.description !== "")
        .sort((a, b) => a.depth - b.depth)
    );
  };
  const deep = useAppSelector(formBorelogSelector)?.data?.deep;
  const defaultData: deepType[] = [
    { depth: 0, description: "Top of Borehole" },
    ...(deep ? deep : []),
  ];
  console.log(defaultData);
  return (
    <Form
      name="dynamic_form_item"
      onFinish={onFinish}
      initialValues={{
        data: defaultData,
      }}
    >
      <Form.List name="data">
        {(data, { add, remove }) => (
          <Table
            dataSource={data}
            pagination={false}
            footer={() => (
              <Flex justify="space-between">
                <Button onClick={() => add({ depth: null, description: "" })}>
                  <Flex align="center">
                    <PlusOutlined className="mr-4" /> Add field
                  </Flex>
                </Button>
                <Flex className="mr-8">
                  <Button
                    className="bg-gray-600 mr-4 w-20 flex justify-center items-center"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    <IconChevronLeft className="text-[#fff]"></IconChevronLeft>
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-gray-600 mr-4 w-20 flex justify-center items-center"
                  >
                    Save
                  </Button>
                </Flex>
              </Flex>
            )}
          >
            <Column
              dataIndex="depth"
              title="Depth (m)"
              render={(_value, _record, index) => (
                <Form.Item
                  name={[index, "depth"]}
                  style={{ marginBottom: "0" }}
                  initialValue={index === 0 ? defaultData[0].depth : undefined}
                >
                  <Input
                    placeholder="depth"
                    style={{ width: "60px" }}
                    disabled={index === 0}
                  />
                </Form.Item>
              )}
            />

            <Column
              dataIndex="description"
              title="Description"
              render={(_value, _record, index) => (
                <Form.Item
                  name={[index, "description"]}
                  style={{ marginBottom: "0" }}
                  initialValue={
                    index === 0 ? defaultData[0].description : undefined
                  }
                >
                  <Input
                    placeholder="description"
                    style={{ width: "150px" }}
                    disabled={index === 0}
                  />
                </Form.Item>
              )}
            />
            <Column
              title="Action"
              className="flex items-center"
              render={(_value, _record, index) =>
                index === 0 ? (
                  <Button icon={<MinusOutlined />} shape="circle" disabled />
                ) : (
                  <Button
                    icon={<MinusOutlined />}
                    shape="circle"
                    onClick={() => {
                      remove(index);
                    }}
                  />
                )
              }
            />
          </Table>
        )}
      </Form.List>
    </Form>
  );
};
export default EditableTableForm;
