import React, { useRef } from 'react';
import { Modal, Form, Input, DatePicker, InputNumber, Button, notification } from 'antd';
import moment from 'moment';
import { io, Socket } from 'socket.io-client';

interface AddModalProps {
  visible: boolean;
  onCancel: () => void;
}
const host = 'http://localhost:3000';

const AddModal: React.FC<AddModalProps> = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const socket = useRef<Socket | undefined>(undefined);
  socket.current = io(host);
  const handleAddNewItem = () => {
    form.validateFields().then((values) => {
      console.log('New item data:', values);
      const data = {
        create_At: values?.create_at.format('DD/MM/YYYY'),
        count: values?.count,
        payload: values?.payload,
      };
      socket.current?.emit('send_request', {
        create_At: values?.create_at.format('DD/MM/YYYY'),
        count: values?.count,
        payload: values?.payload,
        sid: socket.current.id,
      });
      notification.success({ message: `Gửi yêu cầu đặt xe thành công!` });
      console.log('data', data);
      onCancel(); // Đóng modal sau khi thêm mới
    });
  };
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  return (
    <Modal
      title="Đặt xe"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" type="text" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="add" type="primary" onClick={handleAddNewItem} style={{ padding: '5px', height: '36px' }}>
          Thêm mới
        </Button>,
      ]}
    >
      <Form form={form} layout="horizontal" {...layout}>
        <Form.Item
          name="create_at"
          label="Ngày yêu cầu"
          rules={[{ required: true, message: 'Ngày yêu cầu là bắt buộc' }]}
        >
          <DatePicker defaultValue={moment()} style={{ width: '100%', height: '35px' }} />
        </Form.Item>

        <Form.Item name="count" label="Số xe" rules={[{ required: true, message: 'Số xe là bắt buộc' }]}>
          <InputNumber style={{ width: '100%', height: '35px' }} />
        </Form.Item>

        <Form.Item name="payload" label="Tải trọng" rules={[{ required: true, message: 'Tải trọng là bắt buộc' }]}>
          <InputNumber style={{ width: '100%', height: '35px' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddModal;
