import React, { useState } from "react";
import { Table, Tag, Space, Drawer , Button} from "antd";
import CustomerDescription from "../CustomerDescription/CustomerDescription";
import PageHeader from "../PageHeader/PageHeader";
import AdminStore from "../../../store/adminstore"
export default function AcceptTable() {
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: "1/1/1999",
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: "1/1/1999",
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: "1/1/1999",
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày sinh",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
         <Button type="primary" shape="round" size={"small"} onClick={showDrawer}>
          Xem thông tin
        </Button>
         
        <Button type="danger" shape="round" size={"small"} onClick={showDrawer}>
          Không xác nhận
        </Button>
        </Space>
      ),
    },
  ];
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
    <PageHeader title="Duyệt khách hàng"/>
      <Table columns={columns} dataSource={data} />
      <Drawer
        title="Thông tin người dùng"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={640}
      >
        <CustomerDescription />
      </Drawer>
    </>
  );
}
