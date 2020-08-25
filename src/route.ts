export default [
    {path: "/", controller: "indexController", type: "get"},
    {path: "/encyclopedie", controller: "encyclopedieController", type: "get"},
    {path: "/nous-rejoindre", controller: "nousRejoindreController", type: "get"},
    {path: "/moncompte", controller: "monCompteController", type: "get"},
    {path: "/login", controller: "authController", type: "post"},
    {path: "/logout", controller: "logoutController", type: "get"},
    {path: "/register", controller: "registerController", type: "post"}
]