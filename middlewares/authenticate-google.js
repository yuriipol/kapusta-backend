const passport = require("passport");
const { Strategy } = require("passport-google-oauth2");

const { User } = require("../models/user");
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  BASE_URL,
} = process.env;

const callbackURL = `${BASE_URL}${GOOGLE_CALLBACK_URL}`;

const googleParams = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL,
  passReqToCallback: true,
};

const googleCallback = async (
  profile,
  done
) => {
  try {
    const { email, picture } = profile;
    const user = await User.findOne({ email });
    if (user) {
      return done(null, user);
    }

    const newUser = await User.create({ email, avatarURL: picture });
    done(null, newUser);
  } catch (error) {
    done(error, false);
  }
};

const googleStrategy = new Strategy(googleParams, googleCallback);

passport.use("google", googleStrategy);

module.exports = passport;
