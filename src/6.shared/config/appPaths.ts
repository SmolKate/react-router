export const appPaths = {
    home: '/',
    contentRoot: '/',
    character: '/character/:id',
    location: '/location/:id',
    episode: '/episode/:id',
    login: '/login',
    category: (name: string) => `/category/${name}`,
}