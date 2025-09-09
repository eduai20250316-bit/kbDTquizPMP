// PMP 퀴즈 앱 서비스 워커
const CACHE_NAME = 'pmp-quiz-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json'
];

// 서비스 워커 설치
self.addEventListener('install', event => {
    console.log('Service Worker: Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('Service Worker: Files Cached');
                return self.skipWaiting();
            })
    );
});

// 서비스 워커 활성화
self.addEventListener('activate', event => {
    console.log('Service Worker: Activate');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker: Cache Cleared');
            return self.clients.claim();
        })
    );
});

// 네트워크 요청 가로채기
self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetching');
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // 네트워크 응답을 캐시에 저장
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(event.request, responseClone);
                    });
                return response;
            })
            .catch(() => {
                // 네트워크 실패 시 캐시에서 응답
                return caches.match(event.request);
            })
    );
});

// 푸시 알림 처리 (향후 확장)
self.addEventListener('push', event => {
    const options = {
        body: '새로운 PMP 문제가 추가되었습니다!',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%232563eb"/><text x="50" y="70" font-size="60" text-anchor="middle" fill="white">📚</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%232563eb"/><text x="50" y="70" font-size="60" text-anchor="middle" fill="white">📚</text></svg>',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: '퀴즈 풀기',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%2310b981"/><text x="50" y="70" font-size="50" text-anchor="middle" fill="white">▶️</text></svg>'
            },
            {
                action: 'close',
                title: '닫기'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('PMP 퀴즈 앱', options)
    );
});

// 알림 클릭 처리
self.addEventListener('notificationclick', event => {
    console.log('Notification click received.');
    
    event.notification.close();
    
    if (event.action === 'explore') {
        // 퀴즈 앱 열기
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// 백그라운드 동기화 (향후 확장)
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        console.log('Background Sync');
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // 향후 백그라운드에서 새 문제 다운로드 등의 작업 수행
    return Promise.resolve();
}

