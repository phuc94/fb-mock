require('dotenv').config();
const session = require('express-session');
const passport = require('passport');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = require('next')({dev});
const handle = app.getRequestHandler();


const userRouter = require('./route/userRouter');
const postRouter = require('./route/postRouter');

/*** MONGODB ***/ 
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

                /*** USING SOCKET.IO ***/
                const server = require('http').Server(expressApp);
                const io = require('socket.io')(server);
                // Run when client connects
                io.on('connection', socket => {

                    //Wellcone current user
                    // socket.emit('message',{
                    //     message:'Welcome to ChatCord!'
                    // });

                    // // Broadcast when a user connects
                    // socket.broadcast.emit('message', {
                    //     message:'A user has join the chat!'
                    // });

                    // Runs when client disconnects
                    // socket.on('disconnect', () => {
                    //     io.emit('message', {
                    //         message:'A user has left the chat'
                    //     });
                    // });
                    // Listen to chat message
                    socket.on('chatMessage', msg=>{
                        io.emit('message',msg)
                        console.log(msg);
                    })
                });
                


                expressApp.use(express.json());
                expressApp.use(express.urlencoded({extended:true}));

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

                expressApp.use((req, res, next) => {  // Log session, user
                    // console.log(req.session);
                    // console.log(req.user);
                    next();
                });
                
                
                /*** ROUTER ***/
                expressApp.use(userRouter);
                expressApp.use(postRouter);
                

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







                // const server = express();

                // server.get('/api/shows', function (req,res){
                //     return res.end('We made it!');
                // });

                // // mongoDB
                // server.get('/add-blog', (req,res)=>{
                //     const blog = new Blog({
                //         title: 'test',
                //         snippet: 'test',
                //         body: 'test'
                //     });
                //     blog.save()
                //         .then((result)=>{
                //             res.send(result)
                //         })
                //         .catch((err)=>{console.log(err)});
                // });
                // server.get('/all-blogs',(req,res)=>{
                //     Blog.find()
                //         .then((result)=>{
                //             res.send(result);
                //         })
                //         .catch((err)=>{console.log(err)});
                // });
                // server.get('/single-blog',(req,res)=>{
                //     Blog.findById('61027bab768913295094a876')
                //         .then((result)=>{
                //             res.send(result);
                //         })
                //         .catch((err)=>{console.log(err)});
                // });

                // Base64 upload
                // server.post('/add-img',(req,res)=>{
                //     console.log('Request File: ',req.file);
                //     const imgString = base64Img.base64Sync(req.file.path);
                //     const blog = new Blog({
                //         title: req.body.name,
                //         snippet: req.body.name,
                //         body: req.body.name,
                //         img: imgString
                //     });
                //     blog.save()
                //         .then((result)=>{
                //             res.send(result)
                //         })
                //         .catch((err)=>{console.log(err)});
                // })