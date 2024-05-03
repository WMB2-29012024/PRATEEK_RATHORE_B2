import ButtonClicked from "./component/Button";

const Task = () => {
    const handleButtonClick = () => {
        alert("Button Clicked")
    }
    return (
        <div>
            <ButtonClicked btnclick={handleButtonClick} />
        </div>
    )
}
export default Task;