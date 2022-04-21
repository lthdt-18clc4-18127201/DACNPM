import React, { useState, useContext } from "react";
import { Table, Button, Drawer } from "antd";

import UserContext from "../../../../store/adminstore";


export default function UserBlockView() {
  const { store } = useContext(UserContext);
  const { items} = store;
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "birthdate",
      key: "birthdate",
    },

    {
      title: "Action",
      dataIndex: "action",
      width: "45%",
      render: (_, record) => (
        <>
          {record.name === "initial" && <Button icon="plus" shape="circle" />}
          {record.name !== "initial" && (
            <>
              <Button
                key={`a-${record.name}`}
                type="primary"
                shape="round"
                style={{ marginRight: "10px", border: "none" }}
                onClick={showDrawer}
              >
                Chi tiết
              </Button>

              <Button shape="round" type="danger">
                 Mở khóa tài khoản
              </Button>
            </>
          )}
        </>
      ),
    },
  ];
  return (
    <>
      <Table dataSource={items} columns={columns} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        
      </Drawer>
    </>
  );
}