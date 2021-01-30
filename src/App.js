import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      />
    </div>
  )
}

export default App
