import "./Contact.css"

export const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact">
            <form>
                <h3>Let's Talk</h3>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                <textarea placeholder="Message" rows={4}></textarea>
            </form>
            </div>
        </div>
    )
}

// <div>
//             <div className="d-flex justify-content-center align-items-end credit-container">
//             Website Design by Zachary Trani ©2023
//             </div>
//         </div>