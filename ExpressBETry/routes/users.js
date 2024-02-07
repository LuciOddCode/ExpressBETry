import {getUser,updateUser,addUser,getAllUsers,deleteUser}  from "/database";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await getAllUsers();
    res.json(users);
});

router.get('/:uid', async function (req, res, next) {
    const user = await getUser(req.params.uid);
        res.json(user);
});

router.post('/', async function (req, res, next) {
    const user = await addUser(req.body.uid, req.body.name, req.body.email, req.body.password);
    res.json(user);
});


router.put('/:uid', async function (req, res, next) {
    const user = await updateUser(req.params.uid, req.body.name, req.body.email, req.body.password);
    res.json(user);
});

router.delete('/:uid', async function (req, res, next) {
    const user = await deleteUser(req.params.uid);
    res.json(user);
});


module.exports = router;
