require('dotenv').config();
const session = require('express-session');
const passport = require('passport');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = require('next')({dev});
const handle = app.getRequestHandler();

const userRouter = require('./route/userRouter');
const postRouter = require('./route/postRouter');
const chatRouter = require('./route/chatRouter');


/*** CONNECT TO MONGODB ATLAS ***/ 
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://phuc94:rvrtsHGFttXC5iVY@cluster0.0o4oe.mongodb.net/phuc94?retryWrites=true&w=majority')
    .then((res)=>{
        console.log('>>> Connected to MongoDB!!!')
        app
            .prepare()
            .then(()=>{

                /*** USING EXPRESS ***/
                const express = require('express');
                const expressApp = express();

                /*** ------> USING SOCKET.IO  ***/
                const server = require('http').Server(expressApp);
                const io = require('socket.io')(server);
                /*** SOCKET.IO CONFIG ***/
                const Chat = require('./models/chat.model')
                // Run when client connects
                io.on('connection', socket => {
                    socket.on('joinRoom',({roomId})=>{
                        socket.join(roomId);
                        Chat.findOne({_id: roomId})
                            .then(chat=>{
                                socket.emit('init',{
                                    message:chat.data
                                });
                            })
                        //Wellcone current user
                        socket.emit('message',{
                            message:'Welcome to ChatCord!'
                        });
                        // Broadcast when a user connects
                        socket.broadcast.to(roomId).emit('message', {
                            message:'A user has join the chat!'
                        });
                    })
                    // Listen for chatMessage
                    socket.on('chatMessage', msg => {
                        Chat.findOne({_id: msg.roomId})
                            .then(chat=>{
                                chat.data.push({
                                    userId: msg.userId,
                                    message: msg.message
                                });
                                chat.save()
                                    .then(response=>{
                                        io.to(msg.roomId).emit('message', {message:msg.message,userId:msg.userId,roomId:msg.roomId});
                                    })
                                .catch(err=>console.log(err))
                            })
                            .catch(err=>console.log(err))
                    });

                    // Runs when client disconnects
                    socket.on('disconnect', () => {
                        io.emit('message', {
                            message:'A user has left the chat'
                        });
                    });
                });
                /***  USING SOCKET.IO <------ ***/
                
                
                expressApp.use(express.json({limit: '50mb'}));
                expressApp.use(express.urlencoded({extended:true,limit: '50mb'}));

                /*** EXPRESS SESSION USING MONGODB AS STORAGE ***/
                const MongoStore = require('connect-mongo');
                expressApp.use(session({
                    secret: process.env.SECRET,
                    resave: false,
                    saveUninitialized: true,
                    store: MongoStore.create({ mongoUrl: 'mongodb+srv://phuc94:rvrtsHGFttXC5iVY@cluster0.0o4oe.mongodb.net/phuc94?retryWrites=true', collectionName: 'session' }),
                    cookie: {
                        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day 
                    }
                }));
                console.log('Session done!');

                /*** PASSPORT AUTHENTICATION ***/
                require('./middleware/passport');
                expressApp.use(passport.initialize());
                expressApp.use(passport.session());

                /*** CONSOLE LOG USER ***/
                expressApp.use((req, res, next) => {
                    // console.log(req.session);
                    // console.log(req.user);
                    next();
                });
                
                
                /*** ROUTER ***/
                expressApp.use(userRouter);
                expressApp.use(postRouter);
                expressApp.use(chatRouter);
                

                expressApp.get('*', (req,res)=>{
                    return handle(req,res);
                });
                server.listen(PORT, err =>{
                    if (err) throw err;
                    console.log(`> Ready on ${PORT}`)
                });
            })
            .catch(exception =>{
                console.error(exception.stack);
                process.exit(1);
            })
        })
    .catch((err) => console.log(err));
