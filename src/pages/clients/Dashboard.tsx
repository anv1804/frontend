import React from 'react'
import IconSearch from '../../components/icons/IconSearch'
import { Button, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import Schedule from '../../components/Schedule';
const Dashboard = () => {
    return (
        <div className='w-full main-content'>
            <div className="container bg-white overflow-auto" >
                <div className="flex items-center justify-between p-4 border-b-[1px] sticky ">
                    <div className="flex items-center w-full border rounded-lg ">
                        <Input
                            placeholder="Search"
                            prefix={<IconSearch />}
                            bordered={false}
                            className="w-full px-2 py-2 text-gray-600"
                        />
                    </div>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="ml-4 bg-blue-100 text-blue-500 border-none rounded-full px-4 py-2"
                    >
                        New Upload
                    </Button>

                </div>
                <div className="calendar">
                    <Schedule />
                    <Schedule />

                    <Schedule />

                    <Schedule />

                </div>
            </div>
        </div>
    )
}

export default Dashboard