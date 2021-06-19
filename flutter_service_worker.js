'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "a694cf83a3b92978d949acaca72ffabb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "e0e7f836b6d3caf6f0261259a081ed93",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "13ffef6b09e66109728aac9a8d61c0cd",
".git/logs/refs/heads/main": "13ffef6b09e66109728aac9a8d61c0cd",
".git/logs/refs/remotes/origin/main": "95ccf2525845a628d1883edb19b2def6",
".git/objects/0c/57af2afd99c5f65000e1501595c82d25781348": "b2e11d8705f6cf5507a91c1ff88590e4",
".git/objects/16/50be0eb2e5f86677aa220fbb03f1ab3c04d937": "dc2272daa4830f2d06a7e5f0b25b1ce6",
".git/objects/1a/c4138b748c1d625d98545f499fec4c41344b5b": "27d77e35a84cea357984172af6f12e0b",
".git/objects/1b/9b47bc634891b1a14f77b4fced6c02890a01ab": "1ab87a131440560aa22547227c0b0887",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/b0fbfe990be80d1b1c4735a40627317650f40e": "4fe5787de925d14ee3a942aa5514a973",
".git/objects/41/6f8e640b7c72c4a83ce0cb6a32d9f7e8ca34aa": "8fed2c604189bad007d32ae2247327f3",
".git/objects/46/b5da5cec8c2232bcb52415d3903da8b89f41c7": "1505171308e1b156e3dc2df94cc5aa72",
".git/objects/5c/4b860c3b71d07ed041dbd6eed923a2d7075eca": "ff9dbbec420b0e576320cac72f525558",
".git/objects/5d/8ae49cc2e092c10a65c56de81e2814cdd45d5b": "71b987c7734766caccbf93d5db3ced5d",
".git/objects/5d/e099ef0936ce478e70111d2dbc4185e84cbe8e": "5e1cb77b31417703b05a1cb7fe36d4ef",
".git/objects/64/a7ddfdaf2269ce4309debcbde88bbc7afc868c": "a5b164b64a534fc3582aca03f663f275",
".git/objects/6d/7d292a7febfbbc7e30af62d8da9cb90c7f6bcd": "ba2dd23cb5942724c8ad057277697ebc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/3c1f7d346aac01bb0cafab6a4f678f37db8d4e": "a54ada7256162aa5e4b07f19bd166d9c",
".git/objects/91/6643a391092f47c14126778c9be41c6ec83620": "38e8e09f4160e38ca2602793c6d34124",
".git/objects/99/3b8902a08b74fef2839e3794e86b39af18badb": "b4e40c1960a7d24d05bce211278047f9",
".git/objects/9c/a3355cf8aebb9632b7d8d1ae5345987e508e26": "9e2b3df9921b8a315cfecd7dfddce4ad",
".git/objects/9d/de5afef35b411c1d4c68cf1359bf51319ee362": "6ad74765c10b9618c2f145ba58193b8e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/2514d993837d3e06c3e621a8d6a3e11927b8a8": "e81582561a5901809ab1ca6a113dc5fd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/9c1ee2fb5c0282705dcf0c7d9a08e148985c45": "67b415accd8bb2b437024965222c453a",
".git/objects/af/3b2b5152d71a7c53a9a1d8134de92c8a04bb35": "d44ffd0885b11fc0bc9fe97990d65e00",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/5666703262776e36ba87c9544d3a76ffff67bd": "8ad562b23c773688e566cbf5b794c9a9",
".git/objects/c2/e0a60063f68fc2a3e0964e045cfca756192f06": "b8d3b910ed6973077303989aea3e6744",
".git/objects/c6/5bdc927d8ca9cafe31915c847f1f3f7ec73d64": "61642ef89ab568c51fdad2b3a1317012",
".git/objects/dc/02b8cb0894e85cfdbf7bf5bf6f385c0cde6858": "3ebc9a5fa5ed6935e90e04f27a1d5e65",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fa/9ba5d36f89cebbe5402f1567d5bef1bfff527a": "bfea13fcfc25a6c2bfc2ad96e6b34a10",
".git/objects/fc/c0253fdf0653a165afc6831456930aeae6a04a": "3ce547325689b0380aae22d933cfc0e1",
".git/refs/heads/main": "d0d7bd2612d77d4dfeb2d330f51b796b",
".git/refs/remotes/origin/main": "d0d7bd2612d77d4dfeb2d330f51b796b",
"assets/AssetManifest.json": "bae2512f4ad0705513c4573aaacdee8b",
"assets/FontManifest.json": "b1edce52c735f34131c6683a068186d7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Oxygen-Regular.ttf": "61d9daf063ba38f2d05f8adb7267e6fd",
"assets/fonts/Staatliches-Regular.ttf": "d5746e3b20453d6cee99ab27a0bdf949",
"assets/images/bosscha.jpg": "256600646651e638361646aa2b1b8388",
"assets/images/farm-house.jpg": "3190d0f8d8ad8a5bd96a2e206fb96d06",
"assets/images/floating-market.png": "3825da6a681989426fa55d7493abcf62",
"assets/images/jalan-asia-afrika.jpg": "bec6a2d8b740356d2dfbb1de0fdc3729",
"assets/images/kawah-putih.jpg": "a2371babfc2a47b7f07cd21c70c4d7c1",
"assets/images/museum-geologi.jpg": "feed43fb551fad21fd0b4f40e061c6d3",
"assets/images/ranca-upas.jpg": "18ec585026e0af3f21db6bb7aaccf2ce",
"assets/images/stone-garden.jpg": "baece3780756a2cb8b58e3531201f6e3",
"assets/images/taman-film.jpg": "3c440fc167e79c459af92e62c9b3b400",
"assets/NOTICES": "df3489a0e73236f5f352677131d05ee4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ba5ce5f72403671c3bd237b4744bed3e",
"/": "ba5ce5f72403671c3bd237b4744bed3e",
"main.dart.js": "241b17ff5b349d3c3372b15245cbbbf1",
"manifest.json": "1150497e96d4260296c439b82df1981b",
"README.md": "5507c3c1d85c05f1fea6a21029baa732",
"version.json": "bbafdc7d62b613a6fe788517fcab76b3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
