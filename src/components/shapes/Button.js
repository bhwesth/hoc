import withDraggable from "../HOCs/withDraggable";
export default withDraggable((props) => (
    <button
        className="button"
        onMouseDown={props.onMouseDown}
        onMouseMove={props.handleMouseMove}
        onMouseUp={props.onMouseUp}
        onClick={() => console.log("Button was clicked!")}
    >
        Button
    </button>
));
