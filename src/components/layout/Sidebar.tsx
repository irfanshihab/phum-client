import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
const { Header, Content, Footer, Sider } = Layout;
const UserRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  // console.log(selectCurrentUser);
  const user = useAppSelector(selectCurrentUser);
  // const role = "admin";
  // console.log(user!.role);
  let sidebarItems;
  switch (user!.role) {
    case UserRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, UserRole.FACULTY);
      break;
    case UserRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, UserRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Ph Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
