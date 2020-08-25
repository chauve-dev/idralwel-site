export default [
    //{path: "*", controller: "indexController", type: ['get'], exception: ['login', 'test']},
    { path: "/moncompte", controller: "authController", type: ['get'] },
    { path: "/encyclopedie", controller: "authController", type: ['get'] }
]