import sgMail from '@sendgrid/mail'

const sendEmail = async(to,subject,html)=>{
    const msg = {
        to: to, // Change to your recipient
        from: 'rameshpriyait@gmail.com', // Change to your verified sender
        subject: subject,
        text: html,
        html: html,
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    // sgMail
    // .send(msg)
    // .then(() => {
    //     console.log('Email sent')
    // })
    // .catch((error) => {
    //     throw error
    // })
}

const sendWelcomeEmail = async (email,name,type,title,id)=>{
    try {
        let html = `<div>
        <h3>Welcome Mr. ${name},</h3>
        <p>Greetings for the day! Welcome to the Quick Shope Zone ! online shopping ! This is coformation mail.you are successfully login to th 
        !Quick Shope Zone ! online shopping
         <a href='${process.env.WEB_URL}/request/${id}'>here</a>
        </p>
        <div>
            <table>
                <tr>
                    <td>Type:</td>
                    <td>${type}</td>
                </tr>
                <tr>
                    <td>Title:</td>
                    <td>${title}</td>
                </tr>
            </table>
        </div>
        <div>
            --<br>
            Thanks,<br>
            Zen Desk Team
            
        </div>
    </div>`
    await sendEmail(email,'We have received your request',html)
    } catch (error) {
        throw error
    }
}



export default sendWelcomeEmail