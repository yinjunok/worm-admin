import { useState } from 'react'
import { Space, Table, Tag, Button, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export const Component: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to='/dashboard/detail'>{t('详情')}</Link>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  return (
    <Card bordered={false} title={t('列表页')}>
      <Button
        icon={<PlusOutlined />}
        onClick={() => navigate('/dashboard/form/edit')}
      >
        {t('新增')}
      </Button>
      <Button onClick={() => setCount(c => c + 1)}>
        {t('计数器', { count })}
      </Button>
      <Table columns={columns} dataSource={data} />
    </Card>
  )
};
