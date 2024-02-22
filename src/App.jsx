import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Have from './components/Header/Have'
import Blog from './components/Blogs/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Have></Have>
      <Blog></Blog>
    </>
  )
}

export default App
