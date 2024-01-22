// import { Greeting } from "./components/greeting/Greeting";
// import { Message } from "./components/message/Message"
// import { Button } from "./components/button/Button";
import { Book } from "./components/Book/Book";
import Object from "./book";


export const App = () => {
  return (
    <Book
      tittle={Object.title}
      director={Object.director}
      raiting={Object.rating}
    />
  )
}
{/* <Greeting name = 'викладач від Бога💋'></Greeting>
      <Message text='Ти зе бест🤌🏻'></Message>
      <Button></Button> */}