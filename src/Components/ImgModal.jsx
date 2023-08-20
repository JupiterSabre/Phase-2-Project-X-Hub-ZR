import React from 'react'
import ReactDOM  from 'react-dom'

export default function ImgModal({open,children, onClose}) {

  //STYLING FOR POP UP MODAL
  const POPUP_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000
  }

  const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0.7)"
  }

if (!open) return null
 
  return ReactDOM.createPortal(
    <div onDoubleClick={onClose}>
    <div style={OVERLAY_STYLE} />
    <div style={POPUP_STYLE}>
        {children}
      
    </div>,
    </div>,
    document.getElementById("portal")
  )

  
}
