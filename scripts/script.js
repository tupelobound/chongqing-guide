// Smooth scrolling on navbar click
$('#navbar-header a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault()
    const hash = this.hash
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1200, function () {
      window.location.hash = hash
    })
  }
})

$('#btt').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 'slow')
  return false
})
