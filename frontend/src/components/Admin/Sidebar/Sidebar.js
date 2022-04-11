import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from "@ant-design/icons";

const { SubMenu } = Menu;
export default function Sidebar() {
  return (
  
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          
          <SubMenu key="sub1" icon={<UserOutlined />} title="Quản lý khách hàng">
            <Menu.Item key="1"><Link to="users"></Link>Tất cả khách hàng</Menu.Item>
            
            <Menu.Item key="2"><Link to="accepts"></Link>Duyệt khách hàng</Menu.Item>
           
          </SubMenu>
          <Menu.Item key="4" icon={<FileOutlined />}>
          <Link to="reports"></Link>
            Báo cáo lỗi
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
          <Link to="revenue"></Link>
            Doanh thu
          </Menu.Item>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
  
  );
}