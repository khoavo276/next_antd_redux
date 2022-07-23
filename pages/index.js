import { Button, Space } from 'antd';

export default function Home() {
  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
      </Space>
    </div>
  );
}
