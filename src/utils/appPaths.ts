export const appPaths = {
    home: '/',
    contentRoot: '/',
    character: '/character/:id',
    location: '/location/:id',
    episode: '/episode/:id',
    category: (name: string) => `/category/${name}`,
}