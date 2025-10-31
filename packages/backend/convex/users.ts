import {query, mutation} from "./_generated/server";
import {v} from "convex/values";

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
        const userId = await ctx.db.insert("users",{
            name:"Kunal"
        });
        return userId;
    }
})