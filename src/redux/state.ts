export type usersMessagesDataType = {
    message: string
    id: number
}

export type usersDataType = {
    name: string
    id: number
}

export type dialogsPageType = {
    usersData: usersDataType[]
    usersMessagesData: usersMessagesDataType[]
}

export type postsDataType = {
    message: string
    likeCount: number
    id: number
}

export type profilePageType = {
    postsData: postsDataType[]
}

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}


export const state = {
    profilePage: {
        postsData: [
            {message: 'Hello', likeCount: 15, id: 1},
            {message: 'world', likeCount: 25, id: 2}
        ]
    },
    dialogsPage: {
        usersData: [
            {name: 'User 1', id: 1},
            {name: 'User 2', id: 2},
            {name: 'User 3', id: 3},
            {name: 'User 4', id: 4},
            {name: 'User 5', id: 5},
            {name: 'User 5', id: 6}
        ],
        usersMessagesData: [
            {message: 'Message 1', id: 1},
            {message: 'Message 2', id: 2},
            {message: 'Message 3', id: 3},
            {message: 'Message 4', id: 4},
            {message: 'Message 5', id: 5},
            {message: 'Message 6', id: 6},
        ]
    },
    sideBar: {}
}

