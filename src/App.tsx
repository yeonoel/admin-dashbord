import { MainLayout } from "./components/layout/MainLayout/MainLayout"

function App() {

  return (
    <>
      <div>
        <MainLayout children={<h1>Dashboard</h1>} />
        <p className="text-2xl text-center">Dashboard</p>
      </div>
    </>
  )
}

export default App
