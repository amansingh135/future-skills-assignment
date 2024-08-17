import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeToFalse, changeToTrue } from "../slices/modalOpenSlice";

const AddRequestModal = ({ createRequest }) => {
  const [form] = Form.useForm();
  const modalView = useSelector((state) => state.modal.value);
  console.log(modalView);

  const dispatch = useDispatch();
  return (
    <Modal
      title="Submit request"
      visible={modalView}
      onCancel={() => dispatch(changeToFalse())}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        onFinish={createRequest}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input placeholder="Enter the title" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter the description" />
        </Form.Item>
        <div className="flex justify-end items-center gap-5">
          <Button key="submit" type="primary" htmlType="submit">
            Submit
          </Button>
          <Button key="cancel" onClick={() => dispatch(changeToFalse())}>
            Cancel
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddRequestModal;
