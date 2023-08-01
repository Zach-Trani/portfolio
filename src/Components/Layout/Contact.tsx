export const Contact = () => {
    return (
        <div className="contact-container">
            <form className="d-flex flex-column">
                <h3>Let's Talk</h3>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                <textarea rows={4}></textarea>
            </form>
        </div>
    )
}