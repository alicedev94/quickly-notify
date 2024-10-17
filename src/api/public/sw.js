self.addEventListener('push', event => {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || '/default-icon.png',
      badge: data.badge || '/default-badge.png',
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  });
  