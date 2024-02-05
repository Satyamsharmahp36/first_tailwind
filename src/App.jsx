import Footer from './component/Footer'
import NavBar from './component/NavBar'


function App() {

  return (
    <>
      <NavBar/>
      <button className='font-medium bg-blue-500 p-3 text-white m-4 rounded-lg mt-20 ml-20'>
        Button One
      </button>
      <div className='bg-red-200 p-3 mt-8 mr-8 ml-8 border-red-600 border-2 text-left rounded-lg'>
        <span className='p-2 font-bold'>Alert !</span>
        This is awesome !
      </div>

    <div className='flex justify-center m-8'>
      <div className='text-center shadow-2xl rounded-md flex flex-row'>
      <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" alt="" className='h-10 m-3' />
      <div>
        <h1 className='m-3'>Kalvium Store</h1>
        <h2 className='text-gray-500 m-3'>You have a new Courses</h2>
        </div>
      </div>
    </div>

      <Footer/>
    </>
  )
}

export default App
