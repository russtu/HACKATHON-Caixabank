import './AlertBox.css'

function Box(props) {
  return (
    <div className="box">
      {props.icon}
      <button className="x" onClick={() => props.setShow(null)}>X</button>
      <h1>{props.alertTitle}</h1>
      <p>{props.alertDescription}</p>
      <div className="dialog-buttons">
        {props.buttonDelete &&
          <button className="button-delete-close" onClick={() => props.setShow(null)}>{props.buttonDelete}</button>}
        {props.buttonCloseTag &&
          <button className="button-delete-close" onClick={() => props.setShow(null)}>{props.buttonCloseTag}</button>}
        {props.buttonCancel &&
          <button className="button-cancel" onClick={() => props.setShow(null)}>{props.buttonCancel}</button>}
      </div>
    </div>
  )
}
export default Box




// function Box({show,setShow,props}) {
//   return (
//     <div>
//     <p>{show}</p>
//     </div>
//   )
// }