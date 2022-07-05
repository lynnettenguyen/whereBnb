// backend/routes/api/index.js
const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const profileRouter = require('./profile.js')
const roomsRouter = require('./rooms.js')
const { setTokenCookie } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

// connect restoreUser middleware to the API router
// if current user session is valid, set req.user to the user in the database, otherwise set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/profile', profileRouter)
router.use('/rooms', roomsRouter)

// will test the restoreUser middleware and check whether or not the req.user key has been populated by the middleware properly
router.get(
    '/restore-user',
    (req, res) => {
        return res.json(req.user);
    }
);

// setTokenCookie will assign token to user
router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
});


router.get('/require-auth', requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);

module.exports = router;
