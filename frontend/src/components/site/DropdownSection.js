import React from 'react';
import { Dropdown, Space } from 'antd';

const DropdownSection = ({title, items}) => {
  return (
    <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <div onClick={(e) => e.preventDefault()}>
      <Space>
        {title}
      </Space>
    </div>
  </Dropdown>
  )
}
export default DropdownSection