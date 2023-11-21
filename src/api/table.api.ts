import { Priority } from '../constants/enums/priorities';

export interface Tag {
  value: string;
  priority: Priority;
}

export interface BasicTableRow {
  key: number;
  start_use: string;
  regist_state: number;
  payload: number;
  status: string;
  tags?: Tag[];
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface BasicTableData {
  data: BasicTableRow[];
  pagination: Pagination;
}

export interface TreeTableRow extends BasicTableRow {
  children?: TreeTableRow[];
}

export interface TreeTableData extends BasicTableData {
  data: TreeTableRow[];
}

export interface EditableTableData extends BasicTableData {
  data: BasicTableRow[];
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang chờ',
          },
          {
            key: 2,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang chờ',
          },
          {
            key: 3,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang vận chuyển',
          },
          {
            key: 4,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang vận chuyển',
          },
          {
            key: 5,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang chờ',
          },
          {
            key: 6,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang chờ',
          },
          {
            key: 7,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang vận chuyển',
          },
          {
            key: 8,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang vận chuyển',
          },
          {
            key: 9,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang vận chuyển',
          },
          {
            key: 10,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang vận chuyển',
          },
          {
            key: 11,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Đang sửa chữa',
          },
          {
            key: 12,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Brest',
            tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
          },
          {
            key: 13,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Minsk',
            tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
          },
          {
            key: 14,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'New York',
            tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
          },
          {
            key: 15,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'London',
            tags: [{ value: 'Chưa được phê duyệt', priority: Priority.LOW }],
          },
          {
            key: 16,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Minsk',
            tags: [{ value: 'Doctor', priority: Priority.HIGH }],
          },
          {
            key: 17,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Gomel',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 18,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Moscow',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 19,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'London',
            tags: [
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 20,
            start_use: '18/11/2023',
            regist_state: 3,
            payload: 5,
            status: 'Bronx',
            tags: [{ value: 'Professor', priority: Priority.LOW }],
          },
        ],
        pagination: { ...pagination, total: 20 },
      });
    }, 1000);
  });
};

export const getTreeTableData = (pagination: Pagination): Promise<TreeTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          // {
          //   key: 1,
          //   name: 'John Brown sr.',
          //   age: 60,
          //   status: 'New York No. 1 Lake Park',
          //   children: [
          //     {
          //       key: 11,
          //       name: 'John Brown',
          //       age: 42,
          //       status: 'New York No. 2 Lake Park',
          //     },
          //     {
          //       key: 12,
          //       name: 'John Brown jr.',
          //       age: 30,
          //       status: 'New York No. 3 Lake Park',
          //       children: [
          //         {
          //           key: 121,
          //           name: 'Jimmy Brown',
          //           age: 16,
          //           status: 'New York No. 3 Lake Park',
          //         },
          //       ],
          //     },
          //     {
          //       key: 13,
          //       name: 'Jim Green sr.',
          //       age: 72,
          //       status: 'London No. 1 Lake Park',
          //       children: [
          //         {
          //           key: 131,
          //           name: 'Jim Green',
          //           age: 42,
          //           status: 'London No. 2 Lake Park',
          //           children: [
          //             {
          //               key: 1311,
          //               name: 'Jim Green jr.',
          //               age: 25,
          //               status: 'London No. 3 Lake Park',
          //             },
          //             {
          //               key: 1312,
          //               name: 'Jimmy Green sr.',
          //               age: 18,
          //               status: 'London No. 4 Lake Park',
          //             },
          //           ],
          //         },
          //       ],
          //     },
          //   ],
          // },
          // {
          //   key: 200,
          //   name: 'Joe Black',
          //   age: 32,
          //   status: 'Sidney No. 1 Lake Park',
          //   children: [
          //     {
          //       key: 201,
          //       name: 'Joe Green',
          //       age: 42,
          //       status: 'London No. 2 Lake Park',
          //       children: [
          //         {
          //           key: 202,
          //           name: 'Joe Green jr.',
          //           age: 25,
          //           status: 'London No. 3 Lake Park',
          //         },
          //         {
          //           key: 203,
          //           name: 'Joe Green sr.',
          //           age: 18,
          //           status: 'London No. 4 Lake Park',
          //         },
          //       ],
          //     },
          //   ],
          // },
          // {
          //   key: 300,
          //   name: 'Jaime Black',
          //   age: 22,
          //   status: 'Sidney No. 1 Lake Park',
          //   children: [
          //     {
          //       key: 301,
          //       name: 'Jaime Green',
          //       age: 52,
          //       status: 'London No. 2 Lake Park',
          //       children: [
          //         {
          //           key: 302,
          //           name: 'Jaime Green jr.',
          //           age: 21,
          //           status: 'London No. 3 Lake Park',
          //         },
          //         {
          //           key: 303,
          //           name: 'Jaime Green sr.',
          //           age: 18,
          //           status: 'London No. 4 Lake Park',
          //         },
          //       ],
          //     },
          //   ],
          // },
          // {
          //   key: 400,
          //   name: 'Pavel Brown',
          //   age: 26,
          //   status: 'London No. 2 Lake Park',
          //   children: [
          //     {
          //       key: 401,
          //       name: 'Pavel Brown',
          //       age: 22,
          //       status: 'London No. 2 Lake Park',
          //       children: [
          //         {
          //           key: 402,
          //           name: 'Pavel Brown jr.',
          //           age: 24,
          //           status: 'London No. 1 Lake Park',
          //         },
          //         {
          //           key: 403,
          //           name: 'Pavel Brown sr.',
          //           age: 19,
          //           status: 'London No. 4 Lake Park',
          //         },
          //       ],
          //     },
          //   ],
          // },
          // {
          //   key: 500,
          //   name: 'Alex Nickls',
          //   age: 45,
          //   status: 'London No. 2 Lake Park',
          //   children: [
          //     {
          //       key: 501,
          //       name: 'Marta Nickls',
          //       age: 25,
          //       status: 'London No. 2 Lake Park',
          //       children: [
          //         {
          //           key: 502,
          //           name: 'Pavel Nickls jr.',
          //           age: 12,
          //           status: 'London No. 1 Lake Park',
          //         },
          //         {
          //           key: 503,
          //           name: 'Alina Nickls sr.',
          //           age: 19,
          //           status: 'London No. 4 Lake Park',
          //         },
          //       ],
          //     },
          //   ],
          // },
          // {
          //   key: 600,
          //   name: 'Nick Donald',
          //   age: 45,
          //   status: 'London No. 2 Lake Park',
          //   children: [
          //     {
          //       key: 601,
          //       name: 'Alexsa Donald',
          //       age: 34,
          //       status: 'London No. 2 Lake Park',
          //       children: [
          //         {
          //           key: 602,
          //           name: 'Marta Donald jr.',
          //           age: 24,
          //           status: 'London No. 1 Lake Park',
          //         },
          //         {
          //           key: 603,
          //           name: 'Alex Donald sr.',
          //           age: 19,
          //           status: 'London No. 4 Lake Park',
          //         },
          //       ],
          //     },
          //   ],
          // },
          // {
          //   key: 700,
          //   name: 'Jo Snider',
          //   age: 26,
          //   status: 'London No. 2 Lake Park',
          //   children: [
          //     {
          //       key: 701,
          //       name: 'Jo Snider',
          //       age: 22,
          //       status: 'London No. 2 Lake Park',
          //       children: [
          //         {
          //           key: 702,
          //           name: 'Jaems Snider jr.',
          //           age: 24,
          //           status: 'London No. 1 Lake Park',
          //         },
          //         {
          //           key: 703,
          //           name: 'Jin Snider sr.',
          //           age: 19,
          //           status: 'London No. 4 Lake Park',
          //         },
          //       ],
          //     },
          //   ],
          // },
          // {
          //   key: 800,
          //   name: 'Jon Brown',
          //   age: 26,
          //   status: 'London No. 2 Lake Park',
          //   children: [
          //     {
          //       key: 801,
          //       name: 'Kitana Brown',
          //       age: 22,
          //       status: 'London No. 2 Lake Park',
          //       children: [
          //         {
          //           key: 802,
          //           name: 'Cris Brown jr.',
          //           age: 24,
          //           status: 'London No. 1 Lake Park',
          //         },
          //         {
          //           key: 803,
          //           name: 'Jon Brown sr.',
          //           age: 19,
          //           status: 'London No. 4 Lake Park',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        pagination: { ...pagination, total: 8 },
      });
    }, 1000);
  });
};

export const getEditableTableData = (pagination: Pagination): Promise<EditableTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          // {
          //   key: 1,
          //   name: `Edward`,
          //   age: 32,
          //   status: `London Park no.1`,
          // },
          // {
          //   key: 2,
          //   name: `Alex`,
          //   age: 45,
          //   status: `London Park no.2`,
          // },
          // {
          //   key: 3,
          //   name: `Niko`,
          //   age: 21,
          //   status: `London Park no.3`,
          // },
          // {
          //   key: 4,
          //   name: `Josh`,
          //   age: 18,
          //   status: `London Park no.4`,
          // },
          // {
          //   key: 5,
          //   name: `Jo`,
          //   age: 15,
          //   status: `Minsk Park no.1`,
          // },
          // {
          //   key: 6,
          //   name: `Jaimi`,
          //   age: 18,
          //   status: `London Park no.2`,
          // },
          // {
          //   key: 7,
          //   name: `Alexa`,
          //   age: 24,
          //   status: `London Park no.6`,
          // },
          // {
          //   key: 8,
          //   name: `Donald`,
          //   age: 27,
          //   status: `London Park no.7`,
          // },
          // {
          //   key: 9,
          //   name: `Pavel`,
          //   age: 17,
          //   status: `London Park no.9`,
          // },
          // {
          //   key: 10,
          //   name: `Nick`,
          //   age: 18,
          //   status: `London Park no.1`,
          // },
          // {
          //   key: 11,
          //   name: `Dasha`,
          //   age: 25,
          //   status: `London Park no.2`,
          // },
          // {
          //   key: 12,
          //   name: `Alex`,
          //   age: 27,
          //   status: `London Park no.3`,
          // },
          // {
          //   key: 13,
          //   name: `Vic`,
          //   age: 29,
          //   status: `London Park no.2`,
          // },
          // {
          //   key: 14,
          //   name: `Natalia`,
          //   age: 25,
          //   status: `London Park no.4`,
          // },
          // {
          //   key: 15,
          //   name: `Zack`,
          //   age: 27,
          //   status: `London Park no.1`,
          // },
          // {
          //   key: 16,
          //   name: `Jack`,
          //   age: 31,
          //   status: `London Park no.4`,
          // },
        ],
        pagination: { ...pagination, total: 16 },
      });
    }, 1000);
  });
};
