UserVoice = window.UserVoice || [];
(function() {
  var uv = document.createElement('script');
  uv.type = 'text/javascript';
  uv.async = true;
  uv.src = 'https://widget.uservoice.com/CDL6e6K1fQciGvhFmwEUg.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(uv, s)
})();

UserVoice.push(['identify', {
  email: 'team@augur.net',
  name: 'Augur Team'
}]);

UserVoice.push(['set', {
  accent_color: '#448dd6',
  height: '325px',
  width: '100%',
  strings: {
    post_suggestion_title: 'Share your idea',
    post_suggestion_body: 'When you share an idea, others are able to comment!',
    post_suggestion_message_placeholder: 'Describe your idea, or send us a message below for support inquries.',
    contact_menu_label: 'Need help? Send us a message!'
  }
}]);

UserVoice.push(['addTrigger', {
  mode: 'smartvote',
  trigger_color: 'white',
  trigger_background_color: '#448dd6',
  trigger_position: 'bottom-right',
  trigger_style: 'icon'
}]);

UserVoice.push(['autoprompt', {}]);