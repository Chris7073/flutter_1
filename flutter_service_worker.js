'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "e3af1d0983ab03de49702d0f549143ea",
".git/description": "d974ed58ae03f02691edb2b8d2bc313c",
".git/FETCH_HEAD": "1f7aabe798108b3d9758240b41a2aef9",
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
".git/index": "d9c376b04be58e0d911e3c11d647c102",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67877942de7d275d0e12317632852699",
".git/logs/refs/heads/main": "67877942de7d275d0e12317632852699",
".git/logs/refs/remotes/origin/HEAD": "5a3607ee7dd242c1bb168c77d413f40c",
".git/logs/refs/remotes/origin/main": "524ca81211ce955298cab7095936f99d",
".git/objects/00/59e6b2596cf28fb1258ca777ac2d920b3d2eb3": "c2a452c7503f1bc321da55cea7ab90d7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/11/0f2759a234bbd04557b90006513d77c4940685": "162399dc8ca99a6ee94458e68566c0dd",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/c4d60b7dc3d4044fa7ea85778b677c0a04ac1d": "31439eb064e30ce010fac92bac002eb2",
".git/objects/20/c99f714051daf3dd28ae34d618904c097e8bac": "62a9a9e8c50e9b49456fdb1feecfd832",
".git/objects/26/564c5d69aa894701959d80c32c6963df8568ab": "957ced9846207b059c26f4d00ef82cba",
".git/objects/2b/05be00e32893d4c06805317f7942fcf0159296": "540b3d1aed665cccc325bf931e22a9ee",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/3c/a871a20306799ae381c0d5960358f0851bfa02": "678f1b1827469d2741d736983fa95c31",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/54ef9899478e7e4e417cef503a97e910725950": "a2a4a6d7c93cc94cf97c5308da9c3210",
".git/objects/42/cc228fb48e490dd0ec338fea5b77c96be241cc": "606c9d9f501e92d539e5d7a69c1810fe",
".git/objects/43/7d46a510a44bc55a7b28599b82f5b086c5d3f8": "4f5a739a516a1735d4beaa95006d3c1c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/69/32fb176ad6c17af419fdecc6078d19cd88229e": "deda8b78ce2a4c1dbd314115489a0df1",
".git/objects/73/d29523edfa5ad11be6bb6cdf5650849d0c71ed": "5aff3113739ee7e2a6623504023ece5f",
".git/objects/75/38cfb42ba989a9abed3fde385b44dfcf8b8a29": "9272eac5c4288f93431bd76f75c8b327",
".git/objects/75/f20435cf8ba847a9dcf224aefaf7c979ad75df": "9ae4df3061da98184e19730e4b5dee6c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/1f5bae2f569ec8b008112949e75c3e31971baa": "c3a2c17af8c0c48d3cedc14d139cf73f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/341bf73f2540e982f1439e1c973f65afad4a2f": "78a43b0b675e2632dd62fa39a613c608",
".git/objects/7f/9d6a43b137dd6a2a05adc190d249d1570e12a5": "3deb57c3224d9e3a509b467d83335eff",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/81/de8930b4f526fbf5c9b25ae1ee196770d8b27d": "57bd1dbfdfb90dec0a7511dc50ca6c0b",
".git/objects/86/51c1d86678e3866a17d9e4dcde19c9185ad84a": "84e004fb1fc09b7cb0368e7f48d891c0",
".git/objects/88/16b174d1cbbb3e607333571295e387da5c23ae": "9db874bba3155bd7b92362e58f63598a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ad7ee6b47e90828a9d4a99eefd03e6daa16e17": "b55ef9c9647e870aee3e3728a5d3a631",
".git/objects/8e/1857a6631e12877b46005cf6e7c96f717a24ce": "b50008adef1488fbb9aeacb8a506aa49",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/c860277cd241faace859a198729f1446575c78": "d79528fbcc6945e1c5b5014987605dcc",
".git/objects/99/894c9453693662248623f4ae9b0857fdfce0de": "540d24f69e878b34e236cea9c50ba20f",
".git/objects/9a/ca4eeadf00da6ac610367e4198833ad1f2cdb8": "43a4752e17d9dd71332f6afe62ec9458",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6af564900bdfda5f890c7ced9baa7c8ae6aa42": "eecf101512224e416546d16009e0054a",
".git/objects/a5/a9d92ad00ff2c3a65c99838a95707329d629f8": "0dae36918078f1958de5016fcee78ce1",
".git/objects/a8/4f2cd7d24a80b4653f7fdffc36441cb142dc01": "9f39ad8797c6c65c11e3712e104a2c62",
".git/objects/a8/60458dba01f80b1639e7775e26c5b055a46210": "d4ad51c7eb1ba7f0a9c859c4517c0c58",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/507871795d0a3a459e4aba9e9de274da28e0d5": "35c117a199035bd1ef23cd40b035f48f",
".git/objects/b0/5efb06ba5451b6866d8cf363121979bf299b26": "421174929708fc768c560f33b4ae6e5e",
".git/objects/b0/6a6dba2174ddeea0728045bbc5b1fb0270a8bb": "85c45aa9b0a7491e2622b246152850e8",
".git/objects/b2/5c245281653072481fa0d07d7728dabb723db9": "32aa459fd4143715ae421caf25e9dff1",
".git/objects/b3/75168840604a23ab043d05c0f60d424f4717d6": "b3d65246edfc7e1e1d9d5d2522ad66be",
".git/objects/b6/6f9b8c93c1ae666c289f7b1df286c4c1de51a3": "cd3c0546cd270ad280d5e401a683c959",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/76790770033cb4cc37bcf40d5a1a37456e9c18": "1d7aa331c6281ba458c090c788c77811",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/b0145415a11b37ff511a43a999b5a5ebbb5a89": "d6e11de9707d0567d168c2aa6d2bbaa9",
".git/objects/bb/f18ccb1c1360b42d19517d0d1d8b28bcc70729": "80759e1b499127471f3e667312fe5099",
".git/objects/bc/9ce50b6ba504a6113a8b18e8705e51f288b8f8": "edab3e2a7d3e5364cee5584adb0fb8d9",
".git/objects/bd/9867063adf186fef75fc03dd9c4923fc616e1c": "fa6e7c5364b4045108854e0ea590d089",
".git/objects/c4/cc2ce3a57fb49b33314f8a97b5c5e82dc954cf": "3c376006395473683ff4400ce6038d16",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/b4e14ac3d2cca6a6a9fb32db20f07953fe87c5": "9243b23aa39517a7b07caab815f367aa",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/55866cb536c3f261670c5ad20315ea47e3482b": "10fad9351b09b6b0fedf4a3910d9af58",
".git/objects/d9/6d903d695e148fc8c26860705f2852faaecc74": "c7bccca638328658191a42ee8daeb937",
".git/objects/d9/6efbd9d72f78efafcb39694d7df951a2fb6a54": "a8c222a135d8984b0ae658b2cbb3adea",
".git/objects/da/1e2f278a3c5ca7ecd4d52d06fff03c84f882ad": "30c2a9339378ec0f10a22b0b958df6ff",
".git/objects/dc/24e70b93490cfe37776d2bc8443c547c4cc968": "719fb149bccada1c2fd1948a8e16cd18",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/a70f4be8c8031014745f3d0f1dde6d520213d8": "4e4e5c4d9eab331268eaee50115dc9cd",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/5dbdb3e545c9859f8d931dd403a83006cead0f": "6b03e4a54fed9956c0e3529bab0e3ac8",
".git/objects/e3/d0cdac08eb1ea9a7dd55d392445f578625c398": "699a178ddca728b29a908f6490b8adb9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/daeaa4d664263bcece4584b5ee3a41deba4ba1": "9a2af637c6129db4ab54eb5b854c54a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1dc773176fb090360eed03276b3a1add9f9332": "7303dafc92aee524508e8455e253b1a8",
".git/objects/ee/67f92aa62d0de2db3bcd353cb91f02f26730ce": "fa0a84de03f59679b77d346263466c12",
".git/objects/ee/d99892c9eec226da8bc4f92e5c514fce82e457": "0f13c7312ab04f8a54ad1490fc846505",
".git/objects/f3/394ee58ab84c96b478a444f248b032f7d493ac": "f2ea69aeb5394a828f77ad158be56bc7",
".git/objects/f7/3b16df0b534b530733a2864426b350328aa40d": "e3d7159ff42dfc957d4e767e62129026",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/161273c65fb6333c7e6cd8aa1b209d703c8652": "e3cc718053c8f2bfb03e88d566944d0a",
".git/refs/heads/main": "9dfe6c7ff510d1086f1c4fb81936400c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9dfe6c7ff510d1086f1c4fb81936400c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bc7714637774105cc91d3a93c71b8adf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "49f0230a9c3c9c96c949dbbbb0d23137",
"/": "49f0230a9c3c9c96c949dbbbb0d23137",
"main.dart.js": "3227df6c15cc9c08e6acbc9e6671f7f3",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"README.md": "9ccd124ef14c727f51e9423b1932bc0a",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
