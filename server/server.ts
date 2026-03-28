import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './src/routers/user.router';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config()
 
const server = createHTTPServer({
  router: appRouter,
  basePath: '/trpc/',
  middleware: cors({
    origin: "http://localhost:3000",
    credentials: true
  })
  // createContext({ req, res }) {
  //   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  //   res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "Content-Type, Authorization"
  //   );
  //   res.setHeader("Access-Control-Allow-Credentials", "true");


  //   if (req.method === "OPTIONS") {
  //     res.writeHead(204); 
  //     res.end();
  //     return {};
  //   }

  //   return {};
  // },
});



server.listen(4000, () => {
    console.log('server running');
})