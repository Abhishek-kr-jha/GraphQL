
import {gql} from "apollo-server";

const typeDefs = gql`
  type Query{
    users:[user]
    user(id:ID!):user
    quotes:[Quote]
    iquote(by:ID!):[Quote]
}
type user{
    id: ID!
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quote]

}
type Quote{
    name:String
    by:ID
}

`
export default  typeDefs;