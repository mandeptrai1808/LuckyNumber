import React, {useEffect} from 'react'
import {Modal,Button, Checkbox, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

export default function ModelTemplate() {

    const dispatch = useDispatch();
    const {showModel} = useSelector(state => state.DataNumberReducer); 

    const [form] = Form.useForm();

    let dataGame = localStorage.getItem("dataGame");
    dataGame = dataGame && JSON.parse(dataGame);

    if(!dataGame) dataGame = {
        hash: 123,
        numberOfNum: 4,
        sizeOfList: 100,
      }

    useEffect(() => {
      form.setFieldsValue({
        hash: dataGame.hash,
        numberOfNum: dataGame.numberOfNum,
        sizeOfList: dataGame.sizeOfList,
      })
    }, [])

  return (
    <div>
         <Modal title="Game Setting" open={showModel} footer={false}  onCancel={() => {
           dispatch({type: "CLOSE_MODEL"})
         }}>
       <Form
       form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={(value) => {
        var temp = [];
        for(var i = 1; i < value.sizeOfList; i++){
            let num = (1808*value.hash*i) % Math.pow(10, value.numberOfNum);
            if (num < Math.pow(10, value.numberOfNum-1)) num += Math.pow(10, value.numberOfNum-1);
            temp.push(num);
        }
        value = {
            ...value, data: temp
        }
        localStorage.setItem(
            "dataGame",
            JSON.stringify((value))
          );
        dispatch({type: "GET_DATAGAME", content: value})
        dispatch({type: "CLOSE_MODEL"})
        window.location.reload();
      }}
    //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Number of Tickets"
        name="sizeOfList"
        rules={[{ required: true, message: 'Please input Number of tickets!' }]}
      >
        <Input type='number'/>
      </Form.Item>
      <Form.Item
        label="Number of Digits"
        name="numberOfNum"
        rules={[{ required: true, message: 'Please input Number of Digits!' }]}
      >
        <Input type='number' min={2} max={8}/>
      </Form.Item>

      <Form.Item
        label="Hash to initialization"
        name="hash"
        rules={[{ required: true, message: 'Please input hash!' }]}
      >
        <Input type='number'/>
      </Form.Item>

    
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Save 
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </div>
  )
}
