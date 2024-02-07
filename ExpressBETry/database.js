import mysql from 'mysql2';

import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
}).promise();

export async function addUser(uid,name,email,password)  {
    const [result] = await pool.query(`INSERT INTO user (uId, name, email, password) VALUES (?, ?, ?, ?)`
        , [uid,name,email,password]);

    return result;
}

export async function getUser(uid) {
    const [users] = await pool.query(`SELECT * FROM user WHERE uId = ?`, [uid]);
    return users[0];
}


export async function updateUser(uid, name, email, password) {
    const [result] = await pool.query(`UPDATE user SET name = ?, email = ?, password = ? WHERE uId = ?`, [name, email, password, uid]);

    return result;
}

export async function deleteUser(uid) {
    const [result] = await pool.query(`DELETE FROM user WHERE uId = ?`, [uid]);
    return result;
}

export async function getAllUsers() {
    const [users] = await pool.query(`SELECT * FROM user`);
    return users[0];
}




