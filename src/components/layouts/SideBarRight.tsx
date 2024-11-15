import React from 'react';
import { CalendarOutlined, MessageOutlined, MoreOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, List, Typography } from 'antd';
import dayjs from 'dayjs';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';
import IconMessage from '../icons/IconMessage';
import IconBell from '../icons/IconBell';
import Clock from '../Clock';
import Spotify1 from '../spotify/Spotify1';

interface Event {
  title: string;
  category: string;
  time: string;
  icon: string;
}

interface Course {
  title: string;
  platform: string;
  icon: string;
}

const events: Event[] = [
  { title: 'Typography in UX/UI', category: 'Design', time: '10:00 am', icon: 'https://via.placeholder.com/40' },
  { title: 'Figma UI UX Design', category: 'Design', time: '10:00 am', icon: 'https://via.placeholder.com/40' },
];

const courses: Course[] = [
  { title: 'CSS for Designers', platform: 'uxcel', icon: 'https://via.placeholder.com/40' },
  { title: '3D Design Foundations', platform: 'uxcel', icon: 'https://via.placeholder.com/40' },
  { title: 'Design Composition', platform: 'uxcel', icon: 'https://via.placeholder.com/40' },
  { title: 'Color Psychology', platform: 'uxcel', icon: 'https://via.placeholder.com/40' },
];

const CalendarGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-7 text-center text-sm mb-4">
      {Array.from({ length: 30 }, (_, index) => (
        <span key={index} className={`p-1 ${index === 23 ? 'bg-blue-200 rounded-full' : ''}`}>
          {index + 1}
        </span>
      ))}
    </div>
  );
};

const SideBarRight: React.FC = () => {
  return (
    <Sider width={250} className="h-screen px-[20px] bg-white border-l-[1px] right-0 overflow-auto sticky z-[100]">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-2 sticky top-0 z-[10]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  pt-[20px] pb-2">
          <div className="flex gap-5 items-center">
            <button className="flex items-center">
              <Badge dot color="red">
                <IconBell />
              </Badge>
            </button>
            <button className="flex items-center">
              <Badge dot color="blue">
                <IconMessage />
              </Badge>
            </button>

          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-300 rounded-full border-none md:me-0 focus:ring-4 focus:ring-blue-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <div className="avatar online">
                <div className="rounded-full">
                  <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="cursor-pointer" />
                </div>
              </div>
            </button>
            {/* Dropdown menu */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link to={``}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to={``}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to={``}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link to={``}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* calender */}
      <div className="text-gray-700 mb-4 font-semibold">
        <Typography.Title level={5}>{dayjs().format('MMMM YYYY')}</Typography.Title>
      </div>
      <div className="flex justify-between mb-3">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <span key={day} className="text-gray-500 text-sm">{day}</span>
        ))}
      </div>
      <CalendarGrid />
      <Clock />
      {/* Upcoming Events Section */}
      <div className="my-4">
        <Typography.Title level={5} className="text-gray-700">
          Upcoming Events
        </Typography.Title>
        <List
          itemLayout="horizontal"
          dataSource={events}
          renderItem={(event) => (
            <List.Item
              actions={[<MoreOutlined key="more" className="text-gray-400" />]}
              className="bg-[#A5B4CB] rounded-lg mb-2"
            >
              <List.Item.Meta
                avatar={<Avatar src={event.icon} className='ml-3' />}
                title={<Typography.Text className='text-[12px]'>{event.title}</Typography.Text>}
                description={
                  <div className="text-gray-500 text-xs flex">
                    <span className='block'>{event.category}</span> • <span className='block'>{event.time}</span>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
      <Spotify1 />
      {/* Top Performing Courses Section */}
      <div>
        <Typography.Title level={5} className="text-gray-700">
          Top Performing Courses
        </Typography.Title>
        <List
          itemLayout="horizontal"
          dataSource={courses}
          renderItem={(course) => (
            <List.Item
              actions={[<span className="text-green-400">↑</span>]}
              className="mb-2"
            >
              <List.Item.Meta
                avatar={<Avatar src={course.icon} />}
                title={<Typography.Text>{course.title}</Typography.Text>}
                description={<div className="text-gray-500 text-xs">{course.platform}</div>}
              />
            </List.Item>
          )}
        />
      </div>
    </Sider>
  );
};

export default SideBarRight;
