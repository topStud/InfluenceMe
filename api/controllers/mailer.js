const nodemailer = require('nodemailer')

async function sendEmail(userEmail) {
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


module.exports = {
    sendEmail
}
