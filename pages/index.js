/* eslint-disable unicorn/consistent-function-scoping */
import { CiCircleFilled } from '@ant-design/icons';
import { Button, DatePicker, Space } from 'antd';

export default function Home() {
  const onChange = () => {
    // console.log('das');
    //
  };

  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        <CiCircleFilled />
      </Space>
    </div>
  );
}
