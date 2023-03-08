import { useState } from "react"
import styles from "./HotelIlustration.module.css";


export default ({className})=>{
    // const [blik,setBlink] = useState("#334155")

    return(
        <svg 
        className={className}
            width={278} height={435} viewBox="0 0 278 435" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_6_305" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={16} y={0} width={247} height={435}>
            <rect x="16.5488" width="245.87" height={435} fill="#111827" />
            </mask>
            <g mask="url(#mask0_6_305)">
            <rect x="16.5488" width="245.87" height={435} fill="#111827" />
            <path d="M342.405 393.628L26.7931 -50.4348L-51.6172 -106.386L236.413 503.954L342.405 393.628Z" fill="#334155" fillOpacity="0.1" />
            </g>
            <rect y="412.935" width="277.391" height="22.0652" fill="white" />
            <rect className={styles.blink} x={69} y={31} width={27} height={42} fill="#334155" />
            {/* <rect x={69} y={31} width={27} height={42} fill="#334155" /> */}
            <rect x={126} y={31} width={27} height={42} fill="#334155" />
            <rect x={69} y={87} width={27} height={42} fill="#334155" /> 
            <rect x={126} y={87} width={27} height={42} fill="#334155" />
            <rect x={183} y={87} width={27} height={42} fill="#334155" />
            <rect x={69} y={143} width={27} height={42} fill="#334155" />
            <rect x={126} y={143} width={27} height={42} fill="#334155" />
            <rect x={183} y={143} width={27} height={42} fill="#334155" />
            <rect x={69} y={199} width={27} height={42} fill="#334155" />
            <rect x={126} y={199} width={27} height={42} fill="#334155" />
            <rect x={183} y={199} width={27} height={42} fill="#334155" />
            <rect x={69} y={255} width={27} height={42} fill="#334155" />
            <rect x={126} y={255} width={27} height={42} fill="#334155" />
            <rect x={183} y={255} width={27} height={42} fill="#334155" />
            <rect x={183} y={31} width={27} height={42} fill="#334155" />
            <path d="M52.7988 338.098C52.7988 329.814 59.5146 323.098 67.7988 323.098H211.956C220.241 323.098 226.956 329.814 226.956 338.098V412.935H52.7988V338.098Z" fill="#64748B" />
        </svg>
    )
}