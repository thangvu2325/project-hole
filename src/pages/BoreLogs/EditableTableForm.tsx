import { Form, Input, Button, Table, Flex } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Column from "antd/es/table/Column";
import { FunctionComponent } from "react";
import { dataType } from ".";

const mockData: dataType[] = [{ depth: 0, description: "Top of Borehole" }];
interface EditableTableFormProps {
  handleChangeTable: (value: dataType[]) => void;
}

const EditableTableForm: FunctionComponent<EditableTableFormProps> = ({
  handleChangeTable,
}) => {
  const onFinish = (values: { data: dataType[] }) => {
    handleChangeTable(values.data.slice(1));
  };
  return (
    <Form
      name="dynamic_form_item"
      onFinish={onFinish}
      initialValues={{ data: mockData }}
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
                <Button type="primary" htmlType="submit" className="mr-8 w-28">
                  Submit
                </Button>
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
                  initialValue={index === 0 ? mockData[0].depth : undefined}
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
                    index === 0 ? mockData[0].description : undefined
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
