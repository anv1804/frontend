
import { Layout, Menu, Badge, Avatar, Button } from 'antd';
import {
  UploadOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import IconClock from '../icons/IconClock';
import IconCalendarFlat from '../icons/IconCalendarFlat';
import IconBagFlat from '../icons/IconBagFlat';
import IconChatFlat from '../icons/IconChatFlat';
import IconCompany from '../icons/IconCompany';
import IconFileFlat from '../icons/IconFileFlat';
import IconPayFlat from '../icons/IconPayFlat';
import IconNavigatFlat from '../icons/IconNavigatFlat';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SideBarLeft = () => {
  return (
    <Sider width={250} className="h-screen w-full bg-white border-r-[1px] float-left ">
      <div className="flex flex-col items-center py-4">
        {/* Logo */}
        <div className="text-blue-500  text-2xl font-semibold mb-4">Teach.</div>

        {/* User Profile */}
        <div className="flex gap-2 w-[80%] items-center justify-start pb-4 border-b-[1px]">
          <Avatar size={48} src="https://via.placeholder.com/64" />
          <div className="">
            <div className="text-black font-bold">Jone Copper</div>
            <div className="text-gray-400 text-[10px]">UI Designer</div>
          </div>
        </div>

        {/* Menu Items */}
        <Menu mode="inline" defaultSelectedKeys={['1']} className="w-full">
          <Menu.Item key="1" icon={<IconNavigatFlat />}>
            <Link to={`/`}>Trang Chủ</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<IconCalendarFlat />}>
            <Link to={`lich-trinh`}>Lịch Trình</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<IconBagFlat />}>
          <Link to={`/lop-hoc`}>Lớp Học</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<IconChatFlat />}>
            <span className="flex items-center">
              <Link to={`/tro-chuyen`}>Trò Chuyện</Link>
              <Badge count={4} className="ml-auto">
                <Avatar.Group
                  maxCount={3}
                  maxPopoverPlacement="bottom"
                  size="small"
                  className="ml-2"
                >
                  <Avatar src="https://via.placeholder.com/24" />
                  <Avatar src="https://via.placeholder.com/24" />
                  <Avatar src="https://via.placeholder.com/24" />
                  <Avatar src="https://via.placeholder.com/24" />
                </Avatar.Group>
              </Badge>
            </span>
          </Menu.Item>
          <Menu.Item key="5" icon={<IconCompany />}>
            Công Ty
          </Menu.Item>
          <Menu.Item key="6" icon={<IconFileFlat />}>
            Tài Liệu <span className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded">Pro</span>
          </Menu.Item>
          <Menu.Item key="7" icon={<IconPayFlat />}>
            Ví <span className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded">Pro</span>
          </Menu.Item>
          <Menu.Item key="8" icon={<IconClock />}>
            My Account
          </Menu.Item>
          <Menu.Item key="9" icon={<IconClock />}>
            My Account
          </Menu.Item>
        </Menu>

        {/* New Upload Button */}
        <div className="mt-8 w-full px-4">
          <Button type="primary" icon={<UploadOutlined />} block className="h-12">
            New Upload
          </Button>
        </div>

        {/* Logout Button */}
        <div className="mt-8 w-full px-4">
          <Button type="text" icon={<LogoutOutlined />} block className="text-gray-500">
            Logout
          </Button>
        </div>
      </div>
    </Sider>
  );
};

export default SideBarLeft;
