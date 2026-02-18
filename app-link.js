function openApp(type, options = {}) {

    var now = Date.now();
    var deepLink = "";
    var webLink = "";

    switch (type) {

        case "zalo":
            var phone = options.phone || "";
            var message = options.message || "";
            deepLink = "zalo://conversation?phone=84337535729" + phone;
            webLink = "https://zalo.me/84337535729" + phone + "?text=" + encodeURIComponent(message);
            break;

        case "facebook":
            var username = options.username || "";
            deepLink = "fb://facewebmodal/f?href=https://www.facebook.com/ng.huy.955351" + username;
            webLink = "https://www.facebook.com/ng.huy.955351" + username;
            break;

        case "messenger":
            var user = options.username || "";
            deepLink = "fb-messenger://user-thread/" + user;
            webLink = "https://m.me/" + user;
            break;

        case "instagram":
            var ig = options.username || "";
            deepLink = "instagram://user?username=nyuh06z" + ig;
            webLink = "https://instagram.com/nyuh06z" + ig;
            break;

        case "x":
            var xuser = options.username || "";
            deepLink = "twitter://user?screen_name=" + xuser;
            webLink = "https://x.com/" + xuser;
            break;

        case "feishu":
            deepLink = "lark://client/chat/open";
            webLink = options.url || "";
            break;

        default:
            return;
    }

    // thử mở app
    window.location = deepLink;

    // fallback nếu không mở được
    setTimeout(function () {
        if (Date.now() - now < 2000) {
            window.location = webLink;
        }
    }, 1500);
}
