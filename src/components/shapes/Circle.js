import { useEffect } from "react";
import withDraggable from "../HOCs/withDraggable";
export default withDraggable((props) => (
    <div
        className="circle"
        onMouseDown={props.onMouseDown}
        onMouseMove={props.handleMouseMove}
        onMouseUp={props.onMouseUp}
    >
        Circle
    </div>
));
