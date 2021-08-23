const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const { usersService } = require('../services');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

passport.use(
  'jwt',
  new Strategy(settings, async (payload, done) => {
    try {
      const _id = payload.id;
      const user = await usersService.findUser({ _id });

      done(null, user);
    } catch (error) {
      done(error);
    }
  })
);
