import React, { useEffect, useState, useCallback } from 'react';
import { BasicTableRow, getBasicTableData, Pagination, Tag } from 'api/table.api';
import { Priority } from '@app/constants/enums/priorities';

import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { ColumnsType } from 'antd/es/table';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { defineColorByPriority } from '@app/utils/utils';
import { notificationController } from 'controllers/notificationController';
import { Status } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/Status/Status';
import { useMounted } from '@app/hooks/useMounted';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Card, Row, Col, Input, Button } from 'antd';
import AddModal from './AddModal';
const fakedata = [
  {
    key: 1,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'New York No. 1 Lake Park',
    tags: [{ value: 'Đang chờ xử lý', priority: Priority.INFO }],
  },
  {
    key: 2,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'London No. 1 Lake Park',
    tags: [{ value: 'Bị hủy', priority: Priority.HIGH }],
  },
  {
    key: 3,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Sidney No. 1 Lake Park',
    tags: [{ value: 'Đang chờ xử lý', priority: Priority.INFO }],
  },
  {
    key: 4,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'New York No. 1 Lake Park',
    tags: [{ value: 'Đang xử lý', priority: Priority.MEDIUM }],
  },
  {
    key: 5,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Minsk',
    tags: [{ value: 'Đang xử lý', priority: Priority.MEDIUM }],
  },
  {
    key: 6,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'New York No. 1 Lake Park',
    tags: [{ value: 'Đang chờ xử lý', priority: Priority.INFO }],
  },
  {
    key: 7,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Sidney No. 1 Lake Park',
    tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
  },
  {
    key: 8,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: 9,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Minsk',
    tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
  },
  {
    key: 10,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'London',
    tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
  },
  {
    key: 11,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Minsk',
    tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
  },
  {
    key: 12,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Brest',
    tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
  },
  {
    key: 13,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Minsk',
    tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
  },
  {
    key: 14,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'New York',
    tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
  },
  {
    key: 15,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'London',
    tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
  },
  {
    key: 16,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Minsk',
    tags: [{ value: 'Doctor', priority: Priority.HIGH }],
  },
  {
    key: 17,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Gomel',
    tags: [
      { value: 'Engineer', priority: Priority.MEDIUM },
      { value: 'Teacher', priority: Priority.INFO },
    ],
  },
  {
    key: 18,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Moscow',
    tags: [
      { value: 'Professor', priority: Priority.LOW },
      { value: 'Doctor', priority: Priority.HIGH },
    ],
  },
  {
    key: 19,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'London',
    tags: [
      { value: 'Teacher', priority: Priority.INFO },
      { value: 'Doctor', priority: Priority.HIGH },
    ],
  },
  {
    key: 20,
    create_at: '18/11/2023',
    count: 3,
    payload: 5,
    address: 'Bronx',
    tags: [{ value: 'Professor', priority: Priority.LOW }],
  },
];
const initialPagination: Pagination = {
  current: 1,
  pageSize: 10,
};

export const BasicTable: React.FC = () => {
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const { isMounted } = useMounted();

  const fetch = useCallback(
    (pagination: Pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      getBasicTableData(pagination).then((res) => {
        if (isMounted.current) {
          setTableData({ data: res.data, pagination: res.pagination, loading: false });
        }
      });
    },
    [isMounted],
  );
  const [isAdd, setIsAdd] = useState(false);
  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination: Pagination) => {
    fetch(pagination);
  };

  const handleDeleteRow = (rowId: number) => {
    setTableData({
      ...tableData,
      data: tableData.data.filter((item) => item.key !== rowId),
      pagination: {
        ...tableData.pagination,
        total: tableData.pagination.total ? tableData.pagination.total - 1 : tableData.pagination.total,
      },
    });
  };

  const columns: ColumnsType<BasicTableRow> = [
    {
      title: 'STT',
      dataIndex: 'key',
      // sorter: (a: BasicTableRow, b: BasicTableRow) => a.age - b.age,
      showSorterTooltip: false,
      align: 'center',
      // render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: 'Ngày yêu cầu',
      dataIndex: 'create_at',
      render: (text: string) => <span>{text}</span>,
      filterMode: 'tree',
      filterSearch: true,
      align: 'center',
      filters: [
        {
          text: t('common.firstName'),
          value: 'firstName',
          children: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Pavel',
              value: 'Pavel',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Josh',
              value: 'Josh',
            },
          ],
        },
        {
          text: t('common.lastName'),
          value: 'lastName',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
            {
              text: 'Brown',
              value: 'Brown',
            },
          ],
        },
      ],
      onFilter: (value: string | number | boolean, record: BasicTableRow) =>
        record.start_use.includes(value.toString()),
    },
    {
      title: 'Số xe',
      dataIndex: 'count',
      align: 'center',
      // sorter: (a: BasicTableRow, b: BasicTableRow) => a.age - b.age,
      showSorterTooltip: false,
    },
    {
      title: 'Tải trọng',
      dataIndex: 'payload',
      align: 'center',
    },
    {
      title: 'Trạng thái',
      key: 'tags',
      dataIndex: 'tags',
      align: 'center',
      render: (tags: Tag[]) => (
        <BaseRow gutter={[10, 10]}>
          {tags?.map((tag: Tag) => {
            return (
              <BaseCol key={tag.value}>
                <Status color={defineColorByPriority(tag.priority)} text={tag.value} />
              </BaseCol>
            );
          })}
        </BaseRow>
      ),
    },
    {
      title: 'Thao tác',
      dataIndex: 'actions',
      width: '15%',
      align: 'center',
      render: (text: string, record: { start_use: string; payload: number }) => {
        return (
          <BaseSpace>
            {/* <BaseButton
              type="ghost"
              onClick={() => {
                notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
              }}
            > */}
            <EditFilled
              onClick={() => {
                notificationController.info({ message: t('tables.inviteMessage', { name: record.start_use }) });
              }}
            />
            {/* </BaseButton> */}
            {/* <BaseButton type="default" danger onClick={() => handleDeleteRow(record.key)}> */}
            <DeleteFilled onClick={() => handleDeleteRow(record.payload)} />
            {/* </BaseButton> */}
          </BaseSpace>
        );
      },
    },
  ];
  const handleModal = () => {
    setIsAdd(false);
  };

  return (
    <Card title="Danh sách yêu cầu" style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
      <Row style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Col sm="4" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div
            className=""
            style={{
              width: '100px',
              fontSize: '14px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Tìm kiếm
          </div>
          <Input type="text" placeholder="Tìm kiếm" style={{ height: '34px' }} />
        </Col>
        <Col sm="7" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={() => setIsAdd(true)}
            type="primary"
            className="addBtn"
            style={{
              width: '110px',
              padding: 0,
              height: '36px',
            }}
          >
            Thêm mới
          </Button>
        </Col>
      </Row>
      <BaseTable
        columns={columns}
        dataSource={fakedata}
        pagination={tableData.pagination}
        loading={tableData.loading}
        onChange={handleTableChange}
        scroll={{ x: 800 }}
        bordered
      />
      <AddModal visible={isAdd} onCancel={handleModal} />
    </Card>
  );
};
