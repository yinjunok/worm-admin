import { type ReactNode, useState } from 'react'
import {
  Table,
  type TableProps,
  Button,
  Space,
  Divider,
  Dropdown,
} from 'antd'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import type { AnyObject } from 'antd/es/_util/type'
import { ReloadOutlined, SettingOutlined, ColumnHeightOutlined } from '@ant-design/icons'
import sty from './styles.module.scss'

export type StandardTableProps = {
  action?: ReactNode
  onRefresh?: () => void
}

const StandardTable = <RecordType extends AnyObject = AnyObject>({ action, columns, onRefresh, ...props }: TableProps<RecordType> & StandardTableProps) => {
  const [size, setSize] = useState<SizeType>()

  return (
    <>
      <div className={sty.toolbar}>
        <Space>
          {action}
          {
            action && (
              <Divider type='vertical' />
            )
          }
          {
            onRefresh && (
              <Button type='text' icon={<ReloadOutlined />} onClick={() => onRefresh()} />
            )
          }
          <Dropdown
            menu={{
              activeKey: size,
              onClick: ({ key }) => {
                setSize(key as SizeType)
              },
              items: [
                { key: 'large', label: '默认' },
                { key: 'middle', label: '中等' },
                { key: 'small', label: '紧凑' },
              ]
            }}
          >
            <Button type='text' icon={<ColumnHeightOutlined />} />
          </Dropdown>
          <Button type='text' icon={<SettingOutlined />} />
        </Space>
      </div>
      <Table
        size={size}
        columns={columns}
        {...props}
      />
    </>
  )
}

export default StandardTable
