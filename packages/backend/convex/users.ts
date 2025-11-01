import {query, mutation} from "./_generated/server";

export const getMany = query({
    args:{},
    handler:async (ctx) =>{
        const users = await ctx.db.query("users").collect();
        return users;
    }
})

export const userMutation = mutation({
    args:{

    },
    handler:async(ctx)=>{
        const identity = await ctx.auth.getUserIdentity();
        if(identity === null){
            throw new Error("Not Authenticated")
        }
        const orgId = identity.orgId as string;
        if(!orgId){
            throw new Error("Invalid Organization Id")
        }
        const userId = await ctx.db.insert("users",{
            name:"Kunal"
        });
        return userId;
    }
})