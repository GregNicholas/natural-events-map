import spinner from '../assets/loading-spinner.gif'

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading..." />
      <h2>Fetching Data</h2>
    </div>
  )
}

export default LoadingSpinner