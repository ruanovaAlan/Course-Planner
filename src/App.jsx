import Header from './components/Header'
import Calendar from './components/Calendar'
import DateInput from './components/DateInput'

function App() {

  return (
    <>
      <Header />
      <DateInput />
      <section className='size-4/5 mx-auto mt-24 bg-sky-700'>
        <Calendar />
      </section>
    </>
  )
}

export default App


