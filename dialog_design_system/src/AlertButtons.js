import './AlertButtons.css'

function AlertButtons({ show, setShow }) {

  return (
      <div className="alert-buttons">
        <button className='warning-button' onClick={() => setShow('warning')}>Warning</button>
        <button className='ok-button' onClick={() => setShow('ok')}>Ok</button>
        <button className='error-button' onClick={() => setShow('error')}>Error</button>
    </div>
  )
}
export default AlertButtons


