import { axios } from "./axios";

type Message = {
  userName: string,
  content: string,
  email?: string
}

export const AddMessage = (msg: Message) => 
  axios.post('message/add', msg);

