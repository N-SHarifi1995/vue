import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);
import api from "../services/api";
export default new vuex.Store({
    state: {
        video: [],
        tag: [],
        users: [],
        currentuser: {},
        playedvid: [],
        snackbar: { show: false, text: "" }
    },
    mutations: {
        set_vid(state, video) {
            state.video = video;
        },
        play_vid(state, playedvid) {
            state.playedvid = playedvid;
        },
        addplayed(state, videoid) {
            let played = state.playedvid.concat(videoid);
            state.playedvid = played;
            window.localStorage.playedvideo = JSON.stringify(played);
        },
        set_tag(state, tags) {
            state.tag = tags;
        },
        create_vid(state, videoo) {
            let videose = state.video.concat(videoo);

            state.video = videose;
            console.log(state.video);
        },
        delet_vid(state, vidid) {
            let video = state.video.filter((vid) => vid.id !== vidid);
            state.video = video;
        },
        edit_vid(state, video) {
            state.video.forEach((vid) => {
                if (vid.id == video.id) {
                    vid = video;
                }
            });
        },
        set_users(state, users) {
            state.users = users;

        },
        log_out(state) {
            state.currentuser = {};
            window.localStorage.currentuser = JSON.stringify({})
        },
        set_currentusser(state, user) {
            state.currentuser = user;
            window.localStorage.currentuser = JSON.stringify(user);
            console.log(window.localStorage.currentuser)
        },
        set_snackbar(state, snackbar) {
            state.snackbar = snackbar
        }
    },
    actions: {
        async loader({ commit }) {
            let response = await api().get("/users");
            let videos = response.data;
            videos.forEach((v) => {
                v.tag = [v.address.city, v.address.zipcode, "user1", "user2"];
            });
            commit("set_vid", videos);
            let playvid = JSON.parse(window.localStorage.playedvideo);
            let tags = videos.data
                .filter((i) => i.street !== null)
                .map((t) => t.address.city);

            commit("play_vid", playvid);
            commit("set_tag", tags);
        },
        markplayed({ commit }, videoid) {
            commit("addplayed", videoid);
        },
        async createvid({ commit }, video) {
            let response = await api().post("/users", video);
            console.log(response.data);
            let savesvid = response.data;
            commit("create_vid", savesvid);
            return savesvid;
        },
        async deletvid({ commit }, vidid) {
            let response = await api().delete("/users/$(vidid)");
            if (response.status == 200 || response.status == 202) {
                commit("delet_vid", vidid);
            }
        },
        async savevideo({ commit }, videoo) {
            let response = await api().put("/users/$(videoo.id)", videoo);
            let newvid = response.data;
            console.log(newvid);
            commit("edit_vid", newvid);
            return newvid;
        },
        async loadusers({ commit }) {
            let response = await api().get("/users");
            commit("set_users", response.data);
            let user = JSON.parse(window.localStorage.currentuser)
            console.log(user)
            commit('set_currentusser', user)

        },
        async loadcurrentuser({ commit }) {

            let userr = JSON.parse(window.localStorage.currentuser);
            console.log(userr)
            commit('set_currentusser', userr)

        },
        logout({ commit }) {
            alert('hi')
            commit('log_out')
        },
        async login({ commit }, user) {


            try {
                let response = await api().get("/users");
                let videos = response.data;
                console.log(videos);
                let myuser = videos.find(v => v.username == user.username && v.email == user.email);

                if (myuser) {
                    console.log(myuser);
                    commit('set_currentusser', myuser);

                    return myuser;
                }

            } catch {
                alert('hhhh')
                return {
                    error: 'nashod'
                }
            }



        },
        async register({ commit }, user) {


            try {
                let response = await api().post("/users", user);
                let responss = response.data;

                if ((responss.status == 200 || responss.status == 202)) {
                    console.log(responss.username);
                    commit('set_currentusser', responss);
                    return responss;
                }

            } catch {
                alert('hhhh')
                return {
                    error: 'nashod'
                }
            }



        },
        snackbar({ commit }, snackbar) {


            commit('set_snackbar', snackbar)

        },
    },
});