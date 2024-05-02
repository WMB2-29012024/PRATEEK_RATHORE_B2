

const FormSection = ({setInputform}) => {
    const handleFormClick = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        setInputform(e.target.name.value)

        
    }
        return (
            <form action=""  onSubmit={handleFormClick}>
                <input type="text" name="name" />
                <button type='submit'>submit</button>
            </form>
        )
}
    
export default FormSection