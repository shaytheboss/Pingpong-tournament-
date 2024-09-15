// Social Sharing Functionality
const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach(button => {
  button.addEventListener('click', () => {
    const platform = button.getAttribute('data-platform');
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out the Ping Pong Championship!');

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
        break;
    }

    window.open(shareUrl, '_blank');
  });
});
