
import {quotes , Users} from './fakedb.js';
const resolvers= {
    Query:{
        users:()=>Users,
        user:(_,args)=>Users.find(user=>user.id==args.id),
        quotes:()=>quotes, 
        // iquote:(_,by)=>quotes.filter(quote=>quote.by==id),
      
    },
    user:{
        quotes:(ur)=>quotes.filter(quote=>quote.by== ur.id)
    
   },
}
export default resolvers;