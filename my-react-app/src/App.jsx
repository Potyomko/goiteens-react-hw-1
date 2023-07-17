import { Greeting } from "./components/greeting/Greeting";
import { Message } from "./components/message/Message"
import { Button } from "./components/button/Button";

export const App = () => {
  return (
    <>
      <Greeting name = 'викладач від Бога💋'></Greeting>
      <Message text='Ти зе бест🤌🏻'></Message>
      <Button></Button>
    </>
  )
}