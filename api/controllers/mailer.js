const nodemailer = require('nodemailer')

async function changePasswordSendEmail(userEmail) {
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'influenceme@outlook.co.il',
            pass: 'Shaked15'
        }
    })
    console.log(userEmail)
    const mailOptions = {
        from: 'influenceme@outlook.co.il',
        to: userEmail,
        subject: 'Influence Me Account',
        html: '<table style="background-color: #2d2d2d;" border="0" width="640" cellspacing="0" cellpadding="0">\n' +
            '<tbody>\n' +
            '<tr>\n' +
            '<td align="center" width="640" height="64">\n' +
            '<h1><span style="color: #ffffff;"><strong><a style="color: #ffffff;">Influence Me </a></strong></span></h1>\n' +
            '</td>\n' +
            '</tr>\n' +
            '</tbody>\n' +
            '</table>\n' +
            '<table style="background-color: #eeeeee;" border="0" width="640" cellspacing="0" cellpadding="0">\n' +
            '<tbody>\n' +
            '<tr>\n' +
            '<td width="20">&nbsp;</td>\n' +
            '<td width="600">\n' +
            '<table border="0" width="600" cellspacing="0" cellpadding="0" align="center">\n' +
            '<tbody>\n' +
            '<tr>\n' +
            '<td style="font-size: 12px; line-height: 12px;" height="12">&nbsp;</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td align="center"><img class="CToWUd" style="display: block; margin: 0 auto;" src="https://ci4.googleusercontent.com/proxy/JPUeAzPL7WAGweI2mqtxHF0c0e44XI0bzPnnkbu7Q1EaNCx179KuOrHSenbalOIVqYmxyFLWEKeH-352ENu7FD5vRKEzXvK3VyNKtExmP-RtZ9hW6VnPMpsXVaLuhEZr-8pfNw=s0-d-e1-ft#https://asmktnoteunpd.blob.core.windows.net/content/images/main-icon-password.png" width="40" align="center" border="0" /></td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-size: 12px; line-height: 12px;" height="12">&nbsp;</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-family: \'FuturaPTHeavy-Reg\',Futura,Arial,sans-serif; color: #2d2d2d; text-transform: uppercase; font-weight: bold; font-size: 16px; line-height: 22px; letter-spacing: 0.6px;" align="center"><span style="font-family: FuturaPTHeavy-Reg, Futura, Arial, sans-serif;"> Password changed </span></td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-size: 12px; line-height: 12px;" height="12">&nbsp;</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-family: \'FuturaPTBook-Reg\',Futura,Arial,sans-serif; color: #2d2d2d; font-size: 14px; line-height: 20px; letter-spacing: 0.6px;" align="center"><span style="font-family: FuturaPTBook-Reg, Futura, Arial, sans-serif;"> Hey, your password&rsquo;s now been changed, so you can get back to doing what you came here for </span></td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-size: 24px; line-height: 24px;" height="24">&nbsp;</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-family: \'FuturaPTBook-Reg\',Futura,Arial,sans-serif; color: #2d2d2d; font-size: 12px; line-height: 20px; letter-spacing: 0.6px;" align="center"><span style="font-family: FuturaPTBook-Reg, Futura, Arial, sans-serif;"> Thanks </span></td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-family: \'FuturaPTHeavy-Reg\',Futura,Arial,sans-serif; color: #2d2d2d; font-size: 12px; line-height: 20px; letter-spacing: 0.6px; font-weight: bold;" align="center"><span style="font-family: FuturaPTHeavy-Reg, Futura, Arial, sans-serif;"> The Influence Me team </span></td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-size: 24px; line-height: 24px;" height="24">&nbsp;</td>\n' +
            '</tr>\n' +
            '</tbody>\n' +
            '</table>\n' +
            '</td>\n' +
            '<td width="20">&nbsp;</td>\n' +
            '</tr>\n' +
            '</tbody>\n' +
            '</table>\n' +
            '<table style="background-color: #2d2d2d;" border="0" width="640" cellspacing="0" cellpadding="0">\n' +
            '<tbody>\n' +
            '<tr>\n' +
            '<td width="20">&nbsp;</td>\n' +
            '<td width="600">\n' +
            '<table border="0" width="600" cellspacing="0" cellpadding="0" align="center">\n' +
            '<tbody>\n' +
            '<tr>\n' +
            '<td style="font-size: 24px; line-height: 24px;" height="24">&nbsp;</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-family: \'FuturaPTBook-Reg\',Futura,Arial,sans-serif; color: #dddddd; font-size: 10px; line-height: 18px; letter-spacing: 0.6px;" align="center"><span style="font-family: FuturaPTBook-Reg, Futura, Arial, sans-serif;"> This inbox is not attended so please don&rsquo;t reply to this email. This is a service email. You will receive these no matter what your marketing communication preferences are </span></td>\n' +
            '</tr>\n' +
            '<tr>\n' +
            '<td style="font-size: 32px; line-height: 32px;" height="32">&nbsp;</td>\n' +
            '</tr>\n' +
            '</tbody>\n' +
            '</table>\n' +
            '</td>\n' +
            '<td width="20">&nbsp;</td>\n' +
            '</tr>\n' +
            '</tbody>\n' +
            '</table>'
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}


async function forgotPasswordSendEmail(email, subject, link) {

    // create reusable transporter object
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'influenceme@outlook.co.il',
            pass: 'Shaked15'
        }
    })

    //const source = fs.readFileSync(path.join(__dirname, template), "utf8");
    //const compiledTemplate = handlebars.compile(source);
    const mailOptions = {
        from: 'influenceme@outlook.co.il',
        to: email,
        subject: subject,
        html: `<table style="background-color: #2d2d2d;" border="0" width="640" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                <td align="center" width="640" height="64">
                <h1><span style="color: #ffffff;"><strong><a style="color: #ffffff;">Influence Me </a></strong></span></h1>
                </td>
                </tr>
                </tbody>
                </table>
                <table style="background-color: #eeeeee;" border="0" width="640" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                <td width="20">&nbsp;</td>
                <td width="600">
                <table style="height: 90px;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr style="height: 12px;">
                <td style="font-size: 12px; line-height: 12px; height: 12px; width: 596px;" height="12">&nbsp;</td>
                </tr>
                <tr style="height: 40px;">
                <td style="height: 40px; width: 596px;" align="center"><img class="CToWUd" style="display: block; margin: 0 auto;" src="https://ci4.googleusercontent.com/proxy/JPUeAzPL7WAGweI2mqtxHF0c0e44XI0bzPnnkbu7Q1EaNCx179KuOrHSenbalOIVqYmxyFLWEKeH-352ENu7FD5vRKEzXvK3VyNKtExmP-RtZ9hW6VnPMpsXVaLuhEZr-8pfNw=s0-d-e1-ft#https://asmktnoteunpd.blob.core.windows.net/content/images/main-icon-password.png" width="40" align="center" border="0" /></td>
                </tr>
                <tr style="height: 12px;">
                <td style="font-size: 12px; line-height: 12px; height: 12px; width: 596px;" height="12">&nbsp;</td>
                </tr>
                <tr style="height: 24px;">
                <td style="font-family: FuturaPTHeavy-Reg, Futura, Arial, sans-serif; color: #2d2d2d; text-transform: uppercase; font-weight: bold; font-size: 16px; line-height: 24px; letter-spacing: 0.6px; height: 24px; width: 596px;" align="center"><span style="font-family: 'FuturaPTHeavy-Reg', Futura, Arial, sans-serif;"> Your password reset link is ready </span></td>
                </tr>
                <tr style="height: 12px;">
                <td style="font-size: 12px; line-height: 12px; height: 12px; width: 596px;" height="12">&nbsp;</td>
                </tr>
                <tr style="height: 20px;">
                <td style="font-family: FuturaPTBook-Reg, Futura, Arial, sans-serif; color: #2d2d2d; font-size: 14px; line-height: 20px; letter-spacing: 0.6px; height: 20px; width: 596px;" align="center"><span style="font-family: 'FuturaPTBook-Reg', Futura, Arial, sans-serif;"> Just click the link to reset it &ndash; but be quick, it expires in 1 hour. </span></td>
                </tr>
                <tr style="height: 24px;">
                <td style="font-size: 24px; line-height: 24px; height: 24px; width: 596px;" height="24">&nbsp;</td>
                </tr>
                <tr style="height: 303px;">
                <td style="height: 303px; width: 596px;">
                <table style="background-color: #ffffff;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr>
                <td width="20">&nbsp;</td>
                <td width="560">
                <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr>
                <td style="font-size: 24px; line-height: 24px;" height="24">&nbsp;</td>
                </tr>
                <tr>
                <td style="font-family: 'FuturaPTHeavy-Reg',Futura,Arial,sans-serif; color: #2d2d2d; text-transform: uppercase; font-weight: bold; font-size: 14px; line-height: 20px; letter-spacing: 0.6px;" align="left"><span style="font-family: 'FuturaPTHeavy-Reg', Futura, Arial, sans-serif;"> Want to make your new password strong? </span></td>
                </tr>
                <tr>
                <td style="font-size: 12px; line-height: 12px;" height="12">&nbsp;</td>
                </tr>
                <tr>
                <td style="border-top: solid #d0d0d0 1px; font-size: 1px;" align="center">&nbsp;</td>
                </tr>
                <tr>
                <td style="font-size: 24px; line-height: 24px;" height="24">&nbsp;</td>
                </tr>
                <tr>
                <td style="font-family: 'FuturaPTBook-Reg',Futura,Arial,sans-serif; color: #2d2d2d; font-size: 14px; line-height: 20px; letter-spacing: 0.6px;" align="left"><span style="font-family: 'FuturaPTBook-Reg', Futura, Arial, sans-serif;"> The advice right now is to make your password a combination of three memorable but random words. Obvs, your password has to be personal just to you. But, it&rsquo;s best not to use anything to do with Influence Me, your family or something about you that can easily be found on social media. Pick something unique for your Influence Me account and don&rsquo;t use it anywhere else! </span></td>
                </tr>
                <tr>
                <td style="font-size: 24px; line-height: 24px;" height="24">&nbsp;</td>
                </tr>
                <tr>
                <td>
                <table style="border-collapse: collapse; border-spacing: 0; font-size: 0;" border="0" width="264" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr>
                <td style="background-color: #2d2d2d; border: 2px solid #2d2d2d; padding-top: 10px; padding-bottom: 10px;" align="center" width="264"><a style="color: #ffffff; font-family: 'FuturaPTHeavy-Reg',Futura,Arial,sans-serif; font-size: 12px; line-height: 20px; font-weight: bold; text-align: center; text-decoration: none; text-transform: uppercase; letter-spacing: 0.6px;" href=${link} target="_blank"> <span style="color: #ffffff; font-family: 'FuturaPTHeavy-Reg', Futura, Arial, sans-serif;"> Reset password </span> </a></td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                <tr>
                <td style="font-size: 24px; line-height: 24px;" height="24">&nbsp;</td>
                </tr>
                </tbody>
                </table>
                </td>
                <td width="20">&nbsp;</td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                <tr style="height: 20px;">
                <td style="font-family: FuturaPTBook-Reg, Futura, Arial, sans-serif; color: #2d2d2d; font-size: 12px; line-height: 20px; letter-spacing: 0.6px; height: 20px; width: 596px;" align="center"><span style="font-family: 'FuturaPTBook-Reg', Futura, Arial, sans-serif;"> Thanks, </span></td>
                </tr>
                <tr style="height: 20px;">
                <td style="font-family: FuturaPTHeavy-Reg, Futura, Arial, sans-serif; color: #2d2d2d; font-size: 12px; line-height: 20px; letter-spacing: 0.6px; font-weight: bold; height: 20px; width: 596px;" align="center"><span style="font-family: 'FuturaPTHeavy-Reg', Futura, Arial, sans-serif;"> The Influence Me team </span></td>
                </tr>
                <tr style="height: 24px;">
                <td style="font-size: 24px; line-height: 24px; height: 24px; width: 596px;" height="24">&nbsp;</td>
                </tr>
                </tbody>
                </table>
                </td>
                <td width="20">&nbsp;</td>
                </tr>
                </tbody>
                </table>
                <table style="background-color: #2d2d2d;" border="0" width="640" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                <td width="20">&nbsp;</td>
                <td width="600">
                <table border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr>
                <td style="font-size: 24px; line-height: 24px;" height="24">&nbsp;</td>
                </tr>
                <tr>
                <td style="font-family: 'FuturaPTBook-Reg',Futura,Arial,sans-serif; color: #dddddd; font-size: 10px; line-height: 18px; letter-spacing: 0.6px;" align="center"><span style="font-family: 'FuturaPTBook-Reg', Futura, Arial, sans-serif;"> This inbox is not attended so please don&rsquo;t reply to this email. This is a service email. You will receive these no matter what your marketing communication preferences are. </span></td>
                </tr>
                <tr>
                <td style="font-size: 32px; line-height: 32px;" height="32">&nbsp;</td>
                </tr>
                </tbody>
                </table>
                </td>
                <td width="20">&nbsp;</td>
                </tr>
                </tbody>
                </table>`
    }
    // Send email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

module.exports = {
    changePasswordSendEmail,
    forgotPasswordSendEmail
}
