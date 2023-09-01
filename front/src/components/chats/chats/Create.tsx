import { Modal, Form, Input, message, Spin } from "antd";

import SubmitButton from "components/Buttons/Submit";
import { useEffect, useState } from "react";
import { useCreateChatMutation } from "redux/requests/chats";


function CreateChat(){


  //  states
  const [isLoading, setIsLoading] = useState(false);

  //  hooks
  const [createChat, createResult] = useCreateChatMutation();

  //  handlers
  const handleCreateChat = (data:string)=>{
    setIsLoading(true)
    createChat(data)
  }

  //  side effects
  useEffect(()=>{
    console.log("createResult : ", createResult)

    if(createResult.isError){
      const errorObject:any = createResult.error;
      message.error(errorObject.data.message)
      setIsLoading(false);
    }

    if(createResult.isSuccess){
      message.error("this user not found.")
      setIsLoading(false);
    }
  }, [createResult])

  return(
    <Modal open footer={null} title={<h2>Create New Chat</h2>}>
      <Spin spinning={isLoading}>
        <div className="w-full min-h-10 h-fit mt-12">
          <Form onFinish={handleCreateChat}>
            <Form.Item name="receiver" rules={[{required:true, message: " "}]}>
              <Input size="large" placeholder="type username" />
            </Form.Item>

            <SubmitButton block className="">
              Create
            </SubmitButton>
          </Form>
        </div>
      </Spin>
    </Modal>
  )
}

export default CreateChat;