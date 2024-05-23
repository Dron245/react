import React from "react"
import './Modal.scss'

export default function Modal ({children}) {
	return <dialog open>{children}</dialog>
}