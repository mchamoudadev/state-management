export const initialState = {
    auth: {
        isAuthenticated: false,
        currentUser: null
    },
    users: [
        {
            username: 'mc',
            password: '123',
            role: "admin"
        },
        {
            username: 'razan',
            password: '123',
            role: "user"
        }
    ],
    posts: [],
    comments: []
};


const globalReducer = (state, action) => {

    switch (action.type) {

        case 'REGISTER_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case "LOGIN":
            const user = state.users.find(user => user.username === action.payload.username && user.password === action.payload.password);

            if (user) {
                return {
                    ...state,
                    auth: {
                        isAuthenticated: true,
                        currentUser: user
                    }
                };
            } else {
                return {
                    ...state,
                    auth: {
                        isAuthenticated: false,
                        currentUser: null,
                        authError: true
                    }
                };
            };

        case "LOGOUT": {
            return {
                ...state,
                auth: {
                    isAuthenticated: false,
                    currentUser: null
                }
            };
        }

        // posts

        case "ADD_POST": {
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        }

        case "DELETE_POST": {

            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        }

        case "EDIT_POST": {

            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? {
                    ...action.payload, author: post.author
                } : post)
            };
        }
        default:
            throw new Error("Invalid action type: ", action.type);
    }

};

export default globalReducer;
