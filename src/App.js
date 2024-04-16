import "./App.css";
import Circle from "./components/shapes/Circle";
import Box from "./components/shapes/Box";
import Button from "./components/shapes/Button";
import Draggable from "./components/Draggable"
import MouseClickLog from "./components/MouseClicksLog";

export default () => (
    <div className="app">
        {/* <Circle />
        <Box />
        <Button /> */}
        {/* <Draggable /> */}
        <MouseClickLog />
    </div>
);
