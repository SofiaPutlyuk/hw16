import { Fragment, useEffect, useState } from "react"
import './modal.css'
import { FaSmileBeam } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
export const ModalFeedback = () => {
    const [show, setShow] = useState(false)
    const [feedback, setFeedback] = useState(() => {
        return localStorage.getItem("feedbackWrite") || ""
    })
    const handleOpen = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    const handleTextarea = (e) => {
        setFeedback(e.target.value)
    }
    useEffect(() => {
        localStorage.setItem("feedbackWrite", feedback)
    }, [feedback])
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setShow(false)
            }

        }
        if (show) {
            document.addEventListener("keydown", handleKeyDown)
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [show])

    return (
        <Fragment>
            <button onClick={handleOpen} className="btnSmile">Share with your opinion <FaSmileBeam className="icon-smile"/></button>
            {show && (
                <div className="overlay" >
                    <div className="modal" id="modal">
                        <button onClick={handleClose} className="btnClose"><IoIosCloseCircleOutline className="icon-close"/></button>
                        <textarea placeholder="Leave your feedback" onClick={handleTextarea}></textarea>
                        {feedback.trim() === "" ? (
                            <p>Please enter your feedback</p>
                        ) : (
                            <p>Thank you for your feedback!</p>
                        )}

                    </div>
                </div>
            )}


        </Fragment>
    )
}