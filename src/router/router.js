import Vue from "vue";
import Router from "vue-router";
import detail from "../components/detail";
import vidlist from "../components/vidlist";
import newvid from "../components/new";
import edite from "../components/editvid";
import users from "../components/users";
import login from "../components/login";
import admin from "../components/Adminn";
import adminvideolist from "../components/adminvisdolist";
import taglist from "../components/taglist";
import registration from "../components/registration";
Vue.use(Router);
export const router = new Router({
    routes: [
        { path: "/", name: "vidlist", component: vidlist },

        {
            path: "/admin",
            name: "admin",
            component: admin,
            children: [{
                    path: "videolistadmin",
                    name: "videolistadmin",
                    component: adminvideolist,
                },
                { path: "users", name: "users", component: users },
                { path: "new", name: "new", component: newvid },
                { path: "edit/:id", name: "edit", component: edite },
            ],
            beforeEnter(to, from, next) {
                let currentuser = JSON.parse(window.localStorage.currentuser);
                if (currentuser && currentuser.id < 3) {
                    next();
                } else {
                    next("/");
                }
            },

        },
        { path: "/login", name: "login", component: login },
        { path: "/registration", name: "registration", component: registration },

        { path: "/video/:id", name: "detail", component: detail },
        { path: "/tag/:id", name: "tag", component: taglist },
    ],
});