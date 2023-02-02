function MyButton({ command, value }) {
    return (
        <>
            <button onClick={command} >My Button</button>
            <p>{value}</p>
        </>
    )
}
export default MyButton;