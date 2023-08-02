'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27ddefafaab3c2ef68eee2145d3e6a35",
".git/config": "604a10f8cefba6b4a7c770193d8a39b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "53c8c67e09d0852f08ffb41b01e35969",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "66f3efb0efdf31a087a10a773d9ffc3f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d3c58feb8ec643a28b553ffa1dd46562",
".git/logs/refs/heads/main": "d3c58feb8ec643a28b553ffa1dd46562",
".git/logs/refs/remotes/origin/HEAD": "3e568996e0d448baf84e587b74e2035d",
".git/logs/refs/remotes/origin/main": "ef066527074bd063b71e4c7cb1acc61f",
".git/objects/00/61bf96921378000329cb9a60ffd3caf0817787": "9f8f8eb710ccb928911bc42dfa1d3bdc",
".git/objects/01/3be9a7db72364bede04024f9626e2d643b92c6": "ba64c0291826ccb751fa127f5b02d4d4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/17ac7325092d914ac96ce06c462578185bba43": "4d707fde84ab00374cb5aff6c7bf4dc8",
".git/objects/11/6d1b9c78dc787c18c09888f85c97e5ff6a1385": "d20aed1339267f28e26afbd645bc7b25",
".git/objects/13/e79990156f38d0211f014c9c7fae09598e3c28": "3c2393f86f2da2f49c1511ba134bb021",
".git/objects/17/5af61f7301545485f8db7db8e1cffc9cce814e": "c5b3aff36909e78a21f45e8f96f4d675",
".git/objects/18/07a74a8cebac2988d6c7fc7b76403771c0d0e9": "1fd22e05ac8f2d08aac34ec32c8be864",
".git/objects/18/228e3ec34923db087bdb0a8ef8fbbc64335daf": "243463b91ca59a836117af57405ae5eb",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/6dc26848c26cc58f68e29c15b37445cb0abb3a": "99d71895c0c1a5a29fee9fb9c2aa110a",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/25/5934bb11c40e4d55e998013ea49057180b1966": "5fe4149f797c6a2e8ab9b66feaa9f301",
".git/objects/25/cb1036a037199fe963b522459348c106ee4508": "76bd34e5dcb94f4d2278ce10fddaf461",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2a/9058e9d32b4e1548243bbcf027c7b0ed8c3521": "8ed663f3b77012e53125c16507ada02d",
".git/objects/2c/ba9a8e92428865fc4a7625aa6819bb2a17ca4f": "72c9e2858606bc6ef5cec11ac998f13c",
".git/objects/2f/1937af7c674fff1b3d5b55cb68983ac9647a5b": "a5977847c736e0f5dfdaaf8c9a91afcd",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3f/7333692ad533dd86b139a6838ef109b4640031": "3a6e4683620b9bcd49303ddbfa02a90a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5c/152d3224203173f8fd6a22e800d1ca8df205c0": "dd5f442850090fd24fb8bae2abb64e83",
".git/objects/5e/818b4a63dba1605e0ede356e4fb32a272855ed": "1fd680342ff2ec7a37c1de591c3b8a53",
".git/objects/62/6e8ca1fd366adda4c9e1eca326250e1877b834": "e2440f95ee85ed908761653ebb8f40cb",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/476245e01ebbeb1c1fa302ac35cae9d958e298": "cb023b482a811baf69762be3ab11240a",
".git/objects/66/2c8bb8888a5e691182ae54da88401f2ee14dce": "c9303e1bf203ff3dcf8e580a09798de1",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/cecbabcc4800e8dcefa734309b9f1c4cdd0653": "6864c587adf7590b10b815618994c593",
".git/objects/7a/151479bc887b245f6a35a8069bc11588f0fb59": "14e10ce076a18e33f1e09618592c5731",
".git/objects/7e/e2a69f52b191c3cbcc5779c3ca181a1f3789cd": "a42c14b3fd90ab041a4b2c4eaaec3247",
".git/objects/85/62decf2b8639a51edfa512879112fab44299ee": "58b708b4b070e98476693b90412d39d4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6cadd5085a1a95867e4aad6e0af5102b65fd24": "3c90ad42f8807b240edf0616c35c24d6",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4c8d42716ae0a0ebc0867b2a43d667ee67dcd5": "d58ac28e9bab682ba14e86a6a75aa68f",
".git/objects/96/58feb101e616c960dd34a629b2c7e0936ebc43": "e60fbbbea5f21870d6b1e67f94fccb47",
".git/objects/9d/78c55679d6e14bc17459e4728c51fda4e633c8": "c07a92e1d3ec4f0d813ae0d251ecbd28",
".git/objects/9f/038fe23f7c8ead0cad9fcdb5653a170c39d2cd": "95521969ea0eb888cf90ab9f6dfeeda3",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a9/d7e0d2b5191d8663e891859d4260c1a5e05392": "d3af4797f79026894d23de14612e9870",
".git/objects/a9/f38a9c825e7764e89fce22d8adc3408173eeda": "848ddbdd5ae6496f00a991e147c489f4",
".git/objects/ab/b853a16e230c79c42a261d9f6fe1487b1e78d9": "af5baa9175e872d8626c7078c92bf333",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cdbe5796052fe50b0d1eac80566d4fcbc512ef": "2cbdb822faa1bd3d918c334178c6ba44",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/dfb47a97f9d606a8383ef503755796d5147ce9": "1ec864e2cba9aa235275f6c2da308256",
".git/objects/bb/a214be0c7fed93ad627897553f4d06590e298a": "12f79cf57eebd02485a75dbd96efa3d2",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/63f135e314a4a8ba7ad750bbb402a086465245": "60edf3239d3d81c78d734d175bea219e",
".git/objects/c6/54061bb4e80e4f7e50aad92a79002440d3b2df": "dc0c2918a402a83f984ea6560d1e3507",
".git/objects/c7/909869ad960687fc11a5d1507fe62dcd5ad434": "4134848cda1e2b5bd8c8537aa0408542",
".git/objects/c8/cac55e433ea1b7c56e90f235819a1bfad7a01b": "5c53848e6d8cf729277882d50dfbcfba",
".git/objects/c9/e5a351afcf74367557ed8b0a00cf78bab63111": "7cb6a9cd4adc161823cb42b16933e986",
".git/objects/d0/79dd285bcd951d5a2ecb238c9e58aca835c51c": "f88ac4f4ad7b0a743c044ad6c016ef0f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/1eb29e8b2b6676cecdecb50649894b8dd69b5e": "38beb13733a7f8851449ecd2dddd27c9",
".git/objects/dc/909bf37e11b0578909a2f958cea3d62c55cc8e": "52e75c37b92cc720f363b24230345bff",
".git/objects/de/2f647262a97de8104c3b2d7479a000d4afe9bb": "4201e5576c9469d958a1d7c2e6c3419b",
".git/objects/df/24b46375a64678c95299f5ce3a5d1ac4cbf32c": "13111bc8bd8308b8301eea84916d237c",
".git/objects/e4/ada14f07f4f00ba02b37b264cc3e05173998e5": "7454caa6b3acf41d24fbe8da5f6a4123",
".git/objects/e6/552e8b078f9ff9c6a748a6c6bd6167edbf5ee9": "68313739d7f86887e557f314578dbfd6",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/44bd1eb59ece7c850dfbe73227d7fc337d0c3c": "aecc6acb77250f38b17eeb1462906e73",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/ddcdb450889a75d851adc03602e36557a001a4": "a9076b2a346175c743a0a258aca04739",
".git/objects/fe/c66ba34479314fcba2a8835c11fba735440422": "64045a5a3c69ca8bb8e74b3dc46f1d9b",
".git/objects/ff/bc6a60e02992fc0b9aeaedec01a6d5e89b04b7": "fadc43d4feb3b62786e23c51305ccac6",
".git/objects/pack/pack-0c397a641e0927c45a6bc5b195eb61d52f0ef61c.idx": "e3291c9d26d354c4c7eade40fd860625",
".git/objects/pack/pack-0c397a641e0927c45a6bc5b195eb61d52f0ef61c.pack": "106852690ca9e5fcea87121d88d25155",
".git/ORIG_HEAD": "3f8683d88a1e8e019d635af6626073a4",
".git/packed-refs": "d35d3a81bf9c3b6788ebba01b2699c72",
".git/refs/heads/main": "9fa3e165d2ddd4a3d1551b29389935cd",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9fa3e165d2ddd4a3d1551b29389935cd",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "85b391cc796bc6535cfc90c4b01e87ef",
"assets/NOTICES": "86609aedfe2ab4853a8dd25804eda109",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "689878b03a0d25917043e2aa8e0c464b",
"/": "689878b03a0d25917043e2aa8e0c464b",
"main.dart.js": "c3b95d1b23cafa8278693dcbf84839fa",
"manifest.json": "0b18b98002f79d6276094fddfc7e2aa6",
"version.json": "818f04a8126de9cf2937757745145118"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
