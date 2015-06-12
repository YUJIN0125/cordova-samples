﻿var app = {

    login: function () {
        if (!window.cordova) {
            var appId = prompt("Enter FB Application ID", "");
            facebookConnectPlugin.browserInit(appId);
        }
        facebookConnectPlugin.login(["email"],
            function (response) { platformAlert(JSON.stringify(response)) },
            function (response) { platformAlert(JSON.stringify(response)) });
    },

    showDialog: function () {
        facebookConnectPlugin.showDialog({ method: "feed" },
            function (response) { platformAlert(JSON.stringify(response)) },
            function (response) { platformAlert(JSON.stringify(response)) });
    },

    apiTest: function () {
        facebookConnectPlugin.api("me/?fields=id,email", ["user_birthday"],
            function (response) { platformAlert(JSON.stringify(response)) },
            function (response) { platformAlert(JSON.stringify(response)) });
    },

    getAccessToken: function () {
        facebookConnectPlugin.getAccessToken(
            function (response) { platformAlert(JSON.stringify(response)) },
            function (response) { platformAlert(JSON.stringify(response)) });
    },

    getStatus: function () {
        facebookConnectPlugin.getLoginStatus(
            function (response) { platformAlert(JSON.stringify(response)) },
            function (response) { platformAlert(JSON.stringify(response)) });
    },

    logout: function () {
        facebookConnectPlugin.logout(
            function (response) { platformAlert(JSON.stringify(response)) },
            function (response) { platformAlert(JSON.stringify(response)) });
    }
};