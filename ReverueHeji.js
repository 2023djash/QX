/***********************************

> ScriptName        Revenue合集
# ========解锁列表======== #
# > 02 VSCO
https://apps.apple.com/cn/app/id588013838
# > 03 谜底黑胶
https://apps.apple.com/cn/app/id1606306441
# > 04 花样文字
https://apps.apple.com/cn/app/id1438854446
# > 05 车票票
https://apps.apple.com/cn/app/id6446212291
# > 06 TouchRetouch
https://apps.apple.com/cn/app/id373311252
# > 07 方弗相机
https://apps.apple.com/cn/app/id1621425556

[rewrite_local]

# ～ RevenueCat@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/2023djash/QX/main/ReverueHeji.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]

hostname=api.revenuecat.com

***********************************/

var ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
var cuttlefish = {"Attention":"request_date_ms":1662599120248,"request_date":"2022-09-08T01:05:20Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-09-08T01:04:03Z","original_application_version":"8","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{},"entitlements":{},"original_purchase_date":"2022-09-07T13:05:43Z","original_app_user_id":"$RCAnonymousID:ddgksf2013","last_seen":"2022-09-08T01:04:03Z"}};
var ddgksf2013={"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2099-12-18T01:04:17Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"};
var ddgksf2021={"grace_period_expires_date":null,"purchase_date":"2022-09-08T01:04:17Z","product_identifier":"ddgksf2013_1y_128","expires_date":"2099-12-18T01:04:17Z"};
var obj = JSON.parse(JSON.stringify(cuttlefish));
ddgksf2021['product_identifier']="com.ddgksf2013.premium.yearly";
obj['subscriber']['subscriptions']['com.ddgksf2013.premium.yearly']=ddgksf2013;

//动态ID分配
if(ua.indexOf('%E8%BD%A6%E7%A5%A8%E7%A5%A8') != -1) {//车票票
 obj['subscriber']['entitlements']['vip+watch_vip']=ddgksf2021;
}
else if(ua.indexOf('VSCO') != -1) {//VSCO
	obj['subscriber']['entitlements']['membership']=ddgksf2021;
}
else if(ua.indexOf('LUTCamera') != -1) {//方弗相机
	ddgksf2021['product_identifier']="com.uzero.funforcam.monthlysub";
	obj['subscriber']['entitlements']['ProVersion']=ddgksf2021;
	obj['subscriber']['subscriptions']['com.uzero.funforcam.monthlysub']=ddgksf2013;
}
else if(ua.indexOf('UTC') != -1) {//花样文字
	obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;	
}
else if(ua.indexOf('%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0') != -1) {//谜底黑胶
	obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;	
}
else if(ua.indexOf('TouchRetouchBasic') != -1) {//TouchRetouchBasic
	obj['subscriber']['entitlements']['premium']=ddgksf2021;	
}
$done({body: JSON.stringify(obj)});
