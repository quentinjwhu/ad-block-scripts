// Tonghuashun Unified Ad Block Script
// Dispatches interception logic based on request URL

let url = $request.url;
let body = $response.body;

try {
    let obj = JSON.parse(body);

    // Scenario 1: Splash ad (stat domain + kaiping path)
    if (url.includes("stat.10jqka.com.cn") && url.includes("kaiping")) {
        if (obj.data) {
            obj.data.ads = [];
            obj.data.splash = null;
            obj.data.kaiping = null;
            obj.data.list = [];
        }
    }

    // Scenario 2: Ad API endpoint (adm domain, getads.php)
    else if (url.includes("adm.10jqka.com.cn") && url.includes("getads")) {
        if (obj.data) obj.data = [];
        if (obj.ads) obj.ads = [];
        if (obj.list) obj.list = [];
    }

    // Scenario 3: In-feed ads (ad/ads/dsp/adapi subdomains)
    else if (/^https?:\/\/(ad|ads|dsp|adapi)\./.test(url)) {
        if (obj.data && obj.data.list) {
            obj.data.list = obj.data.list.filter(function(item) {
                return item.type !== "ad"
                    && item.item_type !== "ad"
                    && !item.is_ad
                    && !item.ad_tag
                    && !item.ad_url;
            });
        }
    }

    // Fallback: Clear common ad fields for unmatched requests
    else {
        if (obj.data && obj.data.ads) obj.data.ads = [];
        if (obj.ads) obj.ads = [];
    }

    $done({ body: JSON.stringify(obj) });

} catch (e) {
    // Non-JSON response, return empty body
    $done({ body: "" });
}
