import "./App.css";
import Circle from "./components/shapes/Circle";
import Box from "./components/shapes/Box";
import Button from "./components/shapes/Button";
import Draggable from "./components/Draggable";
import MouseClickLog from "./components/MouseClicksLog";
import MouseCoords from "./components/MouseCoords";

export default () => (
    // Kommenter komponenter ud/ind for at se de forskellige
    <div className="app">
        <Circle />
        <Box />
        <Button />
        {/* <Draggable /> */}
        {/* <MouseClickLog /> */}
        {/* <MouseCoords /> */}
    </div>
);
