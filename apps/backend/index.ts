import express from 'express';
import {prisma} from './db';
import {signupSchema, signinSchema, CreateAvatarSchema} from './types';

const app = express();

app.post('/api/v1/signup', async (req, res) => {
    const { success, data } = signupSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({ error: 'Invalid Credentials' });
    }

    const user = await prisma.user.create({
        data: {
            username : data.username,
            password : data.password
        }
    })
    res.json({id: user.id});
});

app.post('/api/v1/signin', async (req, res) => {
    const { success, data} = signinSchema.safeParse(req.body);

    if(!success) {
        return res.status(400).json({error: 'Invalid Credentials'});
    }

    const user = await prisma.user.findUnique({
        where: {
            username: data.username
        }
    });

    if (!user) {
        return res.status(400).json({error: 'Invalid Credentials'});
    }

    // const isMatch = await bcrypt.compare(data.password, user.password);
    res.json({id: user.id});
});

app.post('/api/v1/avatar', (req, res) => {
    const {success, data} = CreateAvatarSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({error: 'Invalid Avatar data'});
    }

    
});

app.post('/api/v1/video', (req, res) => {
    res.json({});
});

app.get('/api/v1/video/:videoId', (req, res) => {
    res.json({});
});

app.get('/api/v1/videos', (req, res) => {
    res.json({});
});

app.get('/api/v1/me', (req, res) => {
    res.json({});
});

app.get('/api/v1/models', (req, res) => {
    res.json({});
});

app.get('/api/v1/avatar/:avatarId', (req, res) => {
    res.json({});
});

app.get('/api/v1/avatars', (req, res) => {
    res.json({});
});

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});