import React from 'react'

const BookNavbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BOOKWORMS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Available</a>
        <a class="nav-link" href="/not">Unavailable</a>
        <a class="nav-link" href="/coming">Coming soon</a>
        <a class="nav-link" href="/suggest">Suggestions</a>
      </div>
    </div>
  </div>
</nav>



        
    </div>
  )
}

export default BookNavbar