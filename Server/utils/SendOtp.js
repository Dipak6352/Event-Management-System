const accountSid = "AC4d22a27d2c3ed1f1d54215a6530b3da5";
const authToken = "bf15446e3ce27da3d52dbd841c5a487f";
const client = require("twilio")(accountSid, authToken);

exports.sendOtp = async (mobile_no, msg) => {
  try {
    const message = await client.messages.create({
      to: `+91 ${mobile_no}`,
      from: "+12512921508",
      body: msg,
    });
    return { success: true, sid: message.sid };
  } catch (error) {
    return { success: false, error };
  }
};