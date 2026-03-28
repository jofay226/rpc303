const users = [
    {id: "1", name: "test1", email: "test1@gmail.com"},
    {id: "2", name: "test2", email: "test2@gmail.com"},
    {id: "3", name: "test3", email: "test3@gmail.com"},
]



export const prisma = {
    findMany: async () => {
        return users
    } ,
    findUnique: async (userId: string) => {
        return users.find((u) => u.id === userId )
    },
    create: async (user: {name: string, email: string}) => {
        const newUser = {
            id: `${users.length + 1}`, 
            name: user.name, 
            email: user.email 
        }
        users.push(newUser)
        return newUser
    }
    // create: ,
    // update: ,
    // delete: ,
}

