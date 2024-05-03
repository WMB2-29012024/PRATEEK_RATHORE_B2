
const ButtonClicked = (prop) => {
    const { btnclick } = prop;
    return (
        <div>
            <button onClick={btnclick}>Click</button>
        </div>
    )
}
export default ButtonClicked;