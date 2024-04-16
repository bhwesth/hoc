import withDraggable from "../HOCs/withDraggable";
export default withDraggable((props) => (
    <div
        className="box"
        onMouseDown={props.onMouseDown}
        onMouseMove={props.handleMouseMove}
        onMouseUp={props.onMouseUp}
    >
        Box
    </div>
));
