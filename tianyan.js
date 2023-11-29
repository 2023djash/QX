var objc = JSON.parse($response.body);

    objc = {
    "result": {
    "products": [
      {
        "managed": true,
        "status": "CANCELLED",
        "startDate": 1773807563000,
        "productId": "com.yiruike.sodacn.subscribe.oneyear",
        "expireDate": 1705948361000
      }
    ],
    "activated": true
  }


}

$done({body : JSON.stringify(objc)});

^https:\/\/purchase-tianyan-api\.tianyancam\.com\/v1\/purchase\/subscription\/subscriber\/status

hostname = purchase-tianyan-api.tianyancam.com